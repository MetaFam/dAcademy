const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MarkdownEditor-uzKaPnTs.js","assets/index-HiPsjHpj.js","assets/index-BePtuxal.css","assets/index-hTfwLQYs.js","assets/useQuery-C6SRKt8v.js","assets/useAccount-BVoleJlg.js","assets/index-BXoqLDm7.js","assets/index-Bo12_iYY.js","assets/index-DEHHTLm9.js","assets/tslib.es6-B2dMZmZB.js","assets/index-Bfpr8wOl.js"])))=>i.map(i=>d[i]);
var ie=Object.defineProperty;var K=e=>{throw TypeError(e)};var re=(e,t,n)=>t in e?ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var z=(e,t,n)=>re(e,typeof t!="symbol"?t+"":t,n),F=(e,t,n)=>t.has(e)||K("Cannot "+n);var l=(e,t,n)=>(F(e,t,"read from private field"),n?n.call(e):t.get(e)),q=(e,t,n)=>t.has(e)?K("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),L=(e,t,n,a)=>(F(e,t,"write to private field"),a?a.call(e,n):t.set(e,n),n),R=(e,t,n)=>(F(e,t,"access private method"),n);import{O as oe,Q as le,T as W,U as ue,V as J,W as ce,Y as pe,Z as de,r as d,M as ye,j as s,f as _,b as me,R as Y,_ as I,$ as he,w as fe,x as be,D as xe,E as ge,a as we}from"./index-HiPsjHpj.js";import{u as H,M as Te,c as ve}from"./index-D50smwKJ.js";import{g as Z,r as V}from"./gql-DHmsBT2a.js";import{p as je}from"./playbooks-CE06kfJh.js";import{a as D,u as Ce}from"./useAccount-BVoleJlg.js";import{f as ke,u as X,a as Ne,T as Me,b as qe,c as Le,d as Re,e as _e,w as Ie}from"./index-hTfwLQYs.js";import{n as Se,s as Ee}from"./useQuery-C6SRKt8v.js";/* empty css                        */import"./isAddressEqual-HxbSzEv_.js";import"./secp256k1-lsOzNiGs.js";import"./index-BXoqLDm7.js";import"./index-Bo12_iYY.js";var C,k,m,w,T,$,U,G,Ae=(G=class extends oe{constructor(t,n){super();q(this,T);q(this,C);q(this,k);q(this,m);q(this,w);L(this,C,t),this.setOptions(n),this.bindMethods(),R(this,T,$).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var a;const n=this.options;this.options=l(this,C).defaultMutationOptions(t),le(this.options,n)||l(this,C).getMutationCache().notify({type:"observerOptionsUpdated",mutation:l(this,m),observer:this}),n!=null&&n.mutationKey&&this.options.mutationKey&&W(n.mutationKey)!==W(this.options.mutationKey)?this.reset():((a=l(this,m))==null?void 0:a.state.status)==="pending"&&l(this,m).setOptions(this.options)}onUnsubscribe(){var t;this.hasListeners()||(t=l(this,m))==null||t.removeObserver(this)}onMutationUpdate(t){R(this,T,$).call(this),R(this,T,U).call(this,t)}getCurrentResult(){return l(this,k)}reset(){var t;(t=l(this,m))==null||t.removeObserver(this),L(this,m,void 0),R(this,T,$).call(this),R(this,T,U).call(this)}mutate(t,n){var a;return L(this,w,n),(a=l(this,m))==null||a.removeObserver(this),L(this,m,l(this,C).getMutationCache().build(l(this,C),this.options)),l(this,m).addObserver(this),l(this,m).execute(t)}},C=new WeakMap,k=new WeakMap,m=new WeakMap,w=new WeakMap,T=new WeakSet,$=function(){var n;const t=((n=l(this,m))==null?void 0:n.state)??ue();L(this,k,{...t,isPending:t.status==="pending",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset})},U=function(t){J.batch(()=>{var n,a,o,r,u,c,i,g;if(l(this,w)&&this.hasListeners()){const h=l(this,k).variables,f=l(this,k).context;(t==null?void 0:t.type)==="success"?((a=(n=l(this,w)).onSuccess)==null||a.call(n,t.data,h,f),(r=(o=l(this,w)).onSettled)==null||r.call(o,t.data,null,h,f)):(t==null?void 0:t.type)==="error"&&((c=(u=l(this,w)).onError)==null||c.call(u,t.error,h,f),(g=(i=l(this,w)).onSettled)==null||g.call(i,void 0,t.error,h,f))}this.listeners.forEach(h=>{h(l(this,k))})})},G);function Oe(e,t={}){return{async queryFn({queryKey:n}){const{hash:a,...o}=n[1];if(!a)throw new Error("hash is required");return ce(e,{...o,onReplaced:t.onReplaced,hash:a})},queryKey:Qe(t)}}function Qe(e={}){const{onReplaced:t,...n}=e;return["waitForTransactionReceipt",ke(n)]}function $e(e){return{mutationFn(t){return pe(e,t)},mutationKey:["writeContract"]}}function Pe(e,t){const n=de(),[a]=d.useState(()=>new Ae(n,e));d.useEffect(()=>{a.setOptions(e)},[a,e]);const o=d.useSyncExternalStore(d.useCallback(u=>a.subscribe(J.batchCalls(u)),[a]),()=>a.getCurrentResult(),()=>a.getCurrentResult()),r=d.useCallback((u,c)=>{a.mutate(u,c).catch(Se)},[a]);if(o.error&&Ee(a.options.throwOnError,[o.error]))throw o.error;return{...o,mutate:r,mutateAsync:o.mutate}}function ee(e={}){const{hash:t,query:n={}}=e,a=D(e),o=X({config:a}),r=Oe(a,{...e,chainId:e.chainId??o}),u=!!(t&&(n.enabled??!0));return Ne({...n,...r,enabled:u})}function te(e={}){const{mutation:t}=e,n=D(e),a=$e(n),{mutate:o,mutateAsync:r,...u}=Pe({...t,...a});return{...u,writeContract:o,writeContractAsync:r}}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Be=Z`
  query ChainDetails($name: String!, $reader: String) {
    questChains(
      where: {
        name_starts_with_nocase: $name,
        name_ends_with_nocase: $name
      }
    ) {
      id
      address
      description
      imageUrl
      token {
        tokenId
        imageUrl
        tokenAddress
        owners(where: { id: $reader }) {
          id
        }
      }
      createdBy {
        id
      }
      updatedAt
      quests(orderBy: questId) {
        questId
        name
        description
        optional
        status { status }
      }
    }
  }
`,Fe=Z`
  query ChainDetails($chain: String!, $user: String!) {
    questStatuses(where: {
      questChain: $chain, user: $user
    }, orderBy: quest__questId) {
      status
      quest {
        questId
        paused
      }
      submissions {
        name
        description
        details
        externalUrl
      }
    }
  }
`;class Ue extends Array{constructor(...n){super();z(this,"current",0);this.push(...n)}get active(){return this[this.current]}}const se=d.createContext(null),ne=()=>d.useContext(se),P=()=>{const e=ne();if(!e)throw new Error("No book.");if(e.status==="error")throw e.error;if(e.status==="init")throw new Error(`Loading Book: "${e.title}".`);return e},De=({slug:e,children:t,chapter:n=0})=>{var S;const[a,o]=d.useState(n),{title:r}=je.map(({books:v})=>v).flat().find(({title:v})=>ye(v)===e)??{};if(!r)throw new Error(`Book "${e}" not found.`);const u=Ce(),c=((S=u==null?void 0:u.address)==null?void 0:S.toLowerCase())??null,{data:{questChains:[i]=[]}={},error:g,isLoading:h}=H({queryKey:[`chain-${e}`],queryFn:async()=>V("https://api.studio.thegraph.com/query/71457/quest-chains-optimism/version/latest",Be,{name:r,reader:c})}),{data:f,error:y}=H({queryKey:[`statuses-${i==null?void 0:i.id}-${c}`],queryFn:async()=>!c||!(i!=null&&i.id)?null:V("https://api.studio.thegraph.com/query/71457/quest-chains-optimism/version/latest",Fe,{chain:i.id,user:c})}),{questStatuses:b}=f??{};let N=null;const A=g??y;if(A)N={status:"error",error:A};else if(h)N={status:"init",slug:e,title:r};else{const v=new Ue({optional:!0,title:"Introduction",content:i.description,status:"init"},...i.quests.map((M,p)=>{const x=b==null?void 0:b.find(({quest:{questId:j}})=>Number(j)===p);return{optional:M.optional,title:M.name,content:M.description,status:(x==null?void 0:x.status)??null}}));v.current=a;const E={slug:e,title:r,introduction:i.description,chapters:v,creator:i.createdBy.id,owners:[],updatedAt:new Date(Number(i.updatedAt)*1e3),contract:i.id,nft:{id:Number(i.token.tokenId),address:i.token.tokenAddress,image:i.token.imageUrl,minted:i.token.owners.length>0},on:a,setOn:o};c===null?N={status:"load",...E,reader:c}:N={status:"auth",...E,reader:c}}return s.jsx(se.Provider,{value:N,children:t})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};function Ke(){const e=P();return s.jsx("ol",{id:"chapters",className:"flex flex-col max-w-72 text-balance mt-4 mr-4 sticky top-0 z-50",children:e.chapters.map((t,n)=>{const{status:a}=t;let o=a==null?"You have not yet submitted a proof for this chapter.":`Your submission ${(()=>{switch(a){case"pass":return"has been approved.";case"fail":return"has been rejected.";case"review":return"is under review.";default:return`has a \`state\` of "${a}".`}})()}`,r=(()=>{switch(a){case"pass":return"fill-green-500";case"fail":return"fill-red-500";case"review":return"fill-orange-400";case"init":return"fill-secondary";case null:case void 0:return"fill-blue-400";default:return console.warn(`Unknown \`state\`: "${a}".`),"fill-blue-600"}})();return n===0&&(o="No submission required for this chapter.",r="fill-yellow-500"),s.jsx(Me,{children:s.jsxs(qe,{children:[s.jsx(Le,{children:s.jsx("li",{onClick:()=>{var u;return(u=e.setOn)==null?void 0:u.call(e,n)},className:_("card shadow-md p-3 hover:bg-yellow-300/75 hover:text-black"),children:s.jsxs(me,{to:`../${n}`,className:"flex",children:[s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",className:"w-8 h-8 flex-shrink-0 mr-2 self-center",children:[s.jsx("circle",{cx:"50%",cy:"50%",r:"40%",className:r,stroke:_(t.optional?"#A44F":"#000B"),strokeWidth:8,strokeDasharray:_(t.optional&&"5 15"),strokeLinecap:"round",paintOrder:"stroke fill"}),s.jsx("text",{x:"50%",y:"57%",fontSize:"2.5rem",textAnchor:"middle",dominantBaseline:"middle",className:"fill-black font-bold",children:n+1})]}),s.jsx("h2",{className:"text-lg font-medium text-left",children:t.title})]})},n)}),s.jsxs(Re,{side:"right",className:_("card shadow-md p-3 hover:bg-yellow-300/75 hover:text-black",a==="pass"&&"bg-success",a==="fail"&&"bg-error",a==="review"&&"bg-info",a==="init"&&"bg-secondary text-white",a==null&&"bg-primary"),children:[o,s.jsx(_e,{width:11,height:5,className:_("",a==="pass"&&"fill-success",a==="fail"&&"fill-error",a==="review"&&"fill-info",a==="init"&&"fill-secondary text-white",a==null&&"fill-primary")})]})]})},n)})})}const ae=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"editor",type:"address"},{indexed:!1,internalType:"uint256[]",name:"questIdList",type:"uint256[]"},{components:[{internalType:"bool",name:"paused",type:"bool"},{internalType:"bool",name:"optional",type:"bool"},{internalType:"bool",name:"skipReview",type:"bool"}],indexed:!1,internalType:"struct IQuestChain.QuestDetails[]",name:"questDetails",type:"tuple[]"}],name:"ConfiguredQuests",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint8",name:"version",type:"uint8"}],name:"Initialized",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Paused",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"editor",type:"address"},{indexed:!1,internalType:"string",name:"details",type:"string"}],name:"QuestChainEdited",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"string",name:"details",type:"string"},{indexed:!1,internalType:"string[]",name:"quests",type:"string[]"},{indexed:!1,internalType:"bool",name:"paused",type:"bool"}],name:"QuestChainInit",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"string",name:"tokenURI",type:"string"}],name:"QuestChainTokenURIUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"reviewer",type:"address"},{indexed:!1,internalType:"address[]",name:"questerList",type:"address[]"},{indexed:!1,internalType:"uint256[]",name:"questIdList",type:"uint256[]"},{indexed:!1,internalType:"bool[]",name:"successList",type:"bool[]"},{indexed:!1,internalType:"string[]",name:"detailsList",type:"string[]"}],name:"QuestProofsReviewed",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"quester",type:"address"},{indexed:!1,internalType:"uint256[]",name:"questIdList",type:"uint256[]"},{indexed:!1,internalType:"string[]",name:"proofList",type:"string[]"}],name:"QuestProofsSubmitted",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"creator",type:"address"},{indexed:!1,internalType:"string[]",name:"detailsList",type:"string[]"}],name:"QuestsCreated",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"editor",type:"address"},{indexed:!1,internalType:"uint256[]",name:"questIdList",type:"uint256[]"},{indexed:!1,internalType:"string[]",name:"detailsList",type:"string[]"}],name:"QuestsEdited",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"limiterContract",type:"address"}],name:"SetLimiter",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Unpaused",type:"event"},{inputs:[],name:"ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"DEFAULT_ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"EDITOR_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"REVIEWER_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"burnToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256[]",name:"_questIdList",type:"uint256[]"},{components:[{internalType:"bool",name:"paused",type:"bool"},{internalType:"bool",name:"optional",type:"bool"},{internalType:"bool",name:"skipReview",type:"bool"}],internalType:"struct IQuestChain.QuestDetails[]",name:"_questDetails",type:"tuple[]"}],name:"configureQuests",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string[]",name:"_detailsList",type:"string[]"}],name:"createQuests",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_details",type:"string"}],name:"edit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256[]",name:"_questIdList",type:"uint256[]"},{internalType:"string[]",name:"_detailsList",type:"string[]"}],name:"editQuests",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleAdmin",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTokenURI",outputs:[{internalType:"string",name:"uri",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"_role",type:"bytes32"},{internalType:"address",name:"_account",type:"address"}],name:"grantRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"hasRole",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{components:[{internalType:"address[]",name:"owners",type:"address[]"},{internalType:"address[]",name:"admins",type:"address[]"},{internalType:"address[]",name:"editors",type:"address[]"},{internalType:"address[]",name:"reviewers",type:"address[]"},{internalType:"string[]",name:"quests",type:"string[]"},{internalType:"bool",name:"paused",type:"bool"},{internalType:"string",name:"details",type:"string"},{internalType:"string",name:"tokenURI",type:"string"}],internalType:"struct QuestChainCommons.QuestChainInfo",name:"_info",type:"tuple"}],name:"init",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"limiterContract",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"mintToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"pause",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"paused",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"premium",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"questChainFactory",outputs:[{internalType:"contract IQuestChainFactory",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"questChainId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"questChainToken",outputs:[{internalType:"contract IQuestChainToken",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"questCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"questDetails",outputs:[{internalType:"bool",name:"paused",type:"bool"},{internalType:"bool",name:"optional",type:"bool"},{internalType:"bool",name:"skipReview",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_quester",type:"address"},{internalType:"uint256",name:"_questId",type:"uint256"}],name:"questStatus",outputs:[{internalType:"enum IQuestChain.Status",name:"status",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"renounceRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address[]",name:"_questerList",type:"address[]"},{internalType:"uint256[]",name:"_questIdList",type:"uint256[]"},{internalType:"bool[]",name:"_successList",type:"bool[]"},{internalType:"string[]",name:"_detailsList",type:"string[]"}],name:"reviewProofs",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"_role",type:"bytes32"},{internalType:"address",name:"_account",type:"address"}],name:"revokeRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_limiterContract",type:"address"}],name:"setLimiter",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_tokenURI",type:"string"}],name:"setTokenURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256[]",name:"_questIdList",type:"uint256[]"},{internalType:"string[]",name:"_proofList",type:"string[]"}],name:"submitProofs",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"unpause",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"upgrade",outputs:[],stateMutability:"nonpayable",type:"function"}];globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Q=10,ze=({children:e})=>s.jsxs("div",{role:"alert",className:"alert alert-warning flex items-center mt-10",children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 shrink-0 stroke-current",fill:"none",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})}),e]}),We=()=>{const e=P(),t=X(),n=Y.useRef(null),[a,o]=d.useState(!1),[r,u]=d.useState({}),c=({type:p,error:x})=>{u(j=>({...j,[p]:x}))},{data:i,writeContract:g,isPending:h}=te(),f=D(),y={chain:{type:"chain",error:s.jsxs("h3",{className:"flex text-center items-center justify-center",children:["Please",s.jsx("a",{onClick:()=>{var p;((p=window.ethereum)==null?void 0:p.request).call(p,{method:"wallet_switchEthereumChain",params:[{chainId:`0x${Q.toString(16)}`}]})},className:"underline text-accent hover:text-accent-content mx-1",children:"switch to the Optimism network"}),"to continue."]})},account:{type:"account",error:s.jsxs("h3",{className:"flex text-center items-center justify-center",children:["Please",s.jsx("div",{className:"mx-2",children:s.jsx("w3m-button",{size:"sm"})}),"to submit a proof."]})}};d.useEffect(()=>{if(f)return Ie(f,{onChange(p){p!==Q&&!r.chain&&c(y.chain)}})},[f]);const{contract:b=null}=e&&"contract"in e?e:{};d.useEffect(()=>{i&&I.success(s.jsxs("p",{children:["Successfully submitted transaction",s.jsxs("a",{href:`https://optimistic.etherscan.io/tx/${i}`,className:"mx-1 whitespace-nowrap text-primary hover:text-secondary",target:"_blank",children:[i.substring(0,8),"…",i.slice(-6)]}),"to the Quest Chain contract at",s.jsxs("a",{href:`https://optimistic.etherscan.io/address/${b}`,className:"ml-1 whitespace-nowrap text-primary hover:text-secondary",target:"_blank",children:[b==null?void 0:b.substring(0,6),"…",b==null?void 0:b.slice(-4)]}),"."]}),{duration:12e3,style:{width:"45ch"}})},[i]);const{isLoading:N,isSuccess:A}=ee({hash:i});e.reader==null&&!r.account?c(y.account):e.reader!=null&&r.account&&c({type:"account",error:null}),t!==Q&&!r.chain?c(y.chain):t===Q&&r.chain&&c({type:"chain",error:null});const S=Object.values(r).filter(Boolean);if(S.length>0)return S.map((p,x)=>s.jsx(ze,{children:p},x));const v=Y.lazy(()=>he(()=>import("./MarkdownEditor-uzKaPnTs.js").then(p=>p.w),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))),E="Submit Proof",M=N?"Confirming…":h?"Transaction Pending…":a?"Saving to IPFS…":A?"¡Done: Submitted!":E;return s.jsxs(d.Suspense,{fallback:s.jsx("h3",{children:"Loading Submission Editor…"}),children:[s.jsx(v,{editorRef:n,markdown:"",className:"dark-theme dark-editor content mt-10"}),s.jsxs("button",{onClick:async()=>{var x;const p=(x=n.current)==null?void 0:x.getMarkdown();if(!p)throw new Error(`Invalid \`markdown\`: "${p}".`);o(!0);try{const j=new Blob([JSON.stringify({name,description:p})],{type:"application/json"}),O=await fe([new File([j],"submission.json")]);if(I.success(s.jsxs("p",{children:["Successfully uploaded your response submission to",s.jsx("a",{href:"https://web3.storage",target:"_blank",className:"mx-1 whitespace-nowrap text-primary hover:text-secondary",children:"Web3.Storage"}),"at",s.jsxs("a",{href:`https://w3s.link/ipfs/${O}`,target:"_blank",className:"ml-1 whitespace-nowrap text-primary hover:text-secondary",children:["ipfs://",O.substring(0,6),"…",O.slice(-4)]}),"."]}),{duration:15e3,position:"bottom-center",style:{width:"45ch"}}),e.on==null)throw new Error("No current chapter.");g({address:b,abi:ae,functionName:"submitProofs",args:[[e.on-1],[`ipfs://${O}/submission.json`]]},{onError:B=>{console.error({error:B}),I.error(B.shortMessage??B.message,{duration:12e3})}})}catch(j){console.error({error:j}),I.error(j.message)}finally{o(!1)}},disabled:M!==E,className:"btn btn-wide text-primary my-6",children:[s.jsx("span",{className:_(M.endsWith("…")&&"loading loading-dots loading-md")}),M]})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};function Ye(){const e=P();return s.jsxs("section",{id:"content",className:"flex-grow",children:[s.jsx("div",{className:"card bg-transparent max-w-prose mt-4 mx-auto",children:s.jsx("div",{className:"content",children:s.jsx(Te,{children:e.chapters.active.content})})}),e.on===0?s.jsx("button",{onClick:()=>e.setOn(e.on+1),className:"shadow-md rounded-md bg-secondary p-4 hover:bg-blue-300/60 text-white text-center",children:"Continue"}):["pass"].includes(e.chapters.active.status)?s.jsxs("div",{role:"alert",className:"alert alert-success flex items-center mt-10",children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 shrink-0 stroke-current",fill:"none",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})}),s.jsx("h2",{className:"grow",children:"You have already successfully completed this submission."}),e.on<e.chapters.length-1&&s.jsxs("button",{onClick:()=>e.setOn(e.on+1),className:"btn btn-primary text-fg font-bold self-end",children:["Next ",s.jsx("span",{className:"size-2xl",children:"→"})]})]}):s.jsx(We,{})]})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const He=()=>{var f;const e=P(),{data:t,writeContract:n}=te(),{isLoading:a,isSuccess:o}=ee({hash:t}),[r,u]=d.useState(!1);if(!e)throw new Error("No book found.");const c=()=>{if(!e)throw new Error("No book found.");n({address:e.contract,abi:ae,functionName:"mintToken",args:[]},{onError:y=>{console.error({error:y}),I.error(y.shortMessage??y.message,{duration:12e3})},onSuccess:y=>I.success(s.jsxs("p",{children:["Minted in transaction",s.jsxs("a",{href:`https://optimistic.etherscan.io/tx/${y}`,className:"mx-1 whitespace-nowrap text-primary hover:text-secondary",target:"_blank",children:[y.substring(0,8),"…",y.slice(-6)]}),"."]}),{duration:12e3})})};let i=((f=e.chapters)==null?void 0:f.every(y=>y.status==="pass"||y.optional))&&!e.nft.minted;const g="Mint NFT",h=a?s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"loading loading-spinner loading-md"}),"Confirming…"]}):o?"¡Done: Minted!":g;return s.jsx("div",{id:"reward",className:"flex flex-col ml-4 mt-8 md:mt-1",children:s.jsxs("div",{className:"card rounded-sm bg-secondary/25 h-auto max-w-md mr-4 mx-auto",children:[s.jsx("h1",{className:"text-3xl font-bold text-center my-4 mx-2",children:"Completion NFT"}),s.jsx("img",{onLoad:()=>u(!0),src:be(e.nft.image),alt:"Soulbound NFT",className:"w-full h-full object-contain pb-4 px-4"}),!r&&s.jsx("div",{className:"grid place-items-center",children:s.jsx("span",{className:"loading-spinner loading loading-md"})}),i&&s.jsx("button",{disabled:e.nft.minted||h!==g,onClick:c,className:"btn btn-primary",children:h}),e.nft.minted&&s.jsx("h2",{className:"bg-blue-400 rounded-md p-4",children:"You've already collected this NFT."})]})})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Ve=()=>{var a;const e=ne(),[t,n]=d.useState("Unknown");if(d.useEffect(()=>{e&&"creator"in e&&(n(`${e.creator.substring(0,5)}⋯${e.creator.slice(-3)}`),ve({chain:xe,transport:ge()}).getEnsName({address:e.creator}).then(r=>{r&&n(r)}))}),e&&e.error)throw e.error;return s.jsxs("header",{children:[s.jsxs("h2",{className:"text-sm text-blue-500 mt-5 text-left pl-1",children:["Creator: ",t]}),s.jsx("h1",{className:"text-4xl md:text-6xl font-bold text-left mt-2",children:e==null?void 0:e.title}),s.jsxs("p",{className:"text-sm text-white text-left pl-1 mt-6 mb-4",children:["Last Updated:"," ",((a=e==null?void 0:e.updatedAt)==null?void 0:a.toLocaleString(void 0,{day:"numeric",month:"long",year:"numeric"}))??"Unknown"]})]})};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const Ge=we("/book/$slug/$chapter/")({component:Je});function Je(){try{const{slug:e,chapter:t}=Ge.useParams();return s.jsx(De,{chapter:Number(t),slug:e,children:s.jsxs("article",{id:"top",className:"container mx-auto py-20 px-8 lg:px-24 overflow-auto relative",children:[s.jsx(Ve,{}),s.jsx("main",{className:"md:flex justify-start overflow-hidden relative",children:s.jsxs(d.Suspense,{fallback:s.jsx("h1",{className:"mt-44",children:"Loading…"}),children:[s.jsx(Ke,{}),s.jsx(Ye,{}),s.jsx(He,{})]})})]})})}catch(e){return s.jsxs("h1",{children:["Error: ",e.message]})}}export{Je as Book,Ge as Route};
