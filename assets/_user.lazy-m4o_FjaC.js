import{c as f,j as e,b as S,H as z,f as T,F as w,r as h,d as Q,D as R,i as g,m as G,h as O,a as U}from"./index-Ok4mnEmM.js";import{u as W,S as B,a as K,b as X,c as _,d as V,e as J,f as Y,g as Z,h as ee,T as D,i as k,j as u,k as o,l as A,m as d,p as se,n as te,o as ae}from"./table-5WGZbRBA.js";import{A as re,a as ie,b as ne}from"./avatar-Dm9rzCe6.js";import{C as m,a as N,b as p,d as j}from"./card-Db9RLH62.js";import{M as y,u as H}from"./index-BEDwgujn.js";import{g as C,r as b}from"./gql-DHmsBT2a.js";import{u as M,D as $,b as P,c as F,d as L,e as le,f as E,g as I,a as ce}from"./use-media-query-Dwjsrv8G.js";import{D as oe,a as de,b as he,c as xe,d as ue}from"./dialog-CalnMfTS.js";import{u as me}from"./useQuery-DcmfAyTL.js";import{C as pe,a as je,b as ge,c as fe,d as Ne}from"./carousel-DCbTZvOw.js";import{H as Ce,a as be,I as v,b as Se}from"./hover-card-CtTuCSxA.js";import{c as we}from"./index-BfzsJM49.js";import"./button-D64T5TY4.js";import"./input-gR1WBMa9.js";import"./index-CK2yHQ_N.js";import"./index-C2TjqpFy.js";import"./index-DgVYSesK.js";import"./tslib.es6-B2dMZmZB.js";import"./isGridVisibleAtom-D40SdvtQ.js";import"./useAccount-DjdkbNyF.js";import"./index-BDYr2gml.js";import"./isAddressEqual-gZzG8_o9.js";import"./secp256k1-DJUQ9hgm.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=f("LaptopMinimalCheck",[["path",{d:"M2 20h20",key:"owomy5"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}],["rect",{x:"3",y:"4",width:"18",height:"12",rx:"2",key:"8ur36m"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=f("Presentation",[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=f("SendHorizontal",[["path",{d:"M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z",key:"117uat"}],["path",{d:"M6 12h16",key:"s4cdu5"}]]);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(s,t){return this.cache.has(s)?this.cache.get(s):(this.cache.set(s,t),t)}};const Te=[{title:"NFTs Earned",url:"#nfts-earned",icon:ye},{title:"Submissions",url:"#submissions",icon:qe},{title:"Workshops Attended",url:"#workshops-attended",icon:ve}];function q(s){return s?`${s.slice(0,5)}…${s.slice(-5)}`:""}function De(){const{address:s,ensName:t,ensAvatar:a}=W(),l=t||q(s||"");return e.jsx(B,{children:e.jsxs(K,{children:[e.jsxs(X,{children:[e.jsx(_,{children:"User Profile"}),e.jsx(V,{children:e.jsx(J,{className:"mt-8",children:Te.map(r=>e.jsx(Y,{children:e.jsx(Z,{asChild:!0,children:e.jsxs(S,{to:r.url,className:"flex items-center gap-2",children:[e.jsx(r.icon,{className:"h-4 w-4"}),e.jsx("span",{children:r.title})]})})},r.title))})})]}),e.jsxs("div",{className:"mt-auto flex items-center justify-between gap-2 p-4",children:[l?e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsxs(re,{children:[e.jsx(ie,{src:a||"https://example.com/avatar.jpg",alt:"Avatar"}),e.jsx(ne,{children:t?t.slice(0,2).toUpperCase():q(s||"").slice(0,2).toUpperCase()})]}),e.jsx("div",{children:e.jsx("p",{className:"text-sm font-medium",children:l})})]}):e.jsx("div",{className:"mx-auto",children:e.jsx("w3m-button",{size:"sm"})}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(ee,{}),e.jsx(S,{to:"/",className:"flex items-center",children:e.jsx(z,{className:"h-4 w-4"})})]})]})]})})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(s,t){return this.cache.has(s)?this.cache.get(s):(this.cache.set(s,t),t)}};const ke=C`
  query ProofDetails($proof: String) {
    proofSubmission(id: $proof) {
      description
      txHash
    }
    reviewSubmissions(where: {proof: $proof}) {
      description
      questStatus {
        status
      }
      txHash
    }
  }
