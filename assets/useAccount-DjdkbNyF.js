import{bd as O,r as v,be as P,bf as W,bg as $,bh as k}from"./index-Ok4mnEmM.js";const V="2.13.0",A=()=>`wagmi@${V}`;class q extends O{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiError"})}get docsBaseUrl(){return"https://wagmi.sh/react"}get version(){return A()}}class C extends q{constructor(){super("`useConfig` must be used within `WagmiProvider`.",{docsPath:"/api/WagmiProvider"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiProviderNotFoundError"})}}function _(e={}){const r=e.config??v.useContext(P);if(!r)throw new C;return r}var E={exports:{}},w={},b={exports:{}},j={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=v;function B(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var R=typeof Object.is=="function"?Object.is:B,D=l.useState,F=l.useEffect,M=l.useLayoutEffect,N=l.useDebugValue;function K(e,r){var u=r(),s=D({inst:{value:u,getSnapshot:r}}),t=s[0].inst,o=s[1];return M(function(){t.value=u,t.getSnapshot=r,g(t)&&o({inst:t})},[e,u,r]),F(function(){return g(t)&&o({inst:t}),e(function(){g(t)&&o({inst:t})})},[e]),N(u),u}function g(e){var r=e.getSnapshot;e=e.value;try{var u=r();return!R(e,u)}catch{return!0}}function L(e,r){return r()}var T=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?L:K;j.useSyncExternalStore=l.useSyncExternalStore!==void 0?l.useSyncExternalStore:T;b.exports=j;var U=b.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=v,z=U;function G(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var H=typeof Object.is=="function"?Object.is:G,I=z.useSyncExternalStore,J=m.useRef,Q=m.useEffect,X=m.useMemo,Y=m.useDebugValue;w.useSyncExternalStoreWithSelector=function(e,r,u,s,t){var o=J(null);if(o.current===null){var n={hasValue:!1,value:null};o.current=n}else n=o.current;o=X(function(){function c(a){if(!d){if(d=!0,h=a,a=s(a),t!==void 0&&n.hasValue){var f=n.value;if(t(f,a))return p=f}return p=a}if(f=p,H(h,a))return f;var x=s(a);return t!==void 0&&t(f,x)?f:(h=a,p=x)}var d=!1,h,p,y=u===void 0?null:u;return[function(){return c(r())},y===null?void 0:function(){return c(y())}]},[r,u,s,t]);var i=I(e,o[0],o[1]);return Q(function(){n.hasValue=!0,n.value=i},[i]),Y(i),i};E.exports=w;var Z=E.exports;const S=e=>typeof e=="object"&&!Array.isArray(e);function ee(e,r,u=r,s=W){const t=v.useRef([]),o=Z.useSyncExternalStoreWithSelector(e,r,u,n=>n,(n,i)=>{if(S(n)&&S(i)&&t.current.length){for(const c of t.current)if(!s(n[c],i[c]))return!1;return!0}return s(n,i)});return v.useMemo(()=>{if(S(o)){const n={...o};let i={};for(const[c,d]of Object.entries(n))i={...i,[c]:{configurable:!1,enumerable:!0,get:()=>(t.current.includes(c)||t.current.push(c),d)}};return Object.defineProperties(n,i),n}return o},[o])}function te(e={}){const r=_(e);return ee(u=>k(r,{onChange:u}),()=>$(r))}export{_ as a,te as u};
