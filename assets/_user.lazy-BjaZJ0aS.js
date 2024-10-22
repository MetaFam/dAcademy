import{j as s,e as h,f as l,L as n}from"./index-CwD6eqqo.js";import{C as u,r as x}from"./index-CWFz0e_P.js";import{g as c,u as m,r as o}from"./gql-DPMXYJCR.js";import{t as p}from"./utils-Dw_SdZ_1.js";import{T as j}from"./Top-CgaRfvt5.js";import{u as y}from"./useUsername-CUn4suSC.js";import"./isAddressEqual-T8-TCZWc.js";import"./secp256k1-BmXIhhFO.js";const N=c`
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
`,g=({account:e})=>{const{data:{user:{completedQuestChains:r}}}=m({queryKey:[`completed-${e}`],queryFn:async()=>o("https://api.studio.thegraph.com/query/71457/quest-chains-optimism/version/latest",N,{address:e==null?void 0:e.toLowerCase()})});return s.jsx(u,{responsive:x,className:"top-0 gap-4 md:gap-6 lg:gap-8 w-full mr-0",children:r==null?void 0:r.map(a=>s.jsxs("div",{className:"card bg-secondary/25 h-auto max-w-md mr-4 mx-auto rounded-sm",children:[s.jsx("div",{className:"card-body items-center text-center",children:s.jsx("div",{className:"tooltip cursor-default","data-tip":a.name,children:s.jsx("h2",{className:"card-title text-ellipsis overflow-hidden line-clamp-1",children:a.name})})}),s.jsx("figure",{className:"px-2 pt-2 pb-4",children:s.jsx("img",{src:p(a.token.imageUrl),alt:"Completion NFT",className:"rounded-sm"})})]},a.name))})},f=c`
query ChainDetails($address: String) {
  proofSubmissions(where: {user: $address}) {
    description
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
`,b=({account:e})=>{const{data:{proofSubmissions:r}={}}=m({queryKey:[`submissions-${e}`],queryFn:async()=>o("https://api.studio.thegraph.com/query/71457/quest-chains-optimism/version/latest",f,{address:e==null?void 0:e.toLowerCase()})}),a=r==null?void 0:r.sort((t,d)=>{if(t.questStatus.status!==d.questStatus.status){const i=["review","fail","pass"];return i.indexOf(t.questStatus.status)-i.indexOf(d.questStatus.status)}return t.timestamp-d.timestamp});return s.jsxs("table",{className:"table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Date"}),s.jsx("th",{children:"Book"}),s.jsx("th",{children:"Chapter"}),s.jsx("th",{children:"Status"})]})}),s.jsx("tbody",{children:a==null?void 0:a.map(t=>s.jsxs("tr",{children:[s.jsx("td",{children:new Date(t.timestamp*1e3).toLocaleDateString()}),s.jsx("td",{children:t.questChain.name}),s.jsx("td",{children:t.quest.name}),s.jsx("td",{children:t.questStatus.status})]}))})]})},w=()=>s.jsx("div",{className:"card bg-secondary/25 h-auto w-full mr-4 mx-auto rounded-sm",children:s.jsxs("div",{className:"card-body items-center text-center",children:[s.jsx("h2",{className:"card-title",children:"Workshops Attended"}),s.jsx("p",{children:"From Org"}),s.jsx("p",{children:"Date Attended"}),s.jsx("p",{children:"Topic Reference"})]})}),q=h("/user/$user")({component:()=>{const{user:e}=q.useParams(),{address:r,ens:a,error:t}=y(e);return t?s.jsx("h1",{children:t}):s.jsxs("div",{children:[s.jsx("h1",{id:"top",className:"text-2xl font-semibold text-secondary mt-12 mb-8 scroll-m-28",children:"User Profile"}),s.jsxs("div",{className:"drawer lg:drawer-open",children:[s.jsx("input",{id:"my-drawer-2",type:"checkbox",className:"drawer-toggle"}),s.jsxs("div",{className:"drawer-content flex flex-col items-center justify-start",children:[s.jsxs("div",{id:"nfts-earned",className:"w-11/12 bg-secondary/25 scroll-m-24",children:[s.jsx("h1",{className:"text-lg font-semibold mt-4 mb-4",children:"NFTs Earned"}),s.jsx(l.Suspense,{fallback:s.jsx("h2",{className:"loading loading-spinner"}),children:s.jsx(g,{account:r})})]}),s.jsx("div",{id:"submissions",className:"mt-4 mb-4 w-11/12 scroll-m-24",children:s.jsx("div",{className:"card bg-secondary/25 h-auto w-full mx-auto rounded-sm",children:s.jsxs("div",{className:"card-body items-center text-center px-12",children:[s.jsx("h2",{className:"card-title",children:"Submission Statuses"}),s.jsx(l.Suspense,{fallback:s.jsx("h2",{className:"loading loading-spinner"}),children:s.jsx(b,{account:r})})]})})}),s.jsx("div",{id:"workshops-attended",className:"mt-4 mb-4 w-11/12 scroll-m-24",children:s.jsx(w,{})}),s.jsx("label",{htmlFor:"my-drawer-2",className:"btn btn-primary drawer-button lg:hidden",children:"Open drawer"})]}),s.jsxs("div",{className:"drawer-side",children:[s.jsx("label",{htmlFor:"my-drawer-2","aria-label":"close sidebar",className:"drawer-overlay"}),s.jsxs("ul",{className:"menu bg-base-200 text-base-content min-w-0",children:[s.jsx("h1",{className:"mt-4 mb-4 text-lg font-secondary",children:a}),s.jsx("li",{children:s.jsx(n,{to:"#nfts-earned",children:"NFTs Earned"})}),s.jsx("li",{children:s.jsx(n,{to:"#submissions",children:"Submissions"})}),s.jsx("li",{children:s.jsx(n,{to:"#workshops-attended",children:"Workshops Attended"})})]})]})]}),s.jsx(j,{})]})}});export{q as Route};
