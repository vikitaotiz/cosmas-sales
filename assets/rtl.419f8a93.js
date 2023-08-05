import{ca as Ge,r as P,b$ as re,bT as pe,ax as N,bR as we,w as H,o as Ae,aA as R,g as _,bV as Je,bJ as E,cb as Ze,cc as te,a as et,cd as tt,h as W,Z as ot,ce as nt,cf as lt,c as w,aC as _e,cg as Fe,ch as it,ci as ye,bP as C,bA as j,bU as at,bB as Y,bg as rt,cj as st,bW as se,ck as xe,cl as ut,c2 as ct,c3 as dt,bL as ft}from"./index.5192b47d.js";import{u as ue,a as ce}from"./use-dark.9cdcb1d0.js";import{r as qe,b as vt,c as mt}from"./use-quasar.d74d3fec.js";function ht(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Ge.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const gt={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function bt({showing:e,avoidEmit:t,configureAnchorEl:o}){const{props:n,proxy:l,emit:r}=_(),i=P(null);let s=null;function m(a){return i.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const d={};o===void 0&&(Object.assign(d,{hide(a){l.hide(a)},toggle(a){l.toggle(a),a.qAnchorHandled=!0},toggleKey(a){re(a,13)===!0&&d.toggle(a)},contextClick(a){l.hide(a),pe(a),N(()=>{l.show(a),a.qAnchorHandled=!0})},prevent:pe,mobileTouch(a){if(d.mobileCleanup(a),m(a)!==!0)return;l.hide(a),i.value.classList.add("non-selectable");const f=a.target;we(d,"anchor",[[f,"touchmove","mobileCleanup","passive"],[f,"touchend","mobileCleanup","passive"],[f,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),s=setTimeout(()=>{s=null,l.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){i.value.classList.remove("non-selectable"),s!==null&&(clearTimeout(s),s=null),e.value===!0&&a!==void 0&&ht()}}),o=function(a=n.contextMenu){if(n.noParentEvent===!0||i.value===null)return;let f;a===!0?l.$q.platform.is.mobile===!0?f=[[i.value,"touchstart","mobileTouch","passive"]]:f=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:f=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],we(d,"anchor",f)});function u(){Je(d,"anchor")}function g(a){for(i.value=a;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;o()}function b(){if(n.target===!1||n.target===""||l.$el.parentNode===null)i.value=null;else if(n.target===!0)g(l.$el.parentNode);else{let a=n.target;if(typeof n.target=="string")try{a=document.querySelector(n.target)}catch{a=void 0}a!=null?(i.value=a.$el||a,o()):(i.value=null,console.error(`Anchor: target "${n.target}" not found`))}}return H(()=>n.contextMenu,a=>{i.value!==null&&(u(),o(a))}),H(()=>n.target,()=>{i.value!==null&&u(),b()}),H(()=>n.noParentEvent,a=>{i.value!==null&&(a===!0?u():o())}),Ae(()=>{b(),t!==!0&&n.modelValue===!0&&i.value===null&&r("update:modelValue",!1)}),R(()=>{s!==null&&clearTimeout(s),u()}),{anchorEl:i,canShow:m,anchorEvents:d}}function pt(e,t){const o=P(null);let n;function l(s,m){const d=`${m!==void 0?"add":"remove"}EventListener`,u=m!==void 0?m:n;s!==window&&s[d]("scroll",u,E.passive),window[d]("scroll",u,E.passive),n=m}function r(){o.value!==null&&(l(o.value),o.value=null)}const i=H(()=>e.noParentEvent,()=>{o.value!==null&&(r(),t())});return R(i),{localScrollTarget:o,unconfigureScrollTarget:r,changeScrollEvent:l}}const wt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},yt=["beforeShow","show","beforeHide","hide"];function xt({showing:e,canShow:t,hideOnRouteChange:o,handleShow:n,handleHide:l,processOnMount:r}){const i=_(),{props:s,emit:m,proxy:d}=i;let u;function g(h){e.value===!0?f(h):b(h)}function b(h){if(s.disable===!0||h!==void 0&&h.qAnchorHandled===!0||t!==void 0&&t(h)!==!0)return;const c=s["onUpdate:modelValue"]!==void 0;c===!0&&(m("update:modelValue",!0),u=h,N(()=>{u===h&&(u=void 0)})),(s.modelValue===null||c===!1)&&a(h)}function a(h){e.value!==!0&&(e.value=!0,m("beforeShow",h),n!==void 0?n(h):m("show",h))}function f(h){if(s.disable===!0)return;const c=s["onUpdate:modelValue"]!==void 0;c===!0&&(m("update:modelValue",!1),u=h,N(()=>{u===h&&(u=void 0)})),(s.modelValue===null||c===!1)&&T(h)}function T(h){e.value!==!1&&(e.value=!1,m("beforeHide",h),l!==void 0?l(h):m("hide",h))}function q(h){s.disable===!0&&h===!0?s["onUpdate:modelValue"]!==void 0&&m("update:modelValue",!1):h===!0!==e.value&&(h===!0?a:T)(u)}H(()=>s.modelValue,q),o!==void 0&&Ze(i)===!0&&H(()=>d.$route.fullPath,()=>{o.value===!0&&e.value===!0&&f()}),r===!0&&Ae(()=>{q(s.modelValue)});const k={show:b,hide:f,toggle:g};return Object.assign(d,k),k}const Q=[];function qt(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return te(e)}else if(e.__qPortal===!0){const o=te(e);return o!==void 0&&o.$options.name==="QPopupProxy"?(e.hide(t),o):e}e=te(e)}while(e!=null)}function Et(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Tt(e,t,o,n){const l=P(!1),r=P(!1);let i=null;const s={},m=n==="dialog"&&Et(e);function d(g){if(g===!0){qe(s),r.value=!0;return}r.value=!1,l.value===!1&&(m===!1&&i===null&&(i=nt(!1,n)),l.value=!0,Q.push(e.proxy),vt(s))}function u(g){if(r.value=!1,g!==!0)return;qe(s),l.value=!1;const b=Q.indexOf(e.proxy);b!==-1&&Q.splice(b,1),i!==null&&(lt(i),i=null)}return et(()=>{u(!0)}),e.proxy.__qPortal=!0,tt(e.proxy,"contentEl",()=>t.value),{showPortal:d,hidePortal:u,portalIsActive:l,portalIsAccessible:r,renderPortal:()=>m===!0?o():l.value===!0?[W(ot,{to:i},o())]:void 0}}const kt={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Lt(e,t=()=>{},o=()=>{}){return{transitionProps:w(()=>{const n=`q-transition--${e.transitionShow||t()}`,l=`q-transition--${e.transitionHide||o()}`;return{appear:!0,enterFromClass:`${n}-enter-from`,enterActiveClass:`${n}-enter-active`,enterToClass:`${n}-enter-to`,leaveFromClass:`${l}-leave-from`,leaveActiveClass:`${l}-leave-active`,leaveToClass:`${l}-leave-to`}}),transitionStyle:w(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function Ct(){let e;const t=_();function o(){e=void 0}return _e(o),R(o),{removeTick:o,registerTick(n){e=n,N(()=>{e===n&&(Fe(t)===!1&&e(),e=void 0)})}}}function St(){let e=null;const t=_();function o(){e!==null&&(clearTimeout(e),e=null)}return _e(o),R(o),{removeTimeout:o,registerTimeout(n,l){o(),Fe(t)===!1&&(e=setTimeout(n,l))}}}const Ht=[null,document,document.body,document.scrollingElement,document.documentElement];function Pt(e,t){let o=it(t);if(o===void 0){if(e==null)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return Ht.includes(o)?window:o}function Wt(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function Mt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let K;function Bt(){if(K!==void 0)return K;const e=document.createElement("p"),t=document.createElement("div");ye(e,{width:"100%",height:"200px"}),ye(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const o=e.offsetWidth;t.style.overflow="scroll";let n=e.offsetWidth;return o===n&&(n=t.clientWidth),t.remove(),K=o-n,K}function $t(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}const B=[];let V;function At(e){V=e.keyCode===27}function _t(){V===!0&&(V=!1)}function Ft(e){V===!0&&(V=!1,re(e,27)===!0&&B[B.length-1](e))}function Ve(e){window[e]("keydown",At),window[e]("blur",_t),window[e]("keyup",Ft),V=!1}function Vt(e){C.is.desktop===!0&&(B.push(e),B.length===1&&Ve("addEventListener"))}function Ee(e){const t=B.indexOf(e);t>-1&&(B.splice(t,1),B.length===0&&Ve("removeEventListener"))}const $=[];function Re(e){$[$.length-1](e)}function Rt(e){C.is.desktop===!0&&($.push(e),$.length===1&&document.body.addEventListener("focusin",Re))}function zt(e){const t=$.indexOf(e);t>-1&&($.splice(t,1),$.length===0&&document.body.removeEventListener("focusin",Re))}const{notPassiveCapture:U}=E,A=[];function X(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let o=Q.length-1;for(;o>=0;){const n=Q[o].$;if(n.type.name==="QTooltip"){o--;continue}if(n.type.name!=="QDialog")break;if(n.props.seamless!==!0)return;o--}for(let n=A.length-1;n>=0;n--){const l=A[n];if((l.anchorEl.value===null||l.anchorEl.value.contains(t)===!1)&&(t===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(t)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function Dt(e){A.push(e),A.length===1&&(document.addEventListener("mousedown",X,U),document.addEventListener("touchstart",X,U))}function Te(e){const t=A.findIndex(o=>o===e);t>-1&&(A.splice(t,1),A.length===0&&(document.removeEventListener("mousedown",X,U),document.removeEventListener("touchstart",X,U)))}let ke,Le;function Ce(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Ot(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const ae={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{ae[`${e}#ltr`]=e,ae[`${e}#rtl`]=e});function Se(e,t){const o=e.split(" ");return{vertical:o[0],horizontal:ae[`${o[1]}#${t===!0?"rtl":"ltr"}`]}}function Qt(e,t){let{top:o,left:n,right:l,bottom:r,width:i,height:s}=e.getBoundingClientRect();return t!==void 0&&(o-=t[1],n-=t[0],r+=t[1],l+=t[0],i+=t[0],s+=t[1]),{top:o,bottom:r,height:s,left:n,right:l,width:i,middle:n+(l-n)/2,center:o+(r-o)/2}}function jt(e,t,o){let{top:n,left:l}=e.getBoundingClientRect();return n+=t.top,l+=t.left,o!==void 0&&(n+=o[1],l+=o[0]),{top:n,bottom:n+1,height:1,left:l,right:l+1,width:1,middle:l,center:n}}function Kt(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function He(e,t,o,n){return{top:e[o.vertical]-t[n.vertical],left:e[o.horizontal]-t[n.horizontal]}}function ze(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{ze(e,t+1)},10);return}const{targetEl:o,offset:n,anchorEl:l,anchorOrigin:r,selfOrigin:i,absoluteOffset:s,fit:m,cover:d,maxHeight:u,maxWidth:g}=e;if(C.is.ios===!0&&window.visualViewport!==void 0){const F=document.body.style,{offsetLeft:x,offsetTop:L}=window.visualViewport;x!==ke&&(F.setProperty("--q-pe-left",x+"px"),ke=x),L!==Le&&(F.setProperty("--q-pe-top",L+"px"),Le=L)}const{scrollLeft:b,scrollTop:a}=o,f=s===void 0?Qt(l,d===!0?[0,0]:n):jt(l,s,n);Object.assign(o.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:g||"100vw",maxHeight:u||"100vh",visibility:"visible"});const{offsetWidth:T,offsetHeight:q}=o,{elWidth:k,elHeight:h}=m===!0||d===!0?{elWidth:Math.max(f.width,T),elHeight:d===!0?Math.max(f.height,q):q}:{elWidth:T,elHeight:q};let c={maxWidth:g,maxHeight:u};(m===!0||d===!0)&&(c.minWidth=f.width+"px",d===!0&&(c.minHeight=f.height+"px")),Object.assign(o.style,c);const y=Kt(k,h);let p=He(f,y,r,i);if(s===void 0||n===void 0)oe(p,f,y,r,i);else{const{top:F,left:x}=p;oe(p,f,y,r,i);let L=!1;if(p.top!==F){L=!0;const S=2*n[1];f.center=f.top-=S,f.bottom-=S+2}if(p.left!==x){L=!0;const S=2*n[0];f.middle=f.left-=S,f.right-=S+2}L===!0&&(p=He(f,y,r,i),oe(p,f,y,r,i))}c={top:p.top+"px",left:p.left+"px"},p.maxHeight!==void 0&&(c.maxHeight=p.maxHeight+"px",f.height>p.maxHeight&&(c.minHeight=c.maxHeight)),p.maxWidth!==void 0&&(c.maxWidth=p.maxWidth+"px",f.width>p.maxWidth&&(c.minWidth=c.maxWidth)),Object.assign(o.style,c),o.scrollTop!==a&&(o.scrollTop=a),o.scrollLeft!==b&&(o.scrollLeft=b)}function oe(e,t,o,n,l){const r=o.bottom,i=o.right,s=Bt(),m=window.innerHeight-s,d=document.body.clientWidth;if(e.top<0||e.top+r>m)if(l.vertical==="center")e.top=t[n.vertical]>m/2?Math.max(0,m-r):0,e.maxHeight=Math.min(r,m);else if(t[n.vertical]>m/2){const u=Math.min(m,n.vertical==="center"?t.center:n.vertical===l.vertical?t.bottom:t.top);e.maxHeight=Math.min(r,u),e.top=Math.max(0,u-r)}else e.top=Math.max(0,n.vertical==="center"?t.center:n.vertical===l.vertical?t.top:t.bottom),e.maxHeight=Math.min(r,m-e.top);if(e.left<0||e.left+i>d)if(e.maxWidth=Math.min(i,d),l.horizontal==="middle")e.left=t[n.horizontal]>d/2?Math.max(0,d-i):0;else if(t[n.horizontal]>d/2){const u=Math.min(d,n.horizontal==="middle"?t.middle:n.horizontal===l.horizontal?t.right:t.left);e.maxWidth=Math.min(i,u),e.left=Math.max(0,u-e.maxWidth)}else e.left=Math.max(0,n.horizontal==="middle"?t.middle:n.horizontal===l.horizontal?t.left:t.right),e.maxWidth=Math.min(i,d-e.left)}var Zt=j({name:"QMenu",inheritAttrs:!1,props:{...gt,...wt,...ue,...kt,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:Ce},self:{type:String,validator:Ce},offset:{type:Array,validator:Ot},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...yt,"click","escapeKey"],setup(e,{slots:t,emit:o,attrs:n}){let l=null,r,i,s;const m=_(),{proxy:d}=m,{$q:u}=d,g=P(null),b=P(!1),a=w(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),f=ce(e,u),{registerTick:T,removeTick:q}=Ct(),{registerTimeout:k}=St(),{transitionProps:h,transitionStyle:c}=Lt(e),{localScrollTarget:y,changeScrollEvent:p,unconfigureScrollTarget:F}=pt(e,ge),{anchorEl:x,canShow:L}=bt({showing:b}),{hide:S}=xt({showing:b,canShow:L,handleShow:Ke,handleHide:Ie,hideOnRouteChange:a,processOnMount:!0}),{showPortal:de,hidePortal:fe,renderPortal:De}=Tt(m,g,Ue,"menu"),G={anchorEl:x,innerRef:g,onClickOutside(v){if(e.persistent!==!0&&b.value===!0)return S(v),(v.type==="touchstart"||v.target.classList.contains("q-dialog__backdrop"))&&se(v),!0}},ve=w(()=>Se(e.anchor||(e.cover===!0?"center middle":"bottom start"),u.lang.rtl)),Oe=w(()=>e.cover===!0?ve.value:Se(e.self||"top start",u.lang.rtl)),Qe=w(()=>(e.square===!0?" q-menu--square":"")+(f.value===!0?" q-menu--dark q-dark":"")),je=w(()=>e.autoClose===!0?{onClick:Ne}:{}),me=w(()=>b.value===!0&&e.persistent!==!0);H(me,v=>{v===!0?(Vt(Z),Dt(G)):(Ee(Z),Te(G))});function J(){mt(()=>{let v=g.value;v&&v.contains(document.activeElement)!==!0&&(v=v.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||v.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||v.querySelector("[autofocus], [data-autofocus]")||v,v.focus({preventScroll:!0}))})}function Ke(v){if(l=e.noRefocus===!1?document.activeElement:null,Rt(be),de(),ge(),r=void 0,v!==void 0&&(e.touchPosition||e.contextMenu)){const ee=at(v);if(ee.left!==void 0){const{top:Xe,left:Ye}=x.value.getBoundingClientRect();r={left:ee.left-Ye,top:ee.top-Xe}}}i===void 0&&(i=H(()=>u.screen.width+"|"+u.screen.height+"|"+e.self+"|"+e.anchor+"|"+u.lang.rtl,z)),e.noFocus!==!0&&document.activeElement.blur(),T(()=>{z(),e.noFocus!==!0&&J()}),k(()=>{u.platform.is.ios===!0&&(s=e.autoClose,g.value.click()),z(),de(!0),o("show",v)},e.transitionDuration)}function Ie(v){q(),fe(),he(!0),l!==null&&(v===void 0||v.qClickOutside!==!0)&&(((v&&v.type.indexOf("key")===0?l.closest('[tabindex]:not([tabindex^="-"])'):void 0)||l).focus(),l=null),k(()=>{fe(!0),o("hide",v)},e.transitionDuration)}function he(v){r=void 0,i!==void 0&&(i(),i=void 0),(v===!0||b.value===!0)&&(zt(be),F(),Te(G),Ee(Z)),v!==!0&&(l=null)}function ge(){(x.value!==null||e.scrollTarget!==void 0)&&(y.value=Pt(x.value,e.scrollTarget),p(y.value,z))}function Ne(v){s!==!0?(qt(d,v),o("click",v)):s=!1}function be(v){me.value===!0&&e.noFocus!==!0&&st(g.value,v.target)!==!0&&J()}function Z(v){o("escapeKey"),S(v)}function z(){ze({targetEl:g.value,offset:e.offset,anchorEl:x.value,anchorOrigin:ve.value,selfOrigin:Oe.value,absoluteOffset:r,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Ue(){return W(rt,h.value,()=>b.value===!0?W("div",{role:"menu",...n,ref:g,tabindex:-1,class:["q-menu q-position-engine scroll"+Qe.value,n.class],style:[n.style,c.value],...je.value},Y(t.default)):null)}return R(he),Object.assign(d,{focus:J,updatePosition:z}),De}});function eo(e,t,o){let n;function l(){n!==void 0&&(xe.remove(n),n=void 0)}return R(()=>{e.value===!0&&l()}),{removeFromHistory:l,addToHistory(){n={condition:()=>o.value===!0,handler:t},xe.add(n)}}}let D=0,ne,le,O,ie=!1,Pe,We,Me,M=null;function It(e){Nt(e)&&se(e)}function Nt(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=ut(e),o=e.shiftKey&&!e.deltaX,n=!o&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),l=o||n?e.deltaY:e.deltaX;for(let r=0;r<t.length;r++){const i=t[r];if($t(i,n))return n?l<0&&i.scrollTop===0?!0:l>0&&i.scrollTop+i.clientHeight===i.scrollHeight:l<0&&i.scrollLeft===0?!0:l>0&&i.scrollLeft+i.clientWidth===i.scrollWidth}return!0}function Be(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function I(e){ie!==!0&&(ie=!0,requestAnimationFrame(()=>{ie=!1;const{height:t}=e.target,{clientHeight:o,scrollTop:n}=document.scrollingElement;(O===void 0||t!==window.innerHeight)&&(O=o-t,document.scrollingElement.scrollTop=n),n>O&&(document.scrollingElement.scrollTop-=Math.ceil((n-O)/8))}))}function $e(e){const t=document.body,o=window.visualViewport!==void 0;if(e==="add"){const{overflowY:n,overflowX:l}=window.getComputedStyle(t);ne=Mt(window),le=Wt(window),Pe=t.style.left,We=t.style.top,Me=window.location.href,t.style.left=`-${ne}px`,t.style.top=`-${le}px`,l!=="hidden"&&(l==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),n!=="hidden"&&(n==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,C.is.ios===!0&&(o===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",I,E.passiveCapture),window.visualViewport.addEventListener("scroll",I,E.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Be,E.passiveCapture))}C.is.desktop===!0&&C.is.mac===!0&&window[`${e}EventListener`]("wheel",It,E.notPassive),e==="remove"&&(C.is.ios===!0&&(o===!0?(window.visualViewport.removeEventListener("resize",I,E.passiveCapture),window.visualViewport.removeEventListener("scroll",I,E.passiveCapture)):window.removeEventListener("scroll",Be,E.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=Pe,t.style.top=We,window.location.href===Me&&window.scrollTo(ne,le),O=void 0)}function Ut(e){let t="add";if(e===!0){if(D++,M!==null){clearTimeout(M),M=null;return}if(D>1)return}else{if(D===0||(D--,D>0))return;if(t="remove",C.is.ios===!0&&C.is.nativeMobile===!0){M!==null&&clearTimeout(M),M=setTimeout(()=>{$e(t),M=null},100);return}}$e(t)}function to(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,Ut(t))}}}function oo(e,t,o){return o<=t?t:Math.min(o,Math.max(t,e))}function no(e,t,o){if(o<=t)return t;const n=o-t+1;let l=t+(e-t)%n;return l<t&&(l=n+l),l===0?0:l}var lo=j({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const o=w(()=>parseInt(e.lines,10)),n=w(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(o.value===1?" ellipsis":"")),l=w(()=>e.lines!==void 0&&o.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":o.value}:null);return()=>W("div",{style:l.value,class:n.value},Y(t.default))}}),io=j({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const o=w(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>W("div",{class:o.value},Y(t.default))}}),ao=j({name:"QItem",props:{...ue,...ct,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:o}){const{proxy:{$q:n}}=_(),l=ce(e,n),{hasLink:r,linkAttrs:i,linkClass:s,linkTag:m,navigateOnClick:d}=dt(),u=P(null),g=P(null),b=w(()=>e.clickable===!0||r.value===!0||e.tag==="label"),a=w(()=>e.disable!==!0&&b.value===!0),f=w(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(l.value===!0?" q-item--dark":"")+(r.value===!0&&e.active===null?s.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(a.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),T=w(()=>{if(e.insetLevel===void 0)return null;const c=n.lang.rtl===!0?"Right":"Left";return{["padding"+c]:16+e.insetLevel*56+"px"}});function q(c){a.value===!0&&(g.value!==null&&(c.qKeyEvent!==!0&&document.activeElement===u.value?g.value.focus():document.activeElement===g.value&&u.value.focus()),d(c))}function k(c){if(a.value===!0&&re(c,13)===!0){se(c),c.qKeyEvent=!0;const y=new MouseEvent("click",c);y.qKeyEvent=!0,u.value.dispatchEvent(y)}o("keyup",c)}function h(){const c=ft(t.default,[]);return a.value===!0&&c.unshift(W("div",{class:"q-focus-helper",tabindex:-1,ref:g})),c}return()=>{const c={ref:u,class:f.value,style:T.value,role:"listitem",onClick:q,onKeyup:k};return a.value===!0?(c.tabindex=e.tabindex||"0",Object.assign(c,i.value)):b.value===!0&&(c["aria-disabled"]="true"),W(m.value,c,h())}}}),ro=j({name:"QList",props:{...ue,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const o=_(),n=ce(e,o.proxy.$q),l=w(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(n.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>W(e.tag,{class:l.value},Y(t.default))}});let Xt=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const t=document.createElement("div");Object.assign(t.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(t),e.scrollLeft=-1e3,Xt=e.scrollLeft>=0,e.remove()}export{Zt as Q,wt as a,yt as b,ht as c,St as d,xt as e,eo as f,oo as g,to as h,Pt as i,Wt as j,Mt as k,Bt as l,lo as m,ao as n,io as o,ro as p,Ct as q,Xt as r,Lt as s,Tt as t,kt as u,zt as v,Ee as w,Rt as x,Vt as y,no as z};
