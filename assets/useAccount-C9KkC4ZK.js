import{f as h,$ as A}from"./index-Dk-UNE0C.js";var j={exports:{}},x={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=h;function B(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var C=typeof Object.is=="function"?Object.is:B,R=d.useState,D=d.useEffect,I=d.useLayoutEffect,M=d.useDebugValue;function V(t,r){var e=r(),n=R({inst:{value:e,getSnapshot:r}}),s=n[0].inst,u=n[1];return I(function(){s.value=e,s.getSnapshot=r,w(s)&&u({inst:s})},[t,e,r]),D(function(){return w(s)&&u({inst:s}),t(function(){w(s)&&u({inst:s})})},[t]),M(e),e}function w(t){var r=t.getSnapshot;t=t.value;try{var e=r();return!C(t,e)}catch{return!0}}function q(t,r){return r()}var F=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?q:V;x.useSyncExternalStore=d.useSyncExternalStore!==void 0?d.useSyncExternalStore:F;j.exports=x;var T=j.exports;const U="2.13.8",G=()=>`@wagmi/core@${U}`;var b=function(t,r,e,n){if(e==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof r=="function"?t!==r||!n:!r.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?n:e==="a"?n.call(t):n?n.value:r.get(t)},v,$;let N=class E extends Error{get docsBaseUrl(){return"https://wagmi.sh/core"}get version(){return G()}constructor(r,e={}){var u;super(),v.add(this),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiCoreError"});const n=e.cause instanceof E?e.cause.details:(u=e.cause)!=null&&u.message?e.cause.message:e.details,s=e.cause instanceof E&&e.cause.docsPath||e.docsPath;this.message=[r||"An error occurred.","",...e.metaMessages?[...e.metaMessages,""]:[],...s?[`Docs: ${this.docsBaseUrl}${s}.html${e.docsSlug?`#${e.docsSlug}`:""}`]:[],...n?[`Details: ${n}`]:[],`Version: ${this.version}`].join(`
`),e.cause&&(this.cause=e.cause),this.details=n,this.docsPath=s,this.metaMessages=e.metaMessages,this.shortMessage=r}walk(r){return b(this,v,"m",$).call(this,this,r)}};v=new WeakSet,$=function t(r,e){return e!=null&&e(r)?r:r.cause?b(this,v,"m",t).call(this,r.cause,e):r};function k(t){const r=t.state.current,e=t.state.connections.get(r),n=e==null?void 0:e.accounts,s=n==null?void 0:n[0],u=t.chains.find(c=>c.id===(e==null?void 0:e.chainId)),i=t.state.status;switch(i){case"connected":return{address:s,addresses:n,chain:u,chainId:e==null?void 0:e.chainId,connector:e==null?void 0:e.connector,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:i};case"reconnecting":return{address:s,addresses:n,chain:u,chainId:e==null?void 0:e.chainId,connector:e==null?void 0:e.connector,isConnected:!!s,isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:i};case"connecting":return{address:s,addresses:n,chain:u,chainId:e==null?void 0:e.chainId,connector:e==null?void 0:e.connector,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:i};case"disconnected":return{address:void 0,addresses:void 0,chain:void 0,chainId:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:i}}}function m(t,r){if(t===r)return!0;if(t&&r&&typeof t=="object"&&typeof r=="object"){if(t.constructor!==r.constructor)return!1;let e,n;if(Array.isArray(t)&&Array.isArray(r)){if(e=t.length,e!==r.length)return!1;for(n=e;n--!==0;)if(!m(t[n],r[n]))return!1;return!0}if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();const s=Object.keys(t);if(e=s.length,e!==Object.keys(r).length)return!1;for(n=e;n--!==0;)if(!Object.prototype.hasOwnProperty.call(r,s[n]))return!1;for(n=e;n--!==0;){const u=s[n];if(u&&!m(t[u],r[u]))return!1}return!0}return t!==t&&r!==r}function K(t,r){const{onChange:e}=r;return t.subscribe(()=>k(t),e,{equalityFn(n,s){const{connector:u,...i}=n,{connector:c,...a}=s;return m(i,a)&&(u==null?void 0:u.id)===(c==null?void 0:c.id)&&(u==null?void 0:u.uid)===(c==null?void 0:c.uid)}})}const L="2.12.16",z=()=>`wagmi@${L}`;class H extends N{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiError"})}get docsBaseUrl(){return"https://wagmi.sh/react"}get version(){return z()}}class J extends H{constructor(){super("`useConfig` must be used within `WagmiProvider`.",{docsPath:"/api/WagmiProvider"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiProviderNotFoundError"})}}function Q(t={}){const r=t.config??h.useContext(A);if(!r)throw new J;return r}var _={exports:{}},W={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=h,X=T;function Y(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Z=typeof Object.is=="function"?Object.is:Y,ee=X.useSyncExternalStore,te=y.useRef,re=y.useEffect,ne=y.useMemo,se=y.useDebugValue;W.useSyncExternalStoreWithSelector=function(t,r,e,n,s){var u=te(null);if(u.current===null){var i={hasValue:!1,value:null};u.current=i}else i=u.current;u=ne(function(){function a(o){if(!f){if(f=!0,p=o,o=n(o),s!==void 0&&i.hasValue){var l=i.value;if(s(l,o))return g=l}return g=o}if(l=g,Z(p,o))return l;var P=n(o);return s!==void 0&&s(l,P)?l:(p=o,g=P)}var f=!1,p,g,O=e===void 0?null:e;return[function(){return a(r())},O===null?void 0:function(){return a(O())}]},[r,e,n,s]);var c=ee(t,u[0],u[1]);return re(function(){i.hasValue=!0,i.value=c},[c]),se(c),c};_.exports=W;var ue=_.exports;const S=t=>typeof t=="object"&&!Array.isArray(t);function ie(t,r,e=r,n=m){const s=h.useRef([]),u=ue.useSyncExternalStoreWithSelector(t,r,e,i=>i,(i,c)=>{if(S(i)&&S(c)&&s.current.length){for(const a of s.current)if(!n(i[a],c[a]))return!1;return!0}return n(i,c)});return h.useMemo(()=>{if(S(u)){const i={...u};let c={};for(const[a,f]of Object.entries(i))c={...c,[a]:{configurable:!1,enumerable:!0,get:()=>(s.current.includes(a)||s.current.push(a),f)}};return Object.defineProperties(i,c),i}return u},[u])}function ae(t={}){const r=Q(t);return ie(e=>K(r,{onChange:e}),()=>k(r))}export{N as B,Q as a,k as g,ae as u};
