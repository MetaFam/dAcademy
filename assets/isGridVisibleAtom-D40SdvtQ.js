import{e as h}from"./index-Ok4mnEmM.js";const v={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APPKIT_PROJECT_ID:"e68f5aaf8852a7276013760c5323852a",VITE_THE_GRAPH_QUEST_CHAINS_URL:"https://api.studio.thegraph.com/query/71457/quest-chains-optimism/version/latest",VITE_UCAN_DELEGATOR:"https://ucan.dacade.my/ucan"},_=Symbol((v?"production":void 0)!=="production"?"RESET":""),p=e=>typeof(e==null?void 0:e.then)=="function";function w(e=()=>{try{return window.localStorage}catch(i){(v?"production":void 0)!=="production"&&typeof window<"u"&&console.warn(i);return}},s){var i;let l,m;const a={getItem:(t,n)=>{var o,c;const f=d=>{if(d=d||"",l!==d){try{m=JSON.parse(d,s==null?void 0:s.reviver)}catch{return n}l=d}return m},u=(c=(o=e())==null?void 0:o.getItem(t))!=null?c:null;return p(u)?u.then(f):f(u)},setItem:(t,n)=>{var o;return(o=e())==null?void 0:o.setItem(t,JSON.stringify(n,void 0))},removeItem:t=>{var n;return(n=e())==null?void 0:n.removeItem(t)}},b=t=>(n,o,c)=>t(n,f=>{let u;try{u=JSON.parse(f||"")}catch{u=c}o(u)});let r;try{r=(i=e())==null?void 0:i.subscribe}catch{}return!r&&typeof window<"u"&&typeof window.addEventListener=="function"&&window.Storage&&(r=(t,n)=>{if(!(e()instanceof window.Storage))return()=>{};const o=c=>{c.storageArea===e()&&c.key===t&&n(c.newValue)};return window.addEventListener("storage",o),()=>{window.removeEventListener("storage",o)}}),r&&(a.subscribe=b(r)),a}const E=w();function I(e,s,i=E,l){const m=l==null?void 0:l.getOnInit,a=h(m?i.getItem(e,s):s);return(v?"production":void 0)!=="production"&&(a.debugPrivate=!0),a.onMount=r=>{r(i.getItem(e,s));let t;return i.subscribe&&(t=i.subscribe(e,r,s)),t},h(r=>r(a),(r,t,n)=>{const o=typeof n=="function"?n(r(a)):n;return o===_?(t(a,s),i.removeItem(e)):o instanceof Promise?o.then(c=>(t(a,c),i.setItem(e,c))):(t(a,o),i.setItem(e,o))})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,s){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,s),s)}};const A=globalThis.jotaiAtomCache.get("/home/yepyep/dac/dacademy2/src/atoms/isGridVisibleAtom.ts/isGridVisibleAtom",I("isGridVisible",!0));A.debugLabel="isGridVisibleAtom";export{I as a,A as i};