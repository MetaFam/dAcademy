import{c as N,w as y,j as e,b as v,H as z,g as Q,x as T,r as h,f as R,d as G,v as O,m as f,h as U,a as W}from"./index-qFgN0BDJ.js";import{u as B,S as K,a as X,b as _,c as V,d as J,e as Y,f as Z,g as ee,h as se,T as k,i as A,j as m,k as o,l as H,m as d,p as te,n as ae,o as re}from"./table-msoy1onS.js";import{A as ie,a as ne,b as le}from"./avatar-O8tfDEHX.js";import{C as p,a as b,b as j,d as g}from"./card-D3aIBTSd.js";import{M as D,u as M}from"./index-DKoJXUE6.js";import{g as C,r as S}from"./gql-DHmsBT2a.js";import{b as w,c as ce}from"./index-BdGbLepL.js";import{D as oe,a as de,b as he,c as xe,d as ue}from"./dialog-C4GXxKBz.js";import{u as me,D as P,b as $,c as F,d as L,e as pe,f as E,g as I,a as je}from"./useIsMobile-BXyglk83.js";import{C as ge,a as fe,b as Ne,c as be,d as Ce}from"./carousel-c2aIFqIz.js";import{u as Se}from"./useMediaQuery-BsigdLUW.js";import{H as we,a as ye,I as q,b as ve}from"./hover-card-e2nLxCj6.js";import{c as Te,m as De}from"./index-DLtqUfxH.js";import"./button-DopvGzQj.js";import"./input-BXejhhX_.js";import"./index-Da2sJjOt.js";import"./index-B8RrAdm8.js";import"./index-DaLVO-yr.js";import"./tslib.es6-B2dMZmZB.js";import"./isGridVisibleAtom-Dt_R12UJ.js";import"./useAccount-eqPDiuCN.js";import"./useConfig-BxwOpbe6.js";import"./index-C1SvVhsi.js";import"./isAddressEqual-DOxjMwtg.js";import"./secp256k1-DmO-as0P.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=N("LaptopMinimalCheck",[["path",{d:"M2 20h20",key:"owomy5"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}],["rect",{x:"3",y:"4",width:"18",height:"12",rx:"2",key:"8ur36m"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=N("Presentation",[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=N("SendHorizontal",[["path",{d:"M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z",key:"117uat"}],["path",{d:"M6 12h16",key:"s4cdu5"}]]);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(s,t){return this.cache.has(s)?this.cache.get(s):(this.cache.set(s,t),t)}};const He=[{title:"NFTs Earned",url:"#nfts-earned",icon:qe},{title:"Submissions",url:"#submissions",icon:Ae},{title:"Workshops Attended",url:"#workshops-attended",icon:ke}];function Me(){const{address:s,ensName:t,ensAvatar:n}=B(),r=t||y(s||"");return e.jsx(K,{children:e.jsxs(X,{children:[e.jsxs(_,{children:[e.jsx(V,{children:"User Profile"}),e.jsx(J,{children:e.jsx(Y,{className:"mt-8",children:He.map(c=>e.jsx(Z,{children:e.jsx(ee,{asChild:!0,children:e.jsxs(v,{to:c.url,className:"flex items-center gap-2",children:[e.jsx(c.icon,{className:"h-4 w-4"}),e.jsx("span",{children:c.title})]})})},c.title))})})]}),e.jsxs("div",{className:"mt-auto flex items-center justify-between gap-2 p-4",children:[r?e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsxs(ie,{children:[e.jsx(ne,{src:n||"/inner-d.svg",alt:r}),e.jsx(le,{children:t?t.slice(0,2).toUpperCase():y(s||"").slice(0,2).toUpperCase()})]}),e.jsx("div",{children:e.jsx("p",{className:"text-sm font-medium",children:r})})]}):e.jsx("div",{className:"mx-auto",children:e.jsx("w3m-button",{size:"sm"})}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(se,{}),e.jsx(v,{to:"/",className:"flex items-center",children:e.jsx(z,{className:"h-4 w-4"})})]})]})]})})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(s,t){return this.cache.has(s)?this.cache.get(s):(this.cache.set(s,t),t)}};const Pe=C`
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
`;function $e({submission:s,onClose:t}){const n=!me(),r=w(),{data:{reviewSubmissions:c,proofSubmission:l}={},isLoading:x}=ce({enabled:!!s.id,queryKey:[`info-${s.id}`],queryFn:async()=>S(r,Pe,{proof:s.id})});if(x)return e.jsx("span",{className:"loading loading-spinner",children:"Loading"});const i=e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("span",{className:"text-blue-400",children:"Date:"})," ",new Date(s.timestamp*1e3).toLocaleDateString()]}),e.jsxs("p",{children:[e.jsx("span",{className:"text-blue-400",children:"Book:"})," ",s.questChain.name]}),e.jsxs("p",{children:[e.jsx("span",{className:"text-blue-400",children:"Chapter:"})," ",s.quest.name]}),e.jsx("h2",{className:"text-blue-400 text-left",children:"Proof Response:"}),e.jsx("div",{className:"content",children:e.jsx(D,{children:l==null?void 0:l.description})}),e.jsx("ol",{children:c==null?void 0:c.map(a=>e.jsxs("li",{children:[e.jsxs("h2",{className:"mb-2",children:[e.jsx("span",{className:"text-blue-400",children:"Status: "}),e.jsx("span",{className:Q({"text-green-400":a.questStatus.status==="pass","text-red-600":a.questStatus.status==="fail","text-blue-500":a.questStatus.status==="review","text-yellow-200":a.questStatus.status!=="pass"&&a.questStatus.status!=="fail"&&a.questStatus.status!=="review"}),children:a.questStatus.status})]}),e.jsx(D,{children:a.description}),e.jsxs("p",{children:[e.jsx("span",{className:"text-blue-400",children:"Proof TX Hash:  "}),l!=null&&l.txHash?e.jsx("a",{href:`https://optimistic.etherscan.io/tx/${l.txHash}`,target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 underline cursor-pointer",children:T(l.txHash)}):"N/A"]}),e.jsxs("p",{children:[e.jsx("span",{className:"text-blue-400",children:"Review TX Hash:  "}),a.txHash?e.jsx("a",{href:`https://optimistic.etherscan.io/tx/${a.txHash}`,target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 underline cursor-pointer",children:T(a.txHash)}):"N/A"]})]},a.txHash))})]});return e.jsx(e.Fragment,{children:n?e.jsx(oe,{open:!0,onOpenChange:t,children:e.jsxs(de,{className:"sm:max-w-[425px]",children:[e.jsxs(he,{children:[e.jsx(xe,{children:"Submission Details"}),e.jsx(ue,{children:"Details of your submissions"})]}),i]})}):e.jsx(P,{open:!0,onOpenChange:t,children:e.jsxs($,{className:"px-4",children:[e.jsxs(F,{className:"text-left",children:[e.jsx(L,{children:"Submission Details"}),e.jsx(pe,{children:"Details of your submissions"})]}),i,e.jsx(E,{className:"pt-4",children:e.jsx(I,{asChild:!0,children:e.jsx("button",{className:"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10",onClick:t,children:"Close"})})})]})})})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(s,t){return this.cache.has(s)?this.cache.get(s):(this.cache.set(s,t),t)}};const Fe=C`
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
`,Le=(s,t=3)=>{const n=s.split(" ");return n.length>t?n.slice(0,t).join(" ")+"...":s},Ee=({account:s})=>{const t=w(),{data:{proofSubmissions:n}={}}=M({queryKey:[`submissions-${s}`],queryFn:async()=>S(t,Fe,{address:s==null?void 0:s.toLowerCase()})}),r=n==null?void 0:n.sort((i,a)=>{if(i.questStatus.status!==a.questStatus.status){const u=["review","fail","pass"];return u.indexOf(i.questStatus.status)-u.indexOf(a.questStatus.status)}return i.timestamp-a.timestamp}),[c,l]=h.useState(null),x=i=>{const a=r==null?void 0:r.find(u=>u.id===i);l(a||null)};return e.jsxs(p,{className:"w-full",children:[e.jsx(b,{children:e.jsx(j,{className:"text-center text-xl",children:"Submission Statuses"})}),e.jsx(g,{children:e.jsxs(k,{children:[e.jsx(A,{children:e.jsxs(m,{className:"bg-transparent hover:bg-transparent cursor-default",children:[e.jsx(o,{className:"w-[100px]",children:"Date"}),e.jsx(o,{children:"Book"}),e.jsx(o,{children:"Chapter"}),e.jsx(o,{children:"Status"})]})}),e.jsx(H,{children:r==null?void 0:r.map((i,a)=>e.jsxs(m,{onClick:()=>x(i.id),className:"cursor-pointer hover:bg-secondary/30",children:[e.jsx(d,{className:"font-medium",children:new Date(i.timestamp*1e3).toLocaleDateString()}),e.jsx(d,{className:"text-ellipsis overflow-hidden whitespace-nowrap max-w-[150px]",children:Le(i.questChain.name)}),e.jsx(d,{className:"text-ellipsis overflow-hidden whitespace-nowrap max-w-[150px]",children:i.quest.name}),e.jsx(d,{className:R({"text-green-400":i.questStatus.status==="pass","text-red-600":i.questStatus.status==="fail","text-blue-500":i.questStatus.status==="review","text-yellow-200":i.questStatus.status!=="pass"&&i.questStatus.status!=="fail"&&i.questStatus.status!=="review"}),children:i.questStatus.status})]},a))})]})}),c&&e.jsx($e,{submission:c,onClose:()=>l(null)})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(s,t){return this.cache.has(s)?this.cache.get(s):(this.cache.set(s,t),t)}};const Ie=C`
  query ChainDetails($address: String) {
    user(id: $address) {
      completedQuestChains {
        token {
          imageUrl
        }
        name
        slug
    }
  }
`,ze=({account:s})=>{var c;const t=G(),n=w(),{data:{user:r}}=M({queryKey:[`completed-${s}`],queryFn:async()=>S(n,Ie,{address:s==null?void 0:s.toLowerCase()})});return e.jsxs(p,{className:"w-full",children:[e.jsx(b,{children:e.jsx(j,{className:"text-center text-xl",children:"NFTs Earned"})}),e.jsx(g,{children:!!r&&e.jsxs(ge,{opts:{align:"start"},className:"w-5/6 mx-auto",children:[e.jsx(fe,{children:(c=r.completedQuestChains)==null?void 0:c.map(l=>e.jsx(Ne,{className:"md:basis-1/2 lg:basis-1/3 cursor-pointer",onClick:()=>t({to:`/book/${l.slug}/0`}),children:e.jsx("div",{className:"p-1",children:e.jsxs(p,{children:[e.jsx(j,{className:"text-center text-base mt-2 mx-2",children:l.name}),e.jsx(g,{className:"flex aspect-auto items-center justify-center p-2",children:e.jsx("figure",{className:"",children:e.jsx("img",{src:O(l.token.imageUrl),alt:"Completion NFT",className:"rounded-sm"})})})]})})},l.name))}),e.jsx(be,{}),e.jsx(Ce,{})]})})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(s,t){return this.cache.has(s)?this.cache.get(s):(this.cache.set(s,t),t)}};function Qe(){const s=[{date:"Today9",topic:"Charmverse",org:"MG",recording:"IPFS",poap:"Link"},{date:"Today8",topic:"Charmverse",org:"MG",recording:"IPFS",poap:"Link"},{date:"Today7",topic:"Charmverse",org:"MG",recording:"IPFS",poap:"Link"}],t=Se("(min-width: 768px)"),n=e.jsx("div",{children:e.jsx("p",{children:"This feature is coming soon with huddle01 dRTC integration."})});return e.jsxs(p,{className:"w-full mb-8",children:[e.jsx(b,{className:"flex justify-between items-center",children:e.jsxs(j,{className:"text-center text-xl flex items-center gap-2",children:["Workshops Attended",t?e.jsxs(we,{openDelay:0,closeDelay:0,children:[e.jsx(ye,{asChild:!0,children:e.jsx(q,{size:24,className:"text-blue-400 cursor-pointer"})}),e.jsx(ve,{className:"w-80 lg:text-base",children:n})]}):e.jsxs(P,{children:[e.jsx(je,{asChild:!0,children:e.jsx(q,{size:24,className:"text-blue-400 cursor-pointer"})}),e.jsxs($,{children:[e.jsx(F,{className:"text-left",children:e.jsx(L,{children:"Workshops Attended"})}),e.jsx("div",{className:"px-4",children:n}),e.jsx(E,{className:"pt-2",children:e.jsx(I,{asChild:!0,children:e.jsx("button",{className:"text-blue-400 hover:underline",children:"Close"})})})]})]})]})}),e.jsx(g,{children:e.jsxs(k,{children:[e.jsx(A,{children:e.jsxs(m,{className:"bg-transparent hover:bg-transparent cursor-default",children:[e.jsx(o,{className:"w-[100px]",children:"Date"}),e.jsx(o,{children:"Topic"}),e.jsx(o,{children:"Org"}),e.jsx(o,{children:"Recording"}),e.jsx(o,{children:"POAP"})]})}),e.jsx(H,{children:s.map(r=>e.jsxs(m,{children:[e.jsx(d,{className:"font-medium",children:r.date}),e.jsx(d,{children:r.topic}),e.jsx(d,{children:r.org}),e.jsx(d,{children:r.recording}),e.jsx(d,{children:r.poap})]},r.date))}),e.jsx(te,{})]})})]})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(s,t){return this.cache.has(s)?this.cache.get(s):(this.cache.set(s,t),t)}};const Re=s=>{const[t,n]=h.useState(f(s)?void 0:s),[r,c]=h.useState(f(s)?s:`${s==null?void 0:s.substring(0,6)}…`),[l,x]=h.useState();return h.useEffect(()=>{const i=Te({chain:De,transport:U()});f(s)?s!=null&&i.getEnsAddress({name:s}).then(a=>{a?n(a):x(`${s} is not a valid ENS name.`)}):i.getEnsName({address:s}).then(a=>{a&&c(a)})}),{ens:r,address:t,error:l}};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(s,t){return this.cache.has(s)?this.cache.get(s):(this.cache.set(s,t),t)}};const Ge=W("/user/$user")({component:()=>{const{user:s}=Ge.useParams(),{address:t,error:n}=Re(s);return n?e.jsx("h1",{children:n}):e.jsxs(ae,{children:[e.jsx(Me,{}),e.jsx(re,{}),e.jsx("main",{className:"flex-1 mt-12 w-screen",children:e.jsxs("div",{className:"space-y-4 mx-auto w-2/3",children:[e.jsx("div",{id:"nfts-earned",className:"scroll-mt-12",children:e.jsx(h.Suspense,{fallback:e.jsx("h2",{className:"loading loading-spinner"}),children:e.jsx(ze,{account:t})})}),e.jsx("div",{id:"submissions",className:"scroll-mt-12",children:e.jsx(h.Suspense,{fallback:e.jsx("h2",{className:"loading loading-spinner"}),children:e.jsx(Ee,{account:t})})}),e.jsx("div",{id:"workshops-attended",className:"scroll-mt-12",children:e.jsx(Qe,{})})]})})]})}});export{Ge as Route};
