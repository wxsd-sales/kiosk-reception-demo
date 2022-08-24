var We=Object.defineProperty;var Je=(s,e,n)=>e in s?We(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n;var ue=(s,e,n)=>(Je(s,typeof e!="symbol"?e+"":e,n),n);import{S as Fe,i as He,s as Ge,a as Me,e as I,c as Ye,b as B,g as M,t as D,d as Y,f as T,h as z,j as Xe,o as _e,k as Ze,l as Qe,m as xe,n as de,p as J,q as et,r as tt,u as nt,v as V,w as ee,x as K,y as W,z as Ne,A as Ie,B as De,C as G,D as ge,E as Te,F as rt,G as at}from"./chunks/singletons-3e8c76bf.js";class re{constructor(e,n){ue(this,"name","HttpError");ue(this,"stack");this.status=e,this.message=n!=null?n:`Error: ${e}`}toString(){return this.message}}class qe{constructor(e,n){this.status=e,this.location=n}}function st(s,e){return s==="/"||e==="ignore"?s:e==="never"?s.endsWith("/")?s.slice(0,-1):s:e==="always"&&!s.endsWith("/")?s+"/":s}function it(s){for(const e in s)s[e]=s[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return s}class ot extends URL{get hash(){throw new Error("url.hash is inaccessible from load. Consider accessing hash from the page store within the script tag of your component.")}}function lt(s){let e=5381,n=s.length;if(typeof s=="string")for(;n;)e=e*33^s.charCodeAt(--n);else for(;n;)e=e*33^s[--n];return(e>>>0).toString(36)}const ae=window.fetch;function ct(s,e){let i=`script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(typeof s=="string"?s:s.url)}]`;e&&typeof e.body=="string"&&(i+=`[sveltekit\\:data-body="${lt(e.body)}"]`);const r=document.querySelector(i);if(r&&r.textContent){const{body:u,...t}=JSON.parse(r.textContent);return Promise.resolve(new Response(u,t))}return ae(s,e)}const ft=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function ut(s){const e=[],n=[];let i=!0;return{pattern:s===""?/^\/$/:new RegExp(`^${s.split(/(?:@[a-zA-Z0-9_-]+)?(?:\/|$)/).map((u,t,l)=>{const d=decodeURIComponent(u),p=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(d);if(p)return e.push(p[1]),n.push(p[2]),"(?:/(.*))?";const g=t===l.length-1;return d&&"/"+d.split(/\[(.+?)\]/).map((E,P)=>{if(P%2){const $=ft.exec(E);if(!$)throw new Error(`Invalid param: ${E}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,O,Z,Q]=$;return e.push(Z),n.push(Q),O?"(.*?)":"([^/]+?)"}return g&&E.includes(".")&&(i=!1),E.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${i?"/?":""}$`),names:e,types:n}}function dt(s,e,n,i){const r={};for(let u=0;u<e.length;u+=1){const t=e[u],l=n[u],d=s[u+1]||"";if(l){const p=i[l];if(!p)throw new Error(`Missing "${l}" param matcher`);if(!p(d))return}r[t]=d}return r}function pt(s,e,n){return Object.entries(e).map(([i,[r,u,t,l]])=>{const{pattern:d,names:p,types:g}=ut(i),E={id:i,exec:P=>{const $=d.exec(P);if($)return dt($,p,g,n)},errors:r.map(P=>s[P]),layouts:u.map(P=>s[P]),leaf:s[t],uses_server_data:!!l};return E.errors.length=E.layouts.length=Math.max(E.errors.length,E.layouts.length),E})}function ht(s,e){return new re(s,e)}function mt(s){let e,n,i;var r=s[0][0];function u(t){return{props:{data:t[1],errors:t[4]}}}return r&&(e=new r(u(s))),{c(){e&&V(e.$$.fragment),n=I()},l(t){e&&ee(e.$$.fragment,t),n=I()},m(t,l){e&&K(e,t,l),B(t,n,l),i=!0},p(t,l){const d={};if(l&2&&(d.data=t[1]),l&16&&(d.errors=t[4]),r!==(r=t[0][0])){if(e){M();const p=e;D(p.$$.fragment,1,0,()=>{W(p,1)}),Y()}r?(e=new r(u(t)),V(e.$$.fragment),T(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else r&&e.$set(d)},i(t){i||(e&&T(e.$$.fragment,t),i=!0)},o(t){e&&D(e.$$.fragment,t),i=!1},d(t){t&&z(n),e&&W(e,t)}}}function _t(s){let e,n,i;var r=s[0][0];function u(t){return{props:{data:t[1],$$slots:{default:[bt]},$$scope:{ctx:t}}}}return r&&(e=new r(u(s))),{c(){e&&V(e.$$.fragment),n=I()},l(t){e&&ee(e.$$.fragment,t),n=I()},m(t,l){e&&K(e,t,l),B(t,n,l),i=!0},p(t,l){const d={};if(l&2&&(d.data=t[1]),l&1053&&(d.$$scope={dirty:l,ctx:t}),r!==(r=t[0][0])){if(e){M();const p=e;D(p.$$.fragment,1,0,()=>{W(p,1)}),Y()}r?(e=new r(u(t)),V(e.$$.fragment),T(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else r&&e.$set(d)},i(t){i||(e&&T(e.$$.fragment,t),i=!0)},o(t){e&&D(e.$$.fragment,t),i=!1},d(t){t&&z(n),e&&W(e,t)}}}function gt(s){let e,n,i;var r=s[0][1];function u(t){return{props:{data:t[2],errors:t[4]}}}return r&&(e=new r(u(s))),{c(){e&&V(e.$$.fragment),n=I()},l(t){e&&ee(e.$$.fragment,t),n=I()},m(t,l){e&&K(e,t,l),B(t,n,l),i=!0},p(t,l){const d={};if(l&4&&(d.data=t[2]),l&16&&(d.errors=t[4]),r!==(r=t[0][1])){if(e){M();const p=e;D(p.$$.fragment,1,0,()=>{W(p,1)}),Y()}r?(e=new r(u(t)),V(e.$$.fragment),T(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else r&&e.$set(d)},i(t){i||(e&&T(e.$$.fragment,t),i=!0)},o(t){e&&D(e.$$.fragment,t),i=!1},d(t){t&&z(n),e&&W(e,t)}}}function wt(s){let e,n,i;var r=s[0][1];function u(t){return{props:{data:t[2],$$slots:{default:[yt]},$$scope:{ctx:t}}}}return r&&(e=new r(u(s))),{c(){e&&V(e.$$.fragment),n=I()},l(t){e&&ee(e.$$.fragment,t),n=I()},m(t,l){e&&K(e,t,l),B(t,n,l),i=!0},p(t,l){const d={};if(l&4&&(d.data=t[2]),l&1033&&(d.$$scope={dirty:l,ctx:t}),r!==(r=t[0][1])){if(e){M();const p=e;D(p.$$.fragment,1,0,()=>{W(p,1)}),Y()}r?(e=new r(u(t)),V(e.$$.fragment),T(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else r&&e.$set(d)},i(t){i||(e&&T(e.$$.fragment,t),i=!0)},o(t){e&&D(e.$$.fragment,t),i=!1},d(t){t&&z(n),e&&W(e,t)}}}function yt(s){let e,n,i;var r=s[0][2];function u(t){return{props:{data:t[3]}}}return r&&(e=new r(u(s))),{c(){e&&V(e.$$.fragment),n=I()},l(t){e&&ee(e.$$.fragment,t),n=I()},m(t,l){e&&K(e,t,l),B(t,n,l),i=!0},p(t,l){const d={};if(l&8&&(d.data=t[3]),r!==(r=t[0][2])){if(e){M();const p=e;D(p.$$.fragment,1,0,()=>{W(p,1)}),Y()}r?(e=new r(u(t)),V(e.$$.fragment),T(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else r&&e.$set(d)},i(t){i||(e&&T(e.$$.fragment,t),i=!0)},o(t){e&&D(e.$$.fragment,t),i=!1},d(t){t&&z(n),e&&W(e,t)}}}function bt(s){let e,n,i,r;const u=[wt,gt],t=[];function l(d,p){return d[0][2]?0:1}return e=l(s),n=t[e]=u[e](s),{c(){n.c(),i=I()},l(d){n.l(d),i=I()},m(d,p){t[e].m(d,p),B(d,i,p),r=!0},p(d,p){let g=e;e=l(d),e===g?t[e].p(d,p):(M(),D(t[g],1,1,()=>{t[g]=null}),Y(),n=t[e],n?n.p(d,p):(n=t[e]=u[e](d),n.c()),T(n,1),n.m(i.parentNode,i))},i(d){r||(T(n),r=!0)},o(d){D(n),r=!1},d(d){t[e].d(d),d&&z(i)}}}function ze(s){let e,n=s[6]&&Be(s);return{c(){e=Ze("div"),n&&n.c(),this.h()},l(i){e=Qe(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=xe(e);n&&n.l(r),r.forEach(z),this.h()},h(){de(e,"id","svelte-announcer"),de(e,"aria-live","assertive"),de(e,"aria-atomic","true"),J(e,"position","absolute"),J(e,"left","0"),J(e,"top","0"),J(e,"clip","rect(0 0 0 0)"),J(e,"clip-path","inset(50%)"),J(e,"overflow","hidden"),J(e,"white-space","nowrap"),J(e,"width","1px"),J(e,"height","1px")},m(i,r){B(i,e,r),n&&n.m(e,null)},p(i,r){i[6]?n?n.p(i,r):(n=Be(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&z(e),n&&n.d()}}}function Be(s){let e;return{c(){e=et(s[7])},l(n){e=tt(n,s[7])},m(n,i){B(n,e,i)},p(n,i){i&128&&nt(e,n[7])},d(n){n&&z(e)}}}function vt(s){let e,n,i,r,u;const t=[_t,mt],l=[];function d(g,E){return g[0][1]?0:1}e=d(s),n=l[e]=t[e](s);let p=s[5]&&ze(s);return{c(){n.c(),i=Me(),p&&p.c(),r=I()},l(g){n.l(g),i=Ye(g),p&&p.l(g),r=I()},m(g,E){l[e].m(g,E),B(g,i,E),p&&p.m(g,E),B(g,r,E),u=!0},p(g,[E]){let P=e;e=d(g),e===P?l[e].p(g,E):(M(),D(l[P],1,1,()=>{l[P]=null}),Y(),n=l[e],n?n.p(g,E):(n=l[e]=t[e](g),n.c()),T(n,1),n.m(i.parentNode,i)),g[5]?p?p.p(g,E):(p=ze(g),p.c(),p.m(r.parentNode,r)):p&&(p.d(1),p=null)},i(g){u||(T(n),u=!0)},o(g){D(n),u=!1},d(g){l[e].d(g),g&&z(i),p&&p.d(g),g&&z(r)}}}function kt(s,e,n){let{stores:i}=e,{page:r}=e,{components:u}=e,{data_0:t=null}=e,{data_1:l=null}=e,{data_2:d=null}=e,{errors:p}=e;Xe(i.page.notify);let g=!1,E=!1,P=null;return _e(()=>{const $=i.page.subscribe(()=>{g&&(n(6,E=!0),n(7,P=document.title||"untitled page"))});return n(5,g=!0),$}),s.$$set=$=>{"stores"in $&&n(8,i=$.stores),"page"in $&&n(9,r=$.page),"components"in $&&n(0,u=$.components),"data_0"in $&&n(1,t=$.data_0),"data_1"in $&&n(2,l=$.data_1),"data_2"in $&&n(3,d=$.data_2),"errors"in $&&n(4,p=$.errors)},s.$$.update=()=>{s.$$.dirty&768&&i.page.set(r)},[u,t,l,d,p,g,E,P,i,r]}class $t extends Fe{constructor(e){super(),He(this,e,kt,vt,Ge,{stores:8,page:9,components:0,data_0:1,data_1:2,data_2:3,errors:4})}}const Et=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),St=function(s,e){return new URL(s,e).href},Ve={},pe=function(e,n,i){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=St(r,i),r in Ve)return;Ve[r]=!0;const u=r.endsWith(".css"),t=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const l=document.createElement("link");if(l.rel=u?"stylesheet":Et,u||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),u)return new Promise((d,p)=>{l.addEventListener("load",d),l.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},Lt={},se=[()=>pe(()=>import("./chunks/0-eedda497.js"),["chunks/0-eedda497.js","components/pages/_layout.svelte-7eb9ecd6.js","assets/+layout-ebdc1d49.css","chunks/singletons-3e8c76bf.js","chunks/stores-13ef0e7b.js"],import.meta.url),()=>pe(()=>import("./chunks/1-dc5c3dc9.js"),["chunks/1-dc5c3dc9.js","components/error.svelte-77bf90ca.js","chunks/singletons-3e8c76bf.js","chunks/stores-13ef0e7b.js"],import.meta.url),()=>pe(()=>import("./chunks/2-bbfb8614.js"),["chunks/2-bbfb8614.js","components/pages/_page.svelte-bdac17b7.js","assets/+page-b91e8e31.css","chunks/singletons-3e8c76bf.js","chunks/stores-13ef0e7b.js"],import.meta.url)],Rt={"":[[1],[0],2]},Ke="sveltekit:scroll",F="sveltekit:index",he=pt(se,Rt,Lt),we=se[0],ye=se[1];we();ye();let x={};try{x=JSON.parse(sessionStorage[Ke])}catch{}function me(s){x[s]=ge()}function Ut({target:s,base:e,trailing_slash:n}){var Ue;const i=[],r={id:null,promise:null},u={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,session_id:0,url:null},l=!1,d=!0,p=!1,g=1,E=null,P,$=!0,O=(Ue=history.state)==null?void 0:Ue[F];O||(O=Date.now(),history.replaceState({...history.state,[F]:O},"",location.href));const Z=x[O];Z&&(history.scrollRestoration="manual",scrollTo(Z.x,Z.y));let Q=!1,ie,be;async function ve(a,{noscroll:f=!1,replaceState:h=!1,keepfocus:o=!1,state:c={}},b){if(typeof a=="string"&&(a=new URL(a,Ne(document))),$)return ce({url:a,scroll:f?ge():null,keepfocus:o,redirect_chain:b,details:{state:c,replaceState:h},accepted:()=>{},blocked:()=>{}});await H(a)}async function ke(a){const f=Re(a);if(!f)throw new Error("Attempted to prefetch a URL that does not belong to this app");return r.promise=Le(f),r.id=f.id,r.promise}async function $e(a,f,h,o){var y,L,U;const c=Re(a),b=be={};let m=c&&await Le(c);if(!m&&a.origin===location.origin&&a.pathname===location.pathname&&(m=await ne({status:404,error:new Error(`Not found: ${a.pathname}`),url:a,routeId:null})),!m)return await H(a),!1;if(a=(c==null?void 0:c.url)||a,be!==b)return!1;if(i.length=0,m.type==="redirect")if(f.length>10||f.includes(a.pathname))m=await ne({status:500,error:new Error("Redirect loop"),url:a,routeId:null});else return $?ve(new URL(m.location,a).href,{},[...f,a.pathname]):await H(new URL(m.location,location.href)),!1;else((L=(y=m.props)==null?void 0:y.page)==null?void 0:L.status)>=400&&await G.updated.check()&&await H(a);if(p=!0,h&&h.details){const{details:k}=h,R=k.replaceState?0:1;k.state[F]=O+=R,history[k.replaceState?"replaceState":"pushState"](k.state,"",a)}if(l?(t=m.state,m.props.page&&(m.props.page.url=a),P.$set(m.props)):Ee(m),h){const{scroll:k,keepfocus:R}=h;if(!R){const S=document.body,A=S.getAttribute("tabindex");S.tabIndex=-1,S.focus({preventScroll:!0}),setTimeout(()=>{var w;(w=getSelection())==null||w.removeAllRanges()}),A!==null?S.setAttribute("tabindex",A):S.removeAttribute("tabindex")}if(await Te(),d){const S=a.hash&&document.getElementById(a.hash.slice(1));k?scrollTo(k.x,k.y):S?S.scrollIntoView():scrollTo(0,0)}}else await Te();r.promise=null,r.id=null,d=!0,m.props.page&&(ie=m.props.page);const v=m.state.branch[m.state.branch.length-1];$=((U=v==null?void 0:v.node.shared)==null?void 0:U.router)!==!1,o&&o(),p=!1}function Ee(a){t=a.state;const f=document.querySelector("style[data-sveltekit]");if(f&&f.remove(),ie=a.props.page,P=new $t({target:s,props:{...a.props,stores:G},hydrate:!0}),$){const h={from:null,to:new URL(location.href)};u.after_navigate.forEach(o=>o(h))}l=!0}async function te({url:a,params:f,branch:h,status:o,error:c,routeId:b,validation_errors:m}){const v=h.filter(Boolean),y={type:"loaded",state:{url:a,params:f,branch:h,error:c,session_id:g},props:{components:v.map(R=>R.node.component),errors:m}};let L={},U=!1;for(let R=0;R<v.length;R+=1)L={...L,...v[R].data},(U||!t.branch.some(S=>S===v[R]))&&(y.props[`data_${R}`]=L,U=!0);if(!t.url||a.href!==t.url.href||t.error!==c||U){y.props.page={error:c,params:f,routeId:b,status:o,url:a,data:L};const R=(S,A)=>{Object.defineProperty(y.props.page,S,{get:()=>{throw new Error(`$page.${S} has been replaced by $page.url.${A}`)}})};R("origin","origin"),R("path","pathname"),R("query","searchParams")}return y}async function oe({loader:a,parent:f,url:h,params:o,routeId:c,server_data_node:b}){var L,U,k,R,S;let m=null;const v={dependencies:new Set,params:new Set,parent:!1,url:!1},y=await a();if((L=y.shared)!=null&&L.load){let A=function(..._){for(const q of _){const{href:N}=new URL(q,h);v.dependencies.add(N)}};const w={};for(const _ in o)Object.defineProperty(w,_,{get(){return v.params.add(_),o[_]},enumerable:!0});const C=new ot(h),j={routeId:c,params:w,data:(U=b==null?void 0:b.data)!=null?U:null,get url(){return v.url=!0,C},async fetch(_,q){let N;typeof _=="string"?N=_:(N=_.url,q={body:_.method==="GET"||_.method==="HEAD"?void 0:await _.blob(),cache:_.cache,credentials:_.credentials,headers:_.headers,integrity:_.integrity,keepalive:_.keepalive,method:_.method,mode:_.mode,redirect:_.redirect,referrer:_.referrer,referrerPolicy:_.referrerPolicy,signal:_.signal,...q});const X=new URL(N,h).href;return A(X),l?ae(X,q):ct(N,q)},setHeaders:()=>{},depends:A,parent(){return v.parent=!0,f()}};Object.defineProperties(j,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),m=(k=await y.shared.load.call(null,j))!=null?k:null}return{node:y,loader:a,server:b,shared:(R=y.shared)!=null&&R.load?{type:"data",data:m,uses:v}:null,data:(S=m!=null?m:b==null?void 0:b.data)!=null?S:null}}function Se(a,f,h){if(!h)return!1;if(h.parent&&f||a.url&&h.url)return!0;for(const o of a.params)if(h.params.has(o))return!0;for(const o of h.dependencies)if(i.some(c=>c(o)))return!0;return!1}function le(a){var f,h;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((f=a.uses.dependencies)!=null?f:[]),params:new Set((h=a.uses.params)!=null?h:[]),parent:!!a.uses.parent,url:!!a.uses.url}}:null}async function Le({id:a,url:f,params:h,route:o}){if(r.id===a&&r.promise)return r.promise;const{errors:c,layouts:b,leaf:m}=o,v=t.url&&{url:a!==t.url.pathname+t.url.search,params:Object.keys(h).filter(w=>t.params[w]!==h[w])};[...c,...b,m].forEach(w=>w==null?void 0:w().catch(()=>{}));const y=[...b,m];let L=null;const U=y.reduce((w,C,j)=>{var N;const _=t.branch[j],q=C&&((_==null?void 0:_.loader)!==C||Se(v,w.some(Boolean),(N=_.server)==null?void 0:N.uses));return w.push(q),w},[]);if(o.uses_server_data&&U.some(Boolean)){try{const w=await ae(`${f.pathname}${f.pathname.endsWith("/")?"":"/"}__data.json${f.search}`,{headers:{"x-sveltekit-invalidated":U.map(C=>C?"1":"").join(",")}});if(L=await w.json(),!w.ok)throw L}catch{H(f);return}if(L.type==="redirect")return L}const k=L==null?void 0:L.nodes;let R=!1;const S=y.map(async(w,C)=>{var X,je,Pe,Ae;if(!w)return;const j=t.branch[C],_=(X=k==null?void 0:k[C])!=null?X:null;if((!_||_.type==="skip")&&w===(j==null?void 0:j.loader)&&!Se(v,R,(je=j.shared)==null?void 0:je.uses))return j;if(R=!0,(_==null?void 0:_.type)==="error")throw _.httperror?ht(_.httperror.status,_.httperror.message):_.error;return oe({loader:w,url:f,params:h,routeId:o.id,parent:async()=>{var Ce;const Oe={};for(let fe=0;fe<C;fe+=1)Object.assign(Oe,(Ce=await S[fe])==null?void 0:Ce.data);return Oe},server_data_node:(Ae=(Pe=le(_))!=null?Pe:j==null?void 0:j.server)!=null?Ae:null})});for(const w of S)w.catch(()=>{});const A=[];for(let w=0;w<y.length;w+=1)if(y[w])try{A.push(await S[w])}catch(C){const j=C;if(j instanceof qe)return{type:"redirect",location:j.location};const _=C instanceof re?C.status:500;for(;w--;)if(c[w]){let q,N=w;for(;!A[N];)N-=1;try{return q={node:await c[w](),loader:c[w],data:{},server:null,shared:null},await te({url:f,params:h,branch:A.slice(0,N+1).concat(q),status:_,error:j,routeId:o.id})}catch{continue}}return await ne({status:_,error:j,url:f,routeId:o.id})}else A.push(void 0);return await te({url:f,params:h,branch:A,status:200,error:null,routeId:o.id})}async function ne({status:a,error:f,url:h,routeId:o}){var L;const c={},b=await we();let m=null;if(b.server){const U=await ae(`${h.pathname}${h.pathname.endsWith("/")?"":"/"}__data.json${h.search}`,{headers:{"x-sveltekit-invalidated":"1"}}),k=await U.json();if(m=(L=k==null?void 0:k[0])!=null?L:null,!U.ok||(k==null?void 0:k.type)!=="data"){H(h);return}}const v=await oe({loader:we,url:h,params:c,routeId:o,parent:()=>Promise.resolve({}),server_data_node:le(m)}),y={node:await ye(),loader:ye,shared:null,server:null,data:null};return await te({url:h,params:c,branch:[v,y],status:a,error:f,routeId:o})}function Re(a){if(a.origin!==location.origin||!a.pathname.startsWith(e))return;const f=decodeURI(a.pathname.slice(e.length)||"/");for(const h of he){const o=h.exec(f);if(o){const c=new URL(a.origin+st(a.pathname,n)+a.search+a.hash);return{id:c.pathname+c.search,route:h,params:it(o),url:c}}}}async function ce({url:a,scroll:f,keepfocus:h,redirect_chain:o,details:c,accepted:b,blocked:m}){const v=t.url;let y=!1;const L={from:v,to:a,cancel:()=>y=!0};if(u.before_navigate.forEach(U=>U(L)),y){m();return}me(O),b(),l&&G.navigating.set({from:t.url,to:a}),await $e(a,o,{scroll:f,keepfocus:h,details:c},()=>{const U={from:v,to:a};u.after_navigate.forEach(k=>k(U)),G.navigating.set(null)})}function H(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{_e(()=>(u.after_navigate.push(a),()=>{const f=u.after_navigate.indexOf(a);u.after_navigate.splice(f,1)}))},before_navigate:a=>{_e(()=>(u.before_navigate.push(a),()=>{const f=u.before_navigate.indexOf(a);u.before_navigate.splice(f,1)}))},disable_scroll_handling:()=>{(p||!l)&&(d=!1)},goto:(a,f={})=>ve(a,f,[]),invalidate:a=>{var f,h;if(a===void 0){for(const o of t.branch)(f=o==null?void 0:o.server)==null||f.uses.dependencies.add(""),(h=o==null?void 0:o.shared)==null||h.uses.dependencies.add("");i.push(()=>!0)}else if(typeof a=="function")i.push(a);else{const{href:o}=new URL(a,location.href);i.push(c=>c===o)}return E||(E=Promise.resolve().then(async()=>{await $e(new URL(location.href),[]),E=null})),E},prefetch:async a=>{const f=new URL(a,Ne(document));await ke(f)},prefetch_routes:async a=>{const h=(a?he.filter(o=>a.some(c=>o.exec(c))):he).map(o=>Promise.all([...o.layouts,o.leaf].map(c=>c==null?void 0:c())));await Promise.all(h)},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",o=>{let c=!1;const b={from:t.url,to:null,cancel:()=>c=!0};u.before_navigate.forEach(m=>m(b)),c?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){me(O);try{sessionStorage[Ke]=JSON.stringify(x)}catch{}}});const a=o=>{const c=Ie(o);c&&c.href&&c.hasAttribute("sveltekit:prefetch")&&ke(De(c))};let f;const h=o=>{clearTimeout(f),f=setTimeout(()=>{var c;(c=o.target)==null||c.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",h),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",o=>{if(!$||o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const c=Ie(o);if(!c||!c.href)return;const b=c instanceof SVGAElement,m=De(c);if(!b&&!(m.protocol==="https:"||m.protocol==="http:"))return;const v=(c.getAttribute("rel")||"").split(/\s+/);if(c.hasAttribute("download")||v.includes("external")||c.hasAttribute("sveltekit:reload")||(b?c.target.baseVal:c.target))return;const[y,L]=m.href.split("#");if(L!==void 0&&y===location.href.split("#")[0]){Q=!0,me(O),G.page.set({...ie,url:m}),G.page.notify();return}ce({url:m,scroll:c.hasAttribute("sveltekit:noscroll")?ge():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:m.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault()})}),addEventListener("popstate",o=>{if(o.state&&$){if(o.state[F]===O)return;ce({url:new URL(location.href),scroll:x[o.state[F]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{O=o.state[F]},blocked:()=>{const c=O-o.state[F];history.go(c)}})}}),addEventListener("hashchange",()=>{Q&&(Q=!1,history.replaceState({...history.state,[F]:++O},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&G.navigating.set(null)})},_hydrate:async({status:a,error:f,node_ids:h,params:o,routeId:c})=>{const b=new URL(location.href);let m;try{const v=(k,R)=>{const S=document.querySelector(`script[sveltekit\\:data-type="${k}"]`);return S!=null&&S.textContent?JSON.parse(S.textContent):R},y=v("server_data",[]),L=v("validation_errors",void 0),U=h.map(async(k,R)=>oe({loader:se[k],url:b,params:o,routeId:c,parent:async()=>{const S={};for(let A=0;A<R;A+=1)Object.assign(S,(await U[A]).data);return S},server_data_node:le(y[R])}));m=await te({url:b,params:o,branch:await Promise.all(U),status:a,error:f!=null&&f.__is_http_error?new re(f.status,f.message):f,validation_errors:L,routeId:c})}catch(v){const y=v;if(y instanceof qe){await H(new URL(v.location,location.href));return}m=await ne({status:y instanceof re?y.status:500,error:y,url:b,routeId:c})}Ee(m)}}}function At(s){}async function Ot({paths:s,target:e,route:n,spa:i,trailing_slash:r,hydrate:u}){const t=Ut({target:e,base:s.base,trailing_slash:r});rt({client:t}),at(s),u&&await t._hydrate(u),n&&(i&&t.goto(location.href,{replaceState:!0}),t._start_router()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{At as set_public_env,Ot as start};
