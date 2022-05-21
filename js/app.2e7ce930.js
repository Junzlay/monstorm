(()=>{"use strict";var e={5991:(e,r,t)=>{t(5363),t(71);var o=t(8880),n=t(9100),a=t(3673);function i(e,r){const t=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(t)}var c=t(4260);const s={},l=(0,c.Z)(s,[["render",i]]),u=l;var d=t(7083),p=t(9582);const f=[{path:"/",component:()=>Promise.all([t.e(736),t.e(343)]).then(t.bind(t,8343)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(0)]).then(t.bind(t,9e3))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([t.e(736),t.e(193)]).then(t.bind(t,2193))}],v=f,h=(0,d.BC)((function(){const e=p.r5,r=(0,p.p7)({scrollBehavior:()=>({left:0,top:0}),routes:v,history:e("")});return r}));async function b(e,r){const t="function"===typeof h?await h({}):h,o=e(u);return o.use(n.Z,r),{app:o,router:t}}const m={config:{brand:{primary:"#051124",secondary:"#0a3273",accent:"#9C27B0",dark:"#1d1d1d",positive:"#21BA45",negative:"#C10015",info:"#31CCEC",warning:"#F2C037"}}},g="";async function y({app:e,router:r},t){let o=!1;const n=e=>{try{return r.resolve(e).href}catch(t){}return Object(e)===e?null:e},a=e=>{if(o=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const r=n(e);null!==r&&(window.location.href=r,window.location.reload())},i=window.location.href.replace(window.location.origin,"");for(let s=0;!1===o&&s<t.length;s++)try{await t[s]({app:e,router:r,ssrContext:null,redirect:a,urlPath:i,publicPath:g})}catch(c){return c&&c.url?void a(c.url):void console.error("[Quasar] boot error:",c)}!0!==o&&(e.use(r),e.mount("#q-app"))}b(o.ri,m).then((e=>Promise.all([Promise.resolve().then(t.bind(t,5474)),Promise.resolve().then(t.bind(t,3697)),Promise.resolve().then(t.bind(t,3785))]).then((r=>{const t=r.map((e=>e.default)).filter((e=>"function"===typeof e));y(e,t)}))))},3785:(e,r,t)=>{t.r(r),t.d(r,{default:()=>i});var o=t(2585),n=t.n(o),a=t(7083);const i=(0,a.xr)((({app:e})=>{e.use(n())}))},5474:(e,r,t)=>{t.r(r),t.d(r,{default:()=>c,api:()=>i});var o=t(7083),n=t(52),a=t.n(n);const i=a().create({baseURL:"https://api.example.com"}),c=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},3697:(e,r,t)=>{t.r(r),t.d(r,{default:()=>n});var o=t(7083);const n=(0,o.xr)((({app:e})=>{window.fbAsyncInit=function(){FB.init({appId:"368708898564204",autoLogAppEvents:!0,xfbml:!0,version:"v2.11"})},function(e,r,t){var o,n=e.getElementsByTagName(r)[0];e.getElementById(t)||(o=e.createElement(r),o.id=t,o.src="https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js",n.parentNode.insertBefore(o,n))}(document,"script","facebook-jssdk")}))}},r={};function t(o){var n=r[o];if(void 0!==n)return n.exports;var a=r[o]={exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,(()=>{var e=[];t.O=(r,o,n,a)=>{if(!o){var i=1/0;for(u=0;u<e.length;u++){for(var[o,n,a]=e[u],c=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(t.O).every((e=>t.O[e](o[s])))?o.splice(s--,1):(c=!1,a<i&&(i=a));if(c){e.splice(u--,1);var l=n();void 0!==l&&(r=l)}}return r}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,n,a]}})(),(()=>{t.n=e=>{var r=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(r,{a:r}),r}})(),(()=>{t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((r,o)=>(t.f[o](e,r),r)),[]))})(),(()=>{t.u=e=>"js/"+e+"."+{0:"19ccf31e",48:"9f730609",93:"cc6469ea",193:"cd9158c0",343:"e9263b8b",459:"35790e6a",507:"731b47fa",839:"3ce98e00",978:"0086535e"}[e]+".js"})(),(()=>{t.miniCssF=e=>"css/"+{143:"app",736:"vendor"}[e]+"."+{143:"31d6cfe0",736:"1b2fbdc3"}[e]+".css"})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r)})(),(()=>{var e={},r="quasar-apexcharts-v2:";t.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var c,s;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==r+a){c=d;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",r+a),c.src=o),e[o]=[n];var p=(r,t)=>{c.onerror=c.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),n&&n.forEach((e=>e(t))),r)return r(t)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),s&&document.head.appendChild(c)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.p=""})(),(()=>{var e={143:0};t.f.j=(r,o)=>{var n=t.o(e,r)?e[r]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((t,o)=>n=e[r]=[t,o]));o.push(n[2]=a);var i=t.p+t.u(r),c=new Error,s=o=>{if(t.o(e,r)&&(n=e[r],0!==n&&(e[r]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;c.message="Loading chunk "+r+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,n[1](c)}};t.l(i,s,"chunk-"+r,r)}},t.O.j=r=>0===e[r];var r=(r,o)=>{var n,a,[i,c,s]=o,l=0;if(i.some((r=>0!==e[r]))){for(n in c)t.o(c,n)&&(t.m[n]=c[n]);if(s)var u=s(t)}for(r&&r(o);l<i.length;l++)a=i[l],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(u)},o=self["webpackChunkquasar_apexcharts_v2"]=self["webpackChunkquasar_apexcharts_v2"]||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))})();var o=t.O(void 0,[736],(()=>t(5991)));o=t.O(o)})();