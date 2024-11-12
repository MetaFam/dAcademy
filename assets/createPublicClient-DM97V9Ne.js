import{X as Re,Z as E,$ as J,a0 as _e,a1 as K,a2 as de,a3 as le,a4 as re,a5 as pe,a6 as Q,a7 as P,a8 as H,a9 as $,aa as C,ab as Me,ac as ge,t as Le,ad as He,ae as ye,af as ze,ag as me,ah as G,ai as be,aj as $e,ak as Ge,al as S,am as z,an as D,ao as O,D as he,ap as R,aq as _,ar as U,as as L,at as Oe,au as we,av as ve,aw as Ue,ax as je,ay as Ve,az as se,aA as Te,aB as Ze,aC as Xe,aD as Be,aE as X,aF as oe,F as Ee,aG as Je,aH as Ke,aI as Qe,v as We,aJ as Ye,aK as et,aL as tt,aM as nt,aN as at,aO as rt,aP as st,aQ as ot,aR as it,aS as ct,aT as ut,aU as ft,aV as dt,aW as lt,aX as pt,aY as gt,y as yt,B as mt,aZ as bt,w as ht}from"./index-DnkxURPJ.js";import{i as W}from"./isAddressEqual-M-Juhya2.js";import{e as wt,s as vt}from"./secp256k1-CN5LKMZq.js";async function Tt(e,{blockNumber:t,blockTag:n,name:a,universalResolverAddress:s}){let r=s;if(!r){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");r=Re({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}const[o]=await E(e,K,"readContract")({address:r,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[J(_e(a))],blockNumber:t,blockTag:n});return o}function j(e,{method:t}){var a,s;const n={};return e.transport.type==="fallback"&&((s=(a=e.transport).onResponse)==null||s.call(a,({method:r,response:o,status:u,transport:f})=>{u==="success"&&t===r&&(n[o]=f.request)})),r=>n[r]||e.request}async function Bt(e){const t=j(e,{method:"eth_newBlockFilter"}),n=await e.request({method:"eth_newBlockFilter"});return{id:n,request:t(n),type:"block"}}class Et extends de{constructor(t){super(`Filter type "${t}" is not supported.`,{name:"FilterTypeNotSupportedError"})}}const ie="/docs/contract/encodeEventTopics";function M(e){var f;const{abi:t,eventName:n,args:a}=e;let s=t[0];if(n){const d=le({abi:t,name:n});if(!d)throw new re(n,{docsPath:ie});s=d}if(s.type!=="event")throw new re(void 0,{docsPath:ie});const r=pe(s),o=Q(r);let u=[];if(a&&"inputs"in s){const d=(f=s.inputs)==null?void 0:f.filter(i=>"indexed"in i&&i.indexed),c=Array.isArray(a)?a:Object.values(a).length>0?(d==null?void 0:d.map(i=>a[i.name]))??[]:[];c.length>0&&(u=(d==null?void 0:d.map((i,p)=>Array.isArray(c[p])?c[p].map((v,b)=>ce({param:i,value:c[p][b]})):c[p]?ce({param:i,value:c[p]}):null))??[])}return[o,...u]}function ce({param:e,value:t}){if(e.type==="string"||e.type==="bytes")return P(H(t));if(e.type==="tuple"||e.type.match(/^(.*)\[(\d+)?\]$/))throw new Et(e.type);return $([e],[t])}async function Fe(e,t){const{address:n,abi:a,args:s,eventName:r,fromBlock:o,strict:u,toBlock:f}=t,d=j(e,{method:"eth_newFilter"}),c=r?M({abi:a,args:s,eventName:r}):void 0,i=await e.request({method:"eth_newFilter",params:[{address:n,fromBlock:typeof o=="bigint"?C(o):o,toBlock:typeof f=="bigint"?C(f):f,topics:c}]});return{abi:a,args:s,eventName:r,id:i,request:d(i),strict:!!u,type:"event"}}async function xe(e,{address:t,args:n,event:a,events:s,fromBlock:r,strict:o,toBlock:u}={}){const f=s??(a?[a]:void 0),d=j(e,{method:"eth_newFilter"});let c=[];f&&(c=[f.flatMap(v=>M({abi:[v],eventName:v.name,args:n}))],a&&(c=c[0]));const i=await e.request({method:"eth_newFilter",params:[{address:t,fromBlock:typeof r=="bigint"?C(r):r,toBlock:typeof u=="bigint"?C(u):u,...c.length?{topics:c}:{}}]});return{abi:f,args:n,eventName:a?a.name:void 0,fromBlock:r,id:i,request:d(i),strict:!!o,toBlock:u,type:"event"}}async function Ae(e){const t=j(e,{method:"eth_newPendingTransactionFilter"}),n=await e.request({method:"eth_newPendingTransactionFilter"});return{id:n,request:t(n),type:"transaction"}}async function Ft(e,t){const{abi:n,address:a,args:s,functionName:r,...o}=t,u=Me({abi:n,args:s,functionName:r});try{return await E(e,ge,"estimateGas")({data:u,to:a,...o})}catch(f){const d=o.account?Le(o.account):void 0;throw He(f,{abi:n,address:a,args:s,docsPath:"/docs/contract/estimateContractGas",functionName:r,sender:d==null?void 0:d.address})}}async function xt(e){const t=await e.request({method:"eth_blobBaseFee"});return BigInt(t)}async function At(e,{blockHash:t,blockNumber:n,blockTag:a="latest"}={}){const s=n!==void 0?C(n):void 0;let r;return t?r=await e.request({method:"eth_getBlockTransactionCountByHash",params:[t]},{dedupe:!0}):r=await e.request({method:"eth_getBlockTransactionCountByNumber",params:[s||a]},{dedupe:!!s}),ye(r)}async function ue(e,{address:t,blockNumber:n,blockTag:a="latest"}){const s=n!==void 0?C(n):void 0,r=await e.request({method:"eth_getCode",params:[t,s||a]},{dedupe:!!s});if(r!=="0x")return r}const fe="/docs/contract/decodeEventLog";function Y(e){const{abi:t,data:n,strict:a,topics:s}=e,r=a??!0,[o,...u]=s;if(!o)throw new ze({docsPath:fe});const f=t.length===1?t[0]:t.find(l=>l.type==="event"&&o===Q(pe(l)));if(!(f&&"name"in f)||f.type!=="event")throw new me(o,{docsPath:fe});const{name:d,inputs:c}=f,i=c==null?void 0:c.some(l=>!("name"in l&&l.name));let p=i?[]:{};const v=c.filter(l=>"indexed"in l&&l.indexed);for(let l=0;l<v.length;l++){const y=v[l],g=u[l];if(!g)throw new G({abiItem:f,param:y});p[i?l:y.name||l]=Ct({param:y,value:g})}const b=c.filter(l=>!("indexed"in l&&l.indexed));if(b.length>0){if(n&&n!=="0x")try{const l=be(b,n);if(l)if(i)p=[...p,...l];else for(let y=0;y<b.length;y++)p[b[y].name]=l[y]}catch(l){if(r)throw l instanceof $e||l instanceof Ge?new S({abiItem:f,data:n,params:b,size:z(n)}):l}else if(r)throw new S({abiItem:f,data:"0x",params:b,size:0})}return{eventName:d,args:Object.values(p).length>0?p:void 0}}function Ct({param:e,value:t}){return e.type==="string"||e.type==="bytes"||e.type==="tuple"||e.type.match(/^(.*)\[(\d+)?\]$/)?t:(be([e],t)||[])[0]}function ee(e){const{abi:t,args:n,logs:a,strict:s=!0}=e,r=(()=>{if(e.eventName)return Array.isArray(e.eventName)?e.eventName:[e.eventName]})();return a.map(o=>{var u;try{const f=t.find(c=>c.type==="event"&&o.topics[0]===Q(c));if(!f)return null;const d=Y({...o,abi:[f],strict:s});return r&&!r.includes(d.eventName)||!Nt({args:d.args,inputs:f.inputs,matchArgs:n})?null:{...d,...o}}catch(f){let d,c;if(f instanceof me)return null;if(f instanceof S||f instanceof G){if(s)return null;d=f.abiItem.name,c=(u=f.abiItem.inputs)==null?void 0:u.some(i=>!("name"in i&&i.name))}return{...o,args:c?[]:{},eventName:d}}}).filter(Boolean)}function Nt(e){const{args:t,inputs:n,matchArgs:a}=e;if(!a)return!0;if(!t)return!1;function s(r,o,u){try{return r.type==="address"?W(o,u):r.type==="string"||r.type==="bytes"?P(H(o))===u:o===u}catch{return!1}}return Array.isArray(t)&&Array.isArray(a)?a.every((r,o)=>{if(r===null)return!0;const u=n[o];return u?(Array.isArray(r)?r:[r]).some(d=>s(u,d,t[o])):!1}):typeof t=="object"&&!Array.isArray(t)&&typeof a=="object"&&!Array.isArray(a)?Object.entries(a).every(([r,o])=>{if(o===null)return!0;const u=n.find(d=>d.name===r);return u?(Array.isArray(o)?o:[o]).some(d=>s(u,d,t[r])):!1}):!1}async function te(e,{address:t,blockHash:n,fromBlock:a,toBlock:s,event:r,events:o,args:u,strict:f}={}){const d=f??!1,c=o??(r?[r]:void 0);let i=[];c&&(i=[c.flatMap(l=>M({abi:[l],eventName:l.name,args:o?void 0:u}))],r&&(i=i[0]));let p;n?p=await e.request({method:"eth_getLogs",params:[{address:t,topics:i,blockHash:n}]}):p=await e.request({method:"eth_getLogs",params:[{address:t,topics:i,fromBlock:typeof a=="bigint"?C(a):a,toBlock:typeof s=="bigint"?C(s):s}]});const v=p.map(b=>D(b));return c?ee({abi:c,args:u,logs:v,strict:d}):v}async function Ce(e,t){const{abi:n,address:a,args:s,blockHash:r,eventName:o,fromBlock:u,toBlock:f,strict:d}=t,c=o?le({abi:n,name:o}):void 0,i=c?void 0:n.filter(p=>p.type==="event");return E(e,te,"getLogs")({address:a,args:s,blockHash:r,event:c,events:i,fromBlock:u,toBlock:f,strict:d})}class Pt extends de{constructor({address:t}){super(`No EIP-712 domain found on contract "${t}".`,{metaMessages:["Ensure that:",`- The contract is deployed at the address "${t}".`,"- `eip712Domain()` function exists on the contract.","- `eip712Domain()` function matches signature to ERC-5267 specification."],name:"Eip712DomainNotFoundError"})}}async function It(e,t){const{address:n,factory:a,factoryData:s}=t;try{const[r,o,u,f,d,c,i]=await E(e,K,"readContract")({abi:kt,address:n,functionName:"eip712Domain",factory:a,factoryData:s});return{domain:{name:o,version:u,chainId:Number(f),verifyingContract:d,salt:c},extensions:i,fields:r}}catch(r){const o=r;throw o.name==="ContractFunctionExecutionError"&&o.cause.name==="ContractFunctionZeroDataError"?new Pt({address:n}):o}}const kt=[{inputs:[],name:"eip712Domain",outputs:[{name:"fields",type:"bytes1"},{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"},{name:"salt",type:"bytes32"},{name:"extensions",type:"uint256[]"}],stateMutability:"view",type:"function"}];function Dt(e){var t;return{baseFeePerGas:e.baseFeePerGas.map(n=>BigInt(n)),gasUsedRatio:e.gasUsedRatio,oldestBlock:BigInt(e.oldestBlock),reward:(t=e.reward)==null?void 0:t.map(n=>n.map(a=>BigInt(a)))}}async function qt(e,{blockCount:t,blockNumber:n,blockTag:a="latest",rewardPercentiles:s}){const r=n?C(n):void 0,o=await e.request({method:"eth_feeHistory",params:[C(t),r||a,s]},{dedupe:!!r});return Dt(o)}async function V(e,{filter:t}){const n="strict"in t&&t.strict,a=await t.request({method:"eth_getFilterChanges",params:[t.id]});if(typeof a[0]=="string")return a;const s=a.map(r=>D(r));return!("abi"in t)||!t.abi?s:ee({abi:t.abi,logs:s,strict:n})}async function St(e,{filter:t}){const n=t.strict??!1,s=(await t.request({method:"eth_getFilterLogs",params:[t.id]})).map(r=>D(r));return t.abi?ee({abi:t.abi,logs:s,strict:n}):s}async function Rt(e,{address:t,blockNumber:n,blockTag:a="latest",slot:s}){const r=n!==void 0?C(n):void 0;return await e.request({method:"eth_getStorageAt",params:[t,s,r||a]})}async function _t(e,{hash:t,transactionReceipt:n}){const[a,s]=await Promise.all([E(e,O,"getBlockNumber")({}),t?E(e,he,"getTransaction")({hash:t}):void 0]),r=(n==null?void 0:n.blockNumber)||(s==null?void 0:s.blockNumber);return r?a-r+1n:0n}function Mt(e,{blockTag:t="latest",emitMissed:n=!1,emitOnBegin:a=!1,onBlock:s,onError:r,includeTransactions:o,poll:u,pollingInterval:f=e.pollingInterval}){const d=typeof u<"u"?u:!(e.transport.type==="webSocket"||e.transport.type==="fallback"&&e.transport.transports[0].config.type==="webSocket"),c=o??!1;let i;return d?(()=>{const b=R(["watchBlocks",e.uid,t,n,a,c,f]);return _(b,{onBlock:s,onError:r},l=>U(async()=>{var y;try{const g=await E(e,L,"getBlock")({blockTag:t,includeTransactions:c});if(g.number&&(i!=null&&i.number)){if(g.number===i.number)return;if(g.number-i.number>1&&n)for(let T=(i==null?void 0:i.number)+1n;T<g.number;T++){const m=await E(e,L,"getBlock")({blockNumber:T,includeTransactions:c});l.onBlock(m,i),i=m}}(!(i!=null&&i.number)||t==="pending"&&!(g!=null&&g.number)||g.number&&g.number>i.number)&&(l.onBlock(g,i),i=g)}catch(g){(y=l.onError)==null||y.call(l,g)}},{emitOnBegin:a,interval:f}))})():(()=>{let b=!0,l=!0,y=()=>b=!1;return(async()=>{try{a&&E(e,L,"getBlock")({blockTag:t,includeTransactions:c}).then(m=>{b&&l&&(s(m,void 0),l=!1)});const g=(()=>{if(e.transport.type==="fallback"){const m=e.transport.transports.find(B=>B.config.type==="webSocket");return m?m.value:e.transport}return e.transport})(),{unsubscribe:T}=await g.subscribe({params:["newHeads"],onData(m){var x,w,h;if(!b)return;const A=(((h=(w=(x=e.chain)==null?void 0:x.formatters)==null?void 0:w.block)==null?void 0:h.format)||Oe)(m.result);s(A,i),l=!1,i=A},onError(m){r==null||r(m)}});y=T,b||y()}catch(g){r==null||r(g)}})(),()=>y()})()}async function Z(e,{filter:t}){return t.request({method:"eth_uninstallFilter",params:[t.id]})}function Lt(e,{address:t,args:n,batch:a=!0,event:s,events:r,fromBlock:o,onError:u,onLogs:f,poll:d,pollingInterval:c=e.pollingInterval,strict:i}){const p=typeof d<"u"?d:typeof o=="bigint"?!0:!(e.transport.type==="webSocket"||e.transport.type==="fallback"&&e.transport.transports[0].config.type==="webSocket"),v=i??!1;return p?(()=>{const y=R(["watchEvent",t,n,a,e.uid,s,c,o]);return _(y,{onLogs:f,onError:u},g=>{let T;o!==void 0&&(T=o-1n);let m,B=!1;const A=U(async()=>{var x;if(!B){try{m=await E(e,xe,"createEventFilter")({address:t,args:n,event:s,events:r,strict:v,fromBlock:o})}catch{}B=!0;return}try{let w;if(m)w=await E(e,V,"getFilterChanges")({filter:m});else{const h=await E(e,O,"getBlockNumber")({});T&&T!==h?w=await E(e,te,"getLogs")({address:t,args:n,event:s,events:r,fromBlock:T+1n,toBlock:h}):w=[],T=h}if(w.length===0)return;if(a)g.onLogs(w);else for(const h of w)g.onLogs([h])}catch(w){m&&w instanceof we&&(B=!1),(x=g.onError)==null||x.call(g,w)}},{emitOnBegin:!0,interval:c});return async()=>{m&&await E(e,Z,"uninstallFilter")({filter:m}),A()}})})():(()=>{let y=!0,g=()=>y=!1;return(async()=>{try{const T=(()=>{if(e.transport.type==="fallback"){const x=e.transport.transports.find(w=>w.config.type==="webSocket");return x?x.value:e.transport}return e.transport})(),m=r??(s?[s]:void 0);let B=[];m&&(B=[m.flatMap(w=>M({abi:[w],eventName:w.name,args:n}))],s&&(B=B[0]));const{unsubscribe:A}=await T.subscribe({params:["logs",{address:t,topics:B}],onData(x){var h;if(!y)return;const w=x.result;try{const{eventName:F,args:I}=Y({abi:m??[],data:w.data,topics:w.topics,strict:v}),N=D(w,{args:I,eventName:F});f([N])}catch(F){let I,N;if(F instanceof S||F instanceof G){if(i)return;I=F.abiItem.name,N=(h=F.abiItem.inputs)==null?void 0:h.some(k=>!("name"in k&&k.name))}const q=D(w,{args:N?[]:{},eventName:I});f([q])}},onError(x){u==null||u(x)}});g=A,y||g()}catch(T){u==null||u(T)}})(),()=>g()})()}function Ht(e,{batch:t=!0,onError:n,onTransactions:a,poll:s,pollingInterval:r=e.pollingInterval}){return(typeof s<"u"?s:e.transport.type!=="webSocket")?(()=>{const d=R(["watchPendingTransactions",e.uid,t,r]);return _(d,{onTransactions:a,onError:n},c=>{let i;const p=U(async()=>{var v;try{if(!i)try{i=await E(e,Ae,"createPendingTransactionFilter")({});return}catch(l){throw p(),l}const b=await E(e,V,"getFilterChanges")({filter:i});if(b.length===0)return;if(t)c.onTransactions(b);else for(const l of b)c.onTransactions([l])}catch(b){(v=c.onError)==null||v.call(c,b)}},{emitOnBegin:!0,interval:r});return async()=>{i&&await E(e,Z,"uninstallFilter")({filter:i}),p()}})})():(()=>{let d=!0,c=()=>d=!1;return(async()=>{try{const{unsubscribe:i}=await e.transport.subscribe({params:["newPendingTransactions"],onData(p){if(!d)return;const v=p.result;a([v])},onError(p){n==null||n(p)}});c=i,d||c()}catch(i){n==null||n(i)}})(),()=>c()})()}const zt=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,$t=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;function Gt(e){const{domain:t={},message:n,primaryType:a}=e,s={EIP712Domain:Zt({domain:t}),...e.types};Vt({domain:t,message:n,primaryType:a,types:s});const r=["0x1901"];return t&&r.push(Ot({domain:t,types:s})),a!=="EIP712Domain"&&r.push(Ne({data:n,primaryType:a,types:s})),P(ve(r))}function Ot({domain:e,types:t}){return Ne({data:e,primaryType:"EIP712Domain",types:t})}function Ne({data:e,primaryType:t,types:n}){const a=Pe({data:e,primaryType:t,types:n});return P(a)}function Pe({data:e,primaryType:t,types:n}){const a=[{type:"bytes32"}],s=[Ut({primaryType:t,types:n})];for(const r of n[t]){const[o,u]=ke({types:n,name:r.name,type:r.type,value:e[r.name]});a.push(o),s.push(u)}return $(a,s)}function Ut({primaryType:e,types:t}){const n=J(jt({primaryType:e,types:t}));return P(n)}function jt({primaryType:e,types:t}){let n="";const a=Ie({primaryType:e,types:t});a.delete(e);const s=[e,...Array.from(a).sort()];for(const r of s)n+=`${r}(${t[r].map(({name:o,type:u})=>`${u} ${o}`).join(",")})`;return n}function Ie({primaryType:e,types:t},n=new Set){const a=e.match(/^\w*/u),s=a==null?void 0:a[0];if(n.has(s)||t[s]===void 0)return n;n.add(s);for(const r of t[s])Ie({primaryType:r.type,types:t},n);return n}function ke({types:e,name:t,type:n,value:a}){if(e[n]!==void 0)return[{type:"bytes32"},P(Pe({data:a,primaryType:n,types:e}))];if(n==="bytes")return a=`0x${(a.length%2?"0":"")+a.slice(2)}`,[{type:"bytes32"},P(a)];if(n==="string")return[{type:"bytes32"},P(J(a))];if(n.lastIndexOf("]")===n.length-1){const s=n.slice(0,n.lastIndexOf("[")),r=a.map(o=>ke({name:t,type:s,types:e,value:o}));return[{type:"bytes32"},P($(r.map(([o])=>o),r.map(([,o])=>o)))]}return[{type:n},a]}function Vt(e){const{domain:t,message:n,primaryType:a,types:s}=e,r=(o,u)=>{for(const f of o){const{name:d,type:c}=f,i=u[d],p=c.match($t);if(p&&(typeof i=="number"||typeof i=="bigint")){const[l,y,g]=p;C(i,{signed:y==="int",size:Number.parseInt(g)/8})}if(c==="address"&&typeof i=="string"&&!Ue(i))throw new je({address:i});const v=c.match(zt);if(v){const[l,y]=v;if(y&&z(i)!==Number.parseInt(y))throw new Ve({expectedSize:Number.parseInt(y),givenSize:z(i)})}const b=s[c];b&&r(b,i)}};s.EIP712Domain&&t&&r(s.EIP712Domain,t),a!=="EIP712Domain"&&r(s[a],n)}function Zt({domain:e}){return[typeof(e==null?void 0:e.name)=="string"&&{name:"name",type:"string"},(e==null?void 0:e.version)&&{name:"version",type:"string"},typeof(e==null?void 0:e.chainId)=="number"&&{name:"chainId",type:"uint256"},(e==null?void 0:e.verifyingContract)&&{name:"verifyingContract",type:"address"},(e==null?void 0:e.salt)&&{name:"salt",type:"bytes32"}].filter(Boolean)}const Xt=`Ethereum Signed Message:
`;function Jt(e){const t=typeof e=="string"?se(e):typeof e.raw=="string"?e.raw:Te(e.raw),n=se(`${Xt}${z(t)}`);return ve([n,t])}function De(e,t){return P(Jt(e),t)}const qe="0x6492649264926492649264926492649264926492649264926492649264926492";function Kt(e){return Ze(e,-32)===qe}function Qt(e){const{address:t,data:n,signature:a,to:s="hex"}=e,r=Xe([$([{type:"address"},{type:"bytes"},{type:"bytes"}],[t,n,a]),qe]);return s==="hex"?r:Be(r)}function Wt(e){return e.map(t=>({...t,value:BigInt(t.value)}))}function Yt(e){return{...e,balance:e.balance?BigInt(e.balance):void 0,nonce:e.nonce?ye(e.nonce):void 0,storageProof:e.storageProof?Wt(e.storageProof):void 0}}async function en(e,{address:t,blockNumber:n,blockTag:a,storageKeys:s}){const r=a??"latest",o=n!==void 0?C(n):void 0,u=await e.request({method:"eth_getProof",params:[t,s,o||r]});return Yt(u)}function tn(e,t){const n=X(e)?H(e):e,a=X(t)?H(t):t;return wt(n,a)}function nn({r:e,s:t,to:n="hex",v:a,yParity:s}){const r=(()=>{if(s===0||s===1)return s;if(a&&(a===27n||a===28n||a>=35n))return a%2n===0n?1:0;throw new Error("Invalid `v` or `yParity` value")})(),o=`0x${new vt.Signature(oe(e),oe(t)).toCompactHex()}${r===0?"1b":"1c"}`;return n==="hex"?o:Be(o)}async function ne(e,t){const{address:n,factory:a,factoryData:s,hash:r,signature:o,...u}=t,f=X(o)?o:typeof o=="object"&&"r"in o&&"s"in o?nn(o):Te(o),d=await(async()=>!a&&!s||Kt(f)?f:Qt({address:a,data:s,signature:f}))();try{const{data:c}=await E(e,Ee,"call")({data:Je({abi:Ke,args:[n,r,d],bytecode:Qe}),...u});return tn(c??"0x0","0x1")}catch(c){try{if(W(We(n),await Ye({hash:r,signature:o})))return!0}catch{}if(c instanceof et)return!1;throw c}}async function an(e,{address:t,message:n,factory:a,factoryData:s,signature:r,...o}){const u=De(n);return ne(e,{address:t,factory:a,factoryData:s,hash:u,signature:r,...o})}async function rn(e,t){const{address:n,factory:a,factoryData:s,signature:r,message:o,primaryType:u,types:f,domain:d,...c}=t,i=Gt({message:o,primaryType:u,types:f,domain:d});return ne(e,{address:n,factory:a,factoryData:s,hash:i,signature:r,...c})}function sn(e,t){const{abi:n,address:a,args:s,batch:r=!0,eventName:o,fromBlock:u,onError:f,onLogs:d,poll:c,pollingInterval:i=e.pollingInterval,strict:p}=t;return(typeof c<"u"?c:typeof u=="bigint"?!0:!(e.transport.type==="webSocket"||e.transport.type==="fallback"&&e.transport.transports[0].config.type==="webSocket"))?(()=>{const y=p??!1,g=R(["watchContractEvent",a,s,r,e.uid,o,i,y,u]);return _(g,{onLogs:d,onError:f},T=>{let m;u!==void 0&&(m=u-1n);let B,A=!1;const x=U(async()=>{var w;if(!A){try{B=await E(e,Fe,"createContractEventFilter")({abi:n,address:a,args:s,eventName:o,strict:y,fromBlock:u})}catch{}A=!0;return}try{let h;if(B)h=await E(e,V,"getFilterChanges")({filter:B});else{const F=await E(e,O,"getBlockNumber")({});m&&m<F?h=await E(e,Ce,"getContractEvents")({abi:n,address:a,args:s,eventName:o,fromBlock:m+1n,toBlock:F,strict:y}):h=[],m=F}if(h.length===0)return;if(r)T.onLogs(h);else for(const F of h)T.onLogs([F])}catch(h){B&&h instanceof we&&(A=!1),(w=T.onError)==null||w.call(T,h)}},{emitOnBegin:!0,interval:i});return async()=>{B&&await E(e,Z,"uninstallFilter")({filter:B}),x()}})})():(()=>{const y=p??!1,g=R(["watchContractEvent",a,s,r,e.uid,o,i,y]);let T=!0,m=()=>T=!1;return _(g,{onLogs:d,onError:f},B=>((async()=>{try{const A=(()=>{if(e.transport.type==="fallback"){const h=e.transport.transports.find(F=>F.config.type==="webSocket");return h?h.value:e.transport}return e.transport})(),x=o?M({abi:n,eventName:o,args:s}):[],{unsubscribe:w}=await A.subscribe({params:["logs",{address:a,topics:x}],onData(h){var I;if(!T)return;const F=h.result;try{const{eventName:N,args:q}=Y({abi:n,data:F.data,topics:F.topics,strict:p}),k=D(F,{args:q,eventName:N});B.onLogs([k])}catch(N){let q,k;if(N instanceof S||N instanceof G){if(p)return;q=N.abiItem.name,k=(I=N.abiItem.inputs)==null?void 0:I.some(ae=>!("name"in ae&&ae.name))}const Se=D(F,{args:k?[]:{},eventName:q});B.onLogs([Se])}},onError(h){var F;(F=B.onError)==null||F.call(B,h)}});m=w,T||m()}catch(A){f==null||f(A)}})(),()=>m()))})()}function on(e){var i,p,v;const{scheme:t,statement:n,...a}=((i=e.match(cn))==null?void 0:i.groups)??{},{chainId:s,expirationTime:r,issuedAt:o,notBefore:u,requestId:f,...d}=((p=e.match(un))==null?void 0:p.groups)??{},c=(v=e.split("Resources:")[1])==null?void 0:v.split(`
- `).slice(1);return{...a,...d,...s?{chainId:Number(s)}:{},...r?{expirationTime:new Date(r)}:{},...o?{issuedAt:new Date(o)}:{},...u?{notBefore:new Date(u)}:{},...f?{requestId:f}:{},...c?{resources:c}:{},...t?{scheme:t}:{},...n?{statement:n}:{}}}const cn=/^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,un=/(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;function fn(e){const{address:t,domain:n,message:a,nonce:s,scheme:r,time:o=new Date}=e;if(n&&a.domain!==n||s&&a.nonce!==s||r&&a.scheme!==r||a.expirationTime&&o>=a.expirationTime||a.notBefore&&o<a.notBefore)return!1;try{if(!a.address||t&&!W(a.address,t))return!1}catch{return!1}return!0}async function dn(e,t){const{address:n,domain:a,message:s,nonce:r,scheme:o,signature:u,time:f=new Date,...d}=t,c=on(s);if(!c.address||!fn({address:n,domain:a,message:c,nonce:r,scheme:o,time:f}))return!1;const p=De(s);return ne(e,{address:c.address,hash:p,signature:u,...d})}function ln(e){return{call:t=>Ee(e,t),createBlockFilter:()=>Bt(e),createContractEventFilter:t=>Fe(e,t),createEventFilter:t=>xe(e,t),createPendingTransactionFilter:()=>Ae(e),estimateContractGas:t=>Ft(e,t),estimateGas:t=>ge(e,t),getBalance:t=>tt(e,t),getBlobBaseFee:()=>xt(e),getBlock:t=>L(e,t),getBlockNumber:t=>O(e,t),getBlockTransactionCount:t=>At(e,t),getBytecode:t=>ue(e,t),getChainId:()=>nt(e),getCode:t=>ue(e,t),getContractEvents:t=>Ce(e,t),getEip712Domain:t=>It(e,t),getEnsAddress:t=>at(e,t),getEnsAvatar:t=>rt(e,t),getEnsName:t=>st(e,t),getEnsResolver:t=>Tt(e,t),getEnsText:t=>ot(e,t),getFeeHistory:t=>qt(e,t),estimateFeesPerGas:t=>it(e,t),getFilterChanges:t=>V(e,t),getFilterLogs:t=>St(e,t),getGasPrice:()=>ct(e),getLogs:t=>te(e,t),getProof:t=>en(e,t),estimateMaxPriorityFeePerGas:t=>ut(e,t),getStorageAt:t=>Rt(e,t),getTransaction:t=>he(e,t),getTransactionConfirmations:t=>_t(e,t),getTransactionCount:t=>ft(e,t),getTransactionReceipt:t=>dt(e,t),multicall:t=>lt(e,t),prepareTransactionRequest:t=>pt(e,t),readContract:t=>K(e,t),sendRawTransaction:t=>gt(e,t),simulateContract:t=>yt(e,t),verifyMessage:t=>an(e,t),verifySiweMessage:t=>dn(e,t),verifyTypedData:t=>rn(e,t),uninstallFilter:t=>Z(e,t),waitForTransactionReceipt:t=>mt(e,t),watchBlocks:t=>Mt(e,t),watchBlockNumber:t=>bt(e,t),watchContractEvent:t=>sn(e,t),watchEvent:t=>Lt(e,t),watchPendingTransactions:t=>Ht(e,t)}}function mn(e){const{key:t="public",name:n="Public Client"}=e;return ht({...e,key:t,name:n,type:"publicClient"}).extend(ln)}export{mn as c};