`;function Ae({submission:s,onClose:t}){const a=M("(min-width: 768px)"),{data:{reviewSubmissions:l,proofSubmission:r}={},isLoading:x}=me({enabled:!!s.id,queryKey:[`info-${s.id}`],queryFn:async()=>b("https://api.studio.thegraph.com/query/71457/quest-chains-optimism/version/latest",ke,{proof:s.id})});if(x)return e.jsx("span",{className:"loading loading-spinner",children:"Loading"});const n=e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("span",{className:"text-blue-400",children:"Date:"})," ",new Date(s.timestamp*1e3).toLocaleDateString()]}),e.jsxs("p",{children:[e.jsx("span",{className:"text-blue-400",children:"Book:"})," ",s.questChain.name]}),e.jsxs("p",{children:[e.jsx("span",{className:"text-blue-400",children:"Chapter:"})," ",s.quest.name]}),e.jsx("h2",{className:"text-blue-400 text-left",children:"Proof Response:"}),e.jsx("div",{className:"content",children:e.jsx(y,{children:r==null?void 0:r.description})}),e.jsx("ol",{children:l==null?void 0:l.map(i=>e.jsxs("li",{children:[e.jsxs("h2",{className:"mb-2",children:[e.jsx("span",{className:"text-blue-400",children:"Status: "}),e.jsx("span",{className:T({"text-green-400":i.questStatus.status==="pass","text-red-600":i.questStatus.status==="fail","text-blue-500":i.questStatus.status==="review","text-yellow-200":i.questStatus.status!=="pass"&&i.questStatus.status!=="fail"&&i.questStatus.status!=="review"}),children:i.questStatus.status})]}),e.jsx(y,{children:i.description}),e.jsxs("p",{children:[e.jsx("span",{className:"text-blue-400",children:"Proof TX Hash:  "}),r!=null&&r.txHash?e.jsx("a",{href:`https://optimistic.etherscan.io/tx/${r.txHash}`,target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 underline cursor-pointer",children:w(r.txHash)}):"N/A"]}),e.jsxs("p",{children:[e.jsx("span",{className:"text-blue-400",children:"Review TX Hash:  "}),i.txHash?e.jsx("a",{href:`https://optimistic.etherscan.io/tx/${i.txHash}`,target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 underline cursor-pointer",children:w(i.txHash)}):"N/A"]})]},i.txHash))})]});return e.jsx(e.Fragment,{children:a?e.jsx(oe,{open:!0,onOpenChange:t,children:e.jsxs(de,{className:"sm:max-w-[425px]",children:[e.jsxs(he,{children:[e.jsx(xe,{children:"Submission Details"}),e.jsx(ue,{children:"Details of your submissions"})]}),n]})}):e.jsx($,{open:!0,onOpenChange:t,children:e.jsxs(P,{className:"px-4",children:[e.jsxs(F,{className:"text-left",children:[e.jsx(L,{children:"Submission Details"}),e.jsx(le,{children:"Details of your submissions"})]}),n,e.jsx(E,{className:"pt-4",children:e.jsx(I,{asChild:!0,children:e.jsx("button",{className:"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10",onClick:t,children:"Close"})})})]})})})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(s,t){return this.cache.has(s)?this.cache.get(s):(this.cache.set(s,t),t)}};const He=C`
  query ChainDetails($address: String) {
    proofSubmissions(where: { user: $address }) {
      id
      timestamp
      questChain {
        name
      }
      questStatus {
        status
      }
      quest {
        name
      }
    }
  }
