import{j as s,e as c,L as e}from"./index-DnkxURPJ.js";import{C as t,r as d}from"./index-BuudiW1e.js";import{T as n}from"./Top-lWvuAEp-.js";import{u as m}from"./useUsername-BzDK2iHo.js";import"./utils-BSviTPvL.js";import"./createPublicClient-DM97V9Ne.js";import"./isAddressEqual-M-Juhya2.js";import"./secp256k1-CN5LKMZq.js";const x=()=>s.jsx("div",{className:"card bg-secondary/25 h-auto w-full mr-4 mx-auto rounded-sm",children:s.jsxs("div",{className:"card-body items-center text-center",children:[s.jsx("h2",{className:"card-title",children:"Submission Statuses"}),s.jsx("p",{children:"Pending"}),s.jsx("p",{children:"Accepted"}),s.jsx("p",{children:"Rejected"})]})}),h=()=>s.jsx("div",{className:"card bg-secondary/25 h-auto w-full mr-4 mx-auto rounded-sm",children:s.jsxs("div",{className:"card-body items-center text-center",children:[s.jsx("h2",{className:"card-title",children:"Workshops Given"}),s.jsx("p",{children:"Date Given"}),s.jsx("p",{children:"Topic Reference"}),s.jsx("p",{children:"Attendees"})]})}),r=()=>s.jsxs("div",{className:"card bg-secondary/25 h-auto max-w-md mr-4 mx-auto rounded-sm",children:[s.jsx("div",{className:"card-body items-center text-center",children:s.jsx("h2",{className:"card-title",children:"Book Title"})}),s.jsx("figure",{className:"px-2 pt-2 pb-4",children:s.jsx("img",{src:"https://bafybeia6d4mg4kd4xok772piolmvvpdd56usbabfmsqkzzg2qcr24orzsq.ipfs.w3s.link/metagame-logo.svg",alt:"Completion NFT",className:"rounded-sm"})})]}),a=()=>s.jsxs("div",{className:"card bg-secondary/25 h-auto max-w-md mr-4 mx-auto rounded-sm",children:[s.jsxs("div",{className:"card-body items-center text-center",children:[s.jsx("h2",{className:"card-title",children:"Cover"}),s.jsx("p",{children:"From book"})]}),s.jsx("figure",{className:"px-2 pt-2 pb-4",children:s.jsx("img",{src:"https://bafybeia6d4mg4kd4xok772piolmvvpdd56usbabfmsqkzzg2qcr24orzsq.ipfs.w3s.link/metagame-logo.svg",alt:"Book Cover",className:"rounded-sm"})})]}),j=c("/dashboard/$user")({component:()=>{const{user:o}=j.useParams(),{ens:i,error:l}=m(o);return l?s.jsx("h1",{children:l}):s.jsxs("div",{children:[s.jsx("h1",{className:"text-2xl font-semibold text-secondary mt-12 mb-8",children:"Dashboard for organizationXYZ"}),s.jsxs("div",{className:"drawer lg:drawer-open sticky",children:[s.jsx("input",{id:"my-drawer-2",type:"checkbox",className:"drawer-toggle"}),s.jsxs("div",{id:"top",className:"drawer-content flex flex-col items-center justify-start scroll-m-24",children:[s.jsxs("div",{id:"bookshelf",className:"w-11/12 bg-secondary/25 scroll-m-24",children:[s.jsx("h1",{className:"text-lg font-semibold mt-4 mb-4",children:"Current Bookshelf"}),s.jsxs(t,{responsive:d,className:"top-0 gap-4 md:gap-6 lg:gap-8 w-full mr-0",children:[s.jsx(a,{}),s.jsx(a,{}),s.jsx(a,{}),s.jsx(a,{}),s.jsx(a,{})]})]}),s.jsx("div",{id:"statuses",className:"mt-4 mb-4 w-11/12 scroll-m-24",children:s.jsx(x,{})}),s.jsxs("div",{id:"completions",className:"w-11/12 bg-secondary/25 scroll-m-24",children:[s.jsx("h1",{className:"text-lg font-semibold mt-4 mb-4",children:"Completion NFTs"}),s.jsxs(t,{responsive:d,className:"top-0 gap-4 md:gap-6 lg:gap-8 w-full mr-0",children:[s.jsx(r,{}),s.jsx(r,{}),s.jsx(r,{}),s.jsx(r,{}),s.jsx(r,{})]})]}),s.jsx("div",{id:"workshops-given",className:"mt-4 mb-4 w-11/12 scroll-m-24",children:s.jsx(h,{})}),s.jsx("label",{htmlFor:"my-drawer-2",className:"btn btn-xs btn-secondary border border-primary drawer-button lg:hidden fixed left-0 mt-44 z-10",children:"⇒"})]}),s.jsxs("div",{className:"drawer-side max-h-fit",children:[s.jsx("label",{htmlFor:"my-drawer-2","aria-label":"close sidebar",className:"drawer-overlay"}),s.jsxs("ul",{className:"menu bg-base-200 text-base-content max-h-fit w-80 p-4 mt-28 z-20",children:[s.jsx("h1",{className:"mt-4 mb-4 text-lg font-secondary",children:i}),s.jsx("li",{children:s.jsx(e,{to:"#bookshelf",children:"Current Bookshelf"})}),s.jsx("li",{children:s.jsx(e,{to:"#statuses",children:"Submissions"})}),s.jsx("li",{children:s.jsx(e,{to:"#completions",children:"Completion NFTs"})}),s.jsx("li",{children:s.jsx(e,{to:"#workshops-given",children:"Workshops Given"})}),s.jsx("li",{children:s.jsx(e,{to:"/upload",children:"Upload Books"})})]})]})]}),s.jsx(n,{})]})}});export{j as Route};
