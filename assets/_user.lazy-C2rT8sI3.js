import{j as e,e as p,f as n,L as c,m as j,g}from"./index-Dk-UNE0C.js";import{C as N}from"./index-D6TI4Nno.js";import{g as h,u,t as f,r as x}from"./utils-CaYZp6PS.js";import{r as y}from"./carousel.config-B-IV_rf8.js";import{c as b}from"./createPublicClient-Cfohbp00.js";import"./isAddressEqual-Dn7cKeu3.js";import"./secp256k1-DDh0VLbn.js";const w=h`
  query ChainDetails($address: String!) {
    user(id: $address) {
      completedQuestChains {
        token {
          imageUrl
        }
        name
      }
    }
  }
`,q=({account:s})=>{const{data:{user:{completedQuestChains:r}}}=u({queryKey:[`completed-${s}`],queryFn:async()=>x("https://api.studio.thegraph.com/query/71457/quest-chains-optimism/version/latest",w,{address:s==null?void 0:s.toLowerCase()})});return e.jsx(N,{responsive:y,className:"top-0 gap-4 md:gap-6 lg:gap-8 w-full mr-0",children:r==null?void 0:r.map(t=>e.jsxs("div",{className:"card bg-secondary/25 h-auto max-w-md mr-4 mx-auto rounded-sm",children:[e.jsx("div",{className:"card-body items-center text-center",children:e.jsx("div",{className:"tooltip cursor-default","data-tip":t.name,children:e.jsx("h2",{className:"card-title text-clip text-ellipsis overflow-hidden line-clamp-1",children:t.name})})}),e.jsx("figure",{className:"px-2 pt-2 pb-4",children:e.jsx("img",{src:f(t.token.imageUrl),alt:"Completion NFT",className:"rounded-sm"})})]},t.name))})},v=h`
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
`,S=({account:s})=>{const{data:{proofSubmissions:r}={}}=u({queryKey:[`submissions-${s}`],queryFn:async()=>x("https://api.studio.thegraph.com/query/71457/quest-chains-optimism/version/latest",v,{address:s==null?void 0:s.toLowerCase()})}),t=r==null?void 0:r.sort((a,i)=>{if(a.questStatus.status!==i.questStatus.status){const d=["review","fail","pass"];return d.indexOf(a.questStatus.status)-d.indexOf(i.questStatus.status)}return a.timestamp-i.timestamp});return e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Book"}),e.jsx("th",{children:"Chapter"}),e.jsx("th",{children:"Status"})]})}),e.jsx("tbody",{children:t==null?void 0:t.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:new Date(a.timestamp*1e3).toLocaleString()}),e.jsx("td",{children:a.questChain.name}),e.jsx("td",{children:a.quest.name}),e.jsx("td",{children:a.questStatus.status})]}))})]})},C=()=>e.jsx("div",{className:"card bg-secondary/25 h-auto w-full mr-4 mx-auto rounded-sm",children:e.jsxs("div",{className:"card-body items-center text-center",children:[e.jsx("h2",{className:"card-title",children:"Workshops Attended"}),e.jsx("p",{children:"From Org"}),e.jsx("p",{children:"Date Attended"}),e.jsx("p",{children:"Topic Reference"})]})}),E=p("/user/$user")({component:()=>{const{user:s}=E.useParams(),[r,t]=n.useState(),[a,i]=n.useState(s.includes(".")?s:`0x${s.substring(0,6)} ... `),[d,m]=n.useState();return n.useEffect(()=>{const o=b({chain:j,transport:g()});s.includes(".")?o.getEnsAddress({name:s}).then(l=>{l?t(l):m(`${s} is not a valid ENS name.`)}):(t(s),o.getEnsName({address:s}).then(l=>{l?i(l):m(`${s} is not a valid Ethereum address.`)}))}),d?e.jsx("h1",{children:d}):e.jsx("div",{children:e.jsxs("div",{className:"drawer drawer-open",children:[e.jsx("input",{id:"my-drawer-2",type:"checkbox",className:"drawer-toggle"}),e.jsxs("div",{className:"drawer-content flex flex-col items-center justify-start",children:[e.jsxs("div",{id:"nfts-earned",className:"w-11/12 bg-secondary/25 scroll-m-24",children:[e.jsx("h1",{className:"text-lg font-semibold mt-4 mb-4",children:"NFTs Earned"}),e.jsx(n.Suspense,{fallback:e.jsx("h2",{className:"loading loading-spinner"}),children:e.jsx(q,{account:r})})]}),e.jsx("div",{id:"submissions",className:"mt-4 mb-4 w-11/12 scroll-m-24",children:e.jsx("div",{className:"card bg-secondary/25 h-auto w-full mr-4 mx-auto rounded-sm",children:e.jsxs("div",{className:"card-body items-center text-center",children:[e.jsx("h2",{className:"card-title",children:"Submission Statuses"}),e.jsx(n.Suspense,{fallback:e.jsx("h2",{className:"loading loading-spinner"}),children:e.jsx(S,{account:r})})]})})}),e.jsx("div",{id:"workshops-attended",className:"mt-4 mb-4 w-11/12 scroll-m-24",children:e.jsx(C,{})}),e.jsx("label",{htmlFor:"my-drawer-2",className:"btn btn-primary drawer-button lg:hidden",children:"Open drawer"})]}),e.jsxs("div",{className:"drawer-side",children:[e.jsx("label",{htmlFor:"my-drawer-2","aria-label":"close sidebar",className:"drawer-overlay"}),e.jsxs("ul",{className:"menu bg-base-200 text-base-content min-w-0",children:[e.jsx("h1",{className:"mt-4 mb-4 text-lg font-secondary",children:a}),e.jsx("li",{children:e.jsx(c,{to:"#nfts-earned",children:"NFTs Earned"})}),e.jsx("li",{children:e.jsx(c,{to:"#submissions",children:"Submissions"})}),e.jsx("li",{children:e.jsx(c,{to:"#workshops-attended",children:"Workshops Attended"})})]})]})]})})}});export{E as Route};