`,Me=(s,t=3)=>{const a=s.split(" ");return a.length>t?a.slice(0,t).join(" ")+"...":s},$e=({account:s})=>{const{data:{proofSubmissions:t}={}}=H({queryKey:[`submissions-${s}`],queryFn:async()=>b("https://api.studio.thegraph.com/query/71457/quest-chains-optimism/version/latest",He,{address:s==null?void 0:s.toLowerCase()})}),a=t==null?void 0:t.sort((n,i)=>{if(n.questStatus.status!==i.questStatus.status){const c=["review","fail","pass"];return c.indexOf(n.questStatus.status)-c.indexOf(i.questStatus.status)}return n.timestamp-i.timestamp}),[l,r]=h.useState(null),x=n=>{const i=a==null?void 0:a.find(c=>c.id===n);r(i||null)};return e.jsxs(m,{className:"w-full",children:[e.jsx(N,{children:e.jsx(p,{className:"text-center text-xl",children:"Submission Statuses"})}),e.jsx(j,{children:e.jsxs(D,{children:[e.jsx(k,{children:e.jsxs(u,{className:"bg-transparent hover:bg-transparent cursor-default",children:[e.jsx(o,{className:"w-[100px]",children:"Date"}),e.jsx(o,{children:"Book"}),e.jsx(o,{children:"Chapter"}),e.jsx(o,{children:"Status"})]})}),e.jsx(A,{children:a==null?void 0:a.map((n,i)=>e.jsxs(u,{onClick:()=>x(n.id),className:"cursor-pointer hover:bg-secondary/30",children:[e.jsx(d,{className:"font-medium",children:new Date(n.timestamp*1e3).toLocaleDateString()}),e.jsx(d,{className:"text-ellipsis overflow-hidden whitespace-nowrap max-w-[150px]",children:Me(n.questChain.name)}),e.jsx(d,{className:"text-ellipsis overflow-hidden whitespace-nowrap max-w-[150px]",children:n.quest.name}),e.jsx(d,{className:T({"text-green-400":n.questStatus.status==="pass","text-red-600":n.questStatus.status==="fail","text-blue-500":n.questStatus.status==="review","text-yellow-200":n.questStatus.status!=="pass"&&n.questStatus.status!=="fail"&&n.questStatus.status!=="review"}),children:n.questStatus.status})]},i))})]})}),l&&e.jsx(Ae,{submission:l,onClose:()=>r(null)})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(s,t){return this.cache.has(s)?this.cache.get(s):(this.cache.set(s,t),t)}};const Pe=C`
  query ChainDetails($address: String) {
    user(id: $address) {
      completedQuestChains {
        token {
          imageUrl
        }
        name
        slug  # Ensure this is included in your GraphQL response
      }
    }
  }
