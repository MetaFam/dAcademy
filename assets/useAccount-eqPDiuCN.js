import{u as O}from"./useConfig-BxwOpbe6.js";import{r as d,bd as $,be as A,bf as V}from"./index-qFgN0BDJ.js";var w={exports:{}},g={},j={exports:{}},k={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=d;function q(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _=typeof Object.is=="function"?Object.is:q,R=l.useState,W=l.useEffect,D=l.useLayoutEffect,M=l.useDebugValue;function P(e,t){var u=t(),i=R({inst:{value:u,getSnapshot:t}}),r=i[0].inst,o=i[1];return D(function(){r.value=u,r.getSnapshot=t,h(r)&&o({inst:r})},[e,u,t]),W(function(){return h(r)&&o({inst:r}),e(function(){h(r)&&o({inst:r})})},[e]),M(u),u}function h(e){var t=e.getSnapshot;e=e.value;try{var u=t();return!_(e,u)}catch{return!0}}function C(e,t){return t()}var K=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?C:P;k.useSyncExternalStore=l.useSyncExternalStore!==void 0?l.useSyncExternalStore:K;j.exports=k;var L=j.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S=d,T=L;function z(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var B=typeof Object.is=="function"?Object.is:z,F=T.useSyncExternalStore,G=S.useRef,H=S.useEffect,I=S.useMemo,J=S.useDebugValue;g.useSyncExternalStoreWithSelector=function(e,t,u,i,r){var o=G(null);if(o.current===null){var n={hasValue:!1,value:null};o.current=n}else n=o.current;o=I(function(){function s(f){if(!v){if(v=!0,y=f,f=i(f),r!==void 0&&n.hasValue){var a=n.value;if(r(a,f))return p=a}return p=f}if(a=p,B(y,f))return a;var E=i(f);return r!==void 0&&r(a,E)?a:(y=f,p=E)}var v=!1,y,p,m=u===void 0?null:u;return[function(){return s(t())},m===null?void 0:function(){return s(m())}]},[t,u,i,r]);var c=F(e,o[0],o[1]);return H(function(){n.hasValue=!0,n.value=c},[c]),J(c),c};w.exports=g;var N=w.exports;const x=e=>typeof e=="object"&&!Array.isArray(e);function Q(e,t,u=t,i=$){const r=d.useRef([]),o=N.useSyncExternalStoreWithSelector(e,t,u,n=>n,(n,c)=>{if(x(n)&&x(c)&&r.current.length){for(const s of r.current)if(!i(n[s],c[s]))return!1;return!0}return i(n,c)});return d.useMemo(()=>{if(x(o)){const n={...o};let c={};for(const[s,v]of Object.entries(n))c={...c,[s]:{configurable:!1,enumerable:!0,get:()=>(r.current.includes(s)||r.current.push(s),v)}};return Object.defineProperties(n,c),n}return o},[o])}function Y(e={}){const t=O(e);return Q(u=>V(t,{onChange:u}),()=>A(t))}export{Y as u};
