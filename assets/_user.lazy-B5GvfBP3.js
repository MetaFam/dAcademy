import{j as e,g as o,e as j,L as m}from"./index-CY9gQxDx.js";import{C as f,r as b}from"./index-mpmjxlxs.js";import{g as l,u,r as c,a as y,M as h}from"./content-BvfgDHTP.js";import{t as g}from"./utils-DzXOfCkg.js";import{c as N}from"./clsx-B4VjtFc_.js";import{T as w}from"./Top-DjHD_rJP.js";import{u as q}from"./useUsername-nMYR0z0J.js";import"./isAddressEqual-sSxPSUTb.js";import"./secp256k1-CdQkQ7-b.js";const v=l`
  query ChainDetails($address: String) {
    user(id: $address) {
      completedQuestChains {
        token {
          imageUrl
        }
        name
      }
    }
  }
`,S=({account:s})=>{const{data:{user:{completedQuestChains:t}}}=u({queryKey:[`completed-${s}`],queryFn:async()=>c("https://api.studio.thegraph.com/query/71457/quest-chains-optimism/version/latest",v,{address:s==null?void 0:s.toLowerCase()})});return e.jsx(f,{responsive:b,className:"top-0 gap-4 md:gap-6 lg:gap-8 w-full mr-0",children:t==null?void 0:t.map(a=>e.jsxs("div",{className:"card bg-secondary/25 h-auto max-w-md mr-4 mx-auto rounded-sm",children:[e.jsx("div",{className:"card-body items-center text-center",children:e.jsx("div",{className:"tooltip cursor-default","data-tip":a.name,children:e.jsx("h2",{className:"card-title text-ellipsis overflow-hidden line-clamp-1",children:a.name})})}),e.jsx("figure",{className:"px-2 pt-2 pb-4",children:e.jsx("img",{src:g(a.token.imageUrl),alt:"Completion NFT",className:"rounded-sm"})})]},a.name))})},C=l`
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
`,k=({proof:s})=>{const{data:{reviewSubmissions:t,proofSubmission:a}={},isLoading:d}=y({enabled:!!s,queryKey:[`info-${s}`],queryFn:async()=>c("https://api.studio.thegraph.com/query/71457/quest-chains-optimism/version/latest",C,{proof:s})});return d?e.jsx("span",{className:"loading loading-spinner",children:"Loading"}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"modal-box",children:[e.jsx("h2",{className:"text-left",children:"Response: "}),e.jsx("div",{className:"content",children:e.jsx(h,{children:a==null?void 0:a.description})}),e.jsx("ol",{children:t==null?void 0:t.map(n=>e.jsxs("li",{children:[e.jsxs("h2",{children:["Status: ",n.questStatus.status]}),e.jsx(h,{children:n.description})]},n.txHash))})]}),e.jsx("form",{method:"dialog",className:"modal-backdrop",children:e.jsx("button",{children:"close"})})]})},F=l`
query ChainDetails($address: String) {
  proofSubmissions(where: {user: $address}) {
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
`,D=({account:s})=>{const{data:{proofSubmissions:t}={}}=u({queryKey:[`submissions-${s}`],queryFn:async()=>c("https://api.studio.thegraph.com/query/71457/quest-chains-optimism/version/latest",F,{address:s==null?void 0:s.toLowerCase()})}),a=t==null?void 0:t.sort((r,i)=>{if(r.questStatus.status!==i.questStatus.status){const x=["review","fail","pass"];return x.indexOf(r.questStatus.status)-x.indexOf(i.questStatus.status)}return r.timestamp-i.timestamp}),[d,n]=o.useState(),p=r=>{n(r),document.getElementById("subInfo").showModal()};return e.jsxs(e.Fragment,{children:[e.jsx("dialog",{id:"subInfo",className:"modal",children:e.jsx(k,{proof:d})}),e.jsxs("table",{className:"table",children:[e.jsx("thead",{className:"max-md:hidden",children:e.jsxs("tr",{children:[e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Book"}),e.jsx("th",{children:"Chapter"}),e.jsx("th",{children:"Status"})]})}),e.jsx("tbody",{children:a==null?void 0:a.map((r,i)=>e.jsxs("tr",{className:"max-md:border-current hover:bg-secondary/10",onClick:()=>p(r.id),children:[e.jsx("td",{className:"max-md:list-item max-md:p-0 max-md:before:content-['Date:'] max-md:before:mr-1 max-md:before:font-bold max-md:mt-2",children:new Date(r.timestamp*1e3).toLocaleDateString()}),e.jsx("td",{className:"max-md:list-item max-md:p-0 max-md:before:content-['Book:'] max-md:before:mr-1 before:font-bold italic max-md:before:not-italic",children:r.questChain.name}),e.jsx("td",{className:"max-md:list-item max-md:p-0 max-md:before:content-['Chapter:'] max-md:before:mr-1 max-md:before:font-bold max-md:-indent-2 max-md:pl-2",children:r.quest.name}),e.jsx("td",{className:N((()=>{switch(r.questStatus.status){case"pass":return"text-success";case"fail":return"text-error";case"review":return"text-info";default:return"text-yellow-200"}})(),"max-md:list-item max-md:p-0 max-md:mb-4 max-md:before:content-['Status:'] max-md:before:mr-1 max-md:before:font-bold"),children:r.questStatus.status})]},i))})]})]})},$=()=>e.jsx("div",{className:"card bg-secondary/25 h-auto w-full mr-4 mx-auto rounded-sm",children:e.jsxs("div",{className:"card-body items-center text-center",children:[e.jsx("h2",{className:"card-title",children:"Workshops Attended"}),e.jsx("p",{children:"From Org"}),e.jsx("p",{children:"Date Attended"}),e.jsx("p",{children:"Topic Reference"})]})}),L=j("/user/$user")({component:()=>{const{user:s}=L.useParams(),{address:t,ens:a,error:d}=q(s);return d?e.jsx("h1",{children:d}):e.jsxs("div",{children:[e.jsx("h1",{id:"top",className:"text-2xl font-semibold text-secondary mb-8 scroll-m-28",children:"User Profile"}),e.jsxs("div",{className:"drawer lg:drawer-open",children:[e.jsx("input",{id:"my-drawer-2",type:"checkbox",className:"drawer-toggle"}),e.jsxs("div",{className:"drawer-content flex flex-col items-center justify-start",children:[e.jsxs("div",{id:"nfts-earned",className:"w-11/12 bg-secondary/25 scroll-m-24",children:[e.jsx("h1",{className:"text-lg font-semibold mt-4 mb-4",children:"NFTs Earned"}),e.jsx(o.Suspense,{fallback:e.jsx("h2",{className:"loading loading-spinner"}),children:e.jsx(S,{account:t})})]}),e.jsx("div",{id:"submissions",className:"mt-4 mb-4 w-11/12 scroll-m-24",children:e.jsx("div",{className:"card bg-secondary/25 h-auto w-full mx-auto rounded-sm",children:e.jsxs("div",{className:"card-body items-center text-center px-12",children:[e.jsx("h2",{className:"card-title",children:"Submission Statuses"}),e.jsx(o.Suspense,{fallback:e.jsx("h2",{className:"loading loading-spinner"}),children:e.jsx(D,{account:t})})]})})}),e.jsx("div",{id:"workshops-attended",className:"mt-4 mb-4 w-11/12 scroll-m-24",children:e.jsx($,{})})]}),e.jsxs("div",{className:"drawer-side",children:[e.jsx("label",{htmlFor:"my-drawer-2","aria-label":"close sidebar",className:"drawer-overlay"}),e.jsxs("ul",{className:"menu bg-base-200 text-base-content min-w-0 mt-28 z-20",children:[e.jsx("h1",{className:"mt-4 mb-4 text-lg font-secondary",children:a}),e.jsx("li",{children:e.jsx(m,{to:"#nfts-earned",children:"NFTs Earned"})}),e.jsx("li",{children:e.jsx(m,{to:"#submissions",children:"Submissions"})}),e.jsx("li",{children:e.jsx(m,{to:"#workshops-attended",children:"Workshops Attended"})})]})]}),e.jsx("label",{htmlFor:"my-drawer-2",className:"btn btn-xs btn-secondary border border-primary drawer-button lg:hidden fixed left-0 mt-28 z-10",children:"⇒"})]}),e.jsx(w,{})]})}});export{L as Route};