`,Fe=({account:s})=>{var l;const t=Q(),{data:{user:a}}=H({queryKey:[`completed-${s}`],queryFn:async()=>b("https://api.studio.thegraph.com/query/71457/quest-chains-optimism/version/latest",Pe,{address:s==null?void 0:s.toLowerCase()})});return e.jsxs(m,{className:"w-full",children:[e.jsx(N,{children:e.jsx(p,{className:"text-center text-xl",children:"NFTs Earned"})}),e.jsx(j,{children:!!a&&e.jsxs(pe,{opts:{align:"start"},className:"w-5/6 mx-auto",children:[e.jsx(je,{children:(l=a.completedQuestChains)==null?void 0:l.map(r=>e.jsx(ge,{className:"md:basis-1/2 lg:basis-1/3 cursor-pointer",onClick:()=>t({to:`/book/${r.slug}/0`}),children:e.jsx("div",{className:"p-1",children:e.jsxs(m,{children:[e.jsx(p,{className:"text-center text-base mt-2 mx-2",children:r.name}),e.jsx(j,{className:"flex aspect-auto items-center justify-center p-2",children:e.jsx("figure",{className:"",children:e.jsx("img",{src:R(r.token.imageUrl),alt:"Completion NFT",className:"rounded-sm"})})})]})})},r.name))}),e.jsx(fe,{}),e.jsx(Ne,{})]})})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(s,t){return this.cache.has(s)?this.cache.get(s):(this.cache.set(s,t),t)}};function Le(){const s=[{date:"Today9",topic:"Charmverse",org:"MG",recording:"IPFS",poap:"Link"},{date:"Today8",topic:"Charmverse",org:"MG",recording:"IPFS",poap:"Link"},{date:"Today7",topic:"Charmverse",org:"MG",recording:"IPFS",poap:"Link"}],t=M("(min-width: 768px)"),a=e.jsx("div",{children:e.jsx("p",{children:"This feature is coming soon with huddle01 dRTC integration."})});return e.jsxs(m,{className:"w-full mb-8",children:[e.jsx(N,{className:"flex justify-between items-center",children:e.jsxs(p,{className:"text-center text-xl flex items-center gap-2",children:["Workshops Attended",t?e.jsxs(Ce,{openDelay:0,closeDelay:0,children:[e.jsx(be,{asChild:!0,children:e.jsx(v,{size:24,className:"text-blue-400 cursor-pointer"})}),e.jsx(Se,{className:"w-80 lg:text-base",children:a})]}):e.jsxs($,{children:[e.jsx(ce,{asChild:!0,children:e.jsx(v,{size:24,className:"text-blue-400 cursor-pointer"})}),e.jsxs(P,{children:[e.jsx(F,{className:"text-left",children:e.jsx(L,{children:"Workshops Attended"})}),e.jsx("div",{className:"px-4",children:a}),e.jsx(E,{className:"pt-2",children:e.jsx(I,{asChild:!0,children:e.jsx("button",{className:"text-blue-400 hover:underline",children:"Close"})})})]})]})]})}),e.jsx(j,{children:e.jsxs(D,{children:[e.jsx(k,{children:e.jsxs(u,{className:"bg-transparent hover:bg-transparent cursor-default",children:[e.jsx(o,{className:"w-[100px]",children:"Date"}),e.jsx(o,{children:"Topic"}),e.jsx(o,{children:"Org"}),e.jsx(o,{children:"Recording"}),e.jsx(o,{children:"POAP"})]})}),e.jsx(A,{children:s.map(l=>e.jsxs(u,{children:[e.jsx(d,{className:"font-medium",children:l.date}),e.jsx(d,{children:l.topic}),e.jsx(d,{children:l.org}),e.jsx(d,{children:l.recording}),e.jsx(d,{children:l.poap})]},l.date))}),e.jsx(se,{})]})})]})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(s,t){return this.cache.has(s)?this.cache.get(s):(this.cache.set(s,t),t)}};const Ee=s=>{const[t,a]=h.useState(g(s)?void 0:s),[l,r]=h.useState(g(s)?s:`${s==null?void 0:s.substring(0,6)}…`),[x,n]=h.useState();return h.useEffect(()=>{const i=we({chain:G,transport:O()});g(s)?s!=null&&i.getEnsAddress({name:s}).then(c=>{c?a(c):n(`${s} is not a valid ENS name.`)}):i.getEnsName({address:s}).then(c=>{c&&r(c)})}),{ens:l,address:t,error:x}};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(s,t){return this.cache.has(s)?this.cache.get(s):(this.cache.set(s,t),t)}};const Ie=U("/user/$user")({component:()=>{const{user:s}=Ie.useParams(),{address:t,error:a}=Ee(s);return a?e.jsx("h1",{children:a}):e.jsxs(te,{children:[e.jsx(De,{}),e.jsx(ae,{}),e.jsx("main",{className:"flex-1 mt-12 w-screen",children:e.jsxs("div",{className:"space-y-4 mx-auto w-2/3",children:[e.jsx("div",{id:"nfts-earned",className:"scroll-mt-12",children:e.jsx(h.Suspense,{fallback:e.jsx("h2",{className:"loading loading-spinner"}),children:e.jsx(Fe,{account:t})})}),e.jsx("div",{id:"submissions",className:"scroll-mt-12",children:e.jsx(h.Suspense,{fallback:e.jsx("h2",{className:"loading loading-spinner"}),children:e.jsx($e,{account:t})})}),e.jsx("div",{id:"workshops-attended",className:"scroll-mt-12",children:e.jsx(Le,{})})]})})]})}});export{Ie as Route};