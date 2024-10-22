import{ag as p,cD as m,aD as y,cE as k,I as b,aJ as E,an as L,cF as h,aS as O}from"./index-Dk-UNE0C.js";import{i as x}from"./isAddressEqual-Dn7cKeu3.js";class M extends p{constructor({callbackSelector:r,cause:e,data:o,extraData:c,sender:f,urls:a}){var i;super(e.shortMessage||"An error occurred while fetching for an offchain result.",{cause:e,metaMessages:[...e.metaMessages||[],(i=e.metaMessages)!=null&&i.length?"":[],"Offchain Gateway Call:",a&&["  Gateway URL(s):",...a.map(d=>`    ${m(d)}`)],`  Sender: ${f}`,`  Data: ${o}`,`  Callback selector: ${r}`,`  Extra data: ${c}`].flat(),name:"OffchainLookupError"})}}class R extends p{constructor({result:r,url:e}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${m(e)}`,`Response: ${y(r)}`],name:"OffchainLookupResponseMalformedError"})}}class S extends p{constructor({sender:r,to:e}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${e}`,`OffchainLookup sender address: ${r}`],name:"OffchainLookupSenderMismatchError"})}}const T="0x556f1830",$={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function C(n,{blockNumber:r,blockTag:e,data:o,to:c}){const{args:f}=k({data:o,abi:[$]}),[a,i,d,t,s]=f,{ccipRead:u}=n,g=u&&typeof(u==null?void 0:u.request)=="function"?u.request:D;try{if(!x(c,a))throw new S({sender:a,to:c});const l=await g({data:d,sender:a,urls:i}),{data:w}=await b(n,{blockNumber:r,blockTag:e,data:E([t,L([{type:"bytes"},{type:"bytes"}],[l,s])]),to:c});return w}catch(l){throw new M({callbackSelector:t,cause:l,data:o,extraData:s,sender:a,urls:i})}}async function D({data:n,sender:r,urls:e}){var c;let o=new Error("An unknown error occurred.");for(let f=0;f<e.length;f++){const a=e[f],i=a.includes("{data}")?"GET":"POST",d=i==="POST"?{data:n,sender:r}:void 0;try{const t=await fetch(a.replace("{sender}",r).replace("{data}",n),{body:JSON.stringify(d),method:i});let s;if((c=t.headers.get("Content-Type"))!=null&&c.startsWith("application/json")?s=(await t.json()).data:s=await t.text(),!t.ok){o=new h({body:d,details:s!=null&&s.error?y(s.error):t.statusText,headers:t.headers,status:t.status,url:a});continue}if(!O(s)){o=new R({result:s,url:a});continue}return s}catch(t){o=new h({body:d,details:t.message,url:a})}}throw o}export{D as ccipRequest,C as offchainLookup,$ as offchainLookupAbiItem,T as offchainLookupSignature};
