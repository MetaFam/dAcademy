import{e as o,j as e,L as a}from"./index-COGy74Um.js";const l=[{name:"MetaGame",logo:"https://bafybeia6d4mg4kd4xok772piolmvvpdd56usbabfmsqkzzg2qcr24orzsq.ipfs.w3s.link/metagame-logo.svg",slogan:"MetaGame is the OG Shelf",slug:"metagame"},{name:"Org 2",logo:"🕮",slogan:"Org 2 is a new shelf",slug:"org2"},{name:"Org 3",logo:"🕮",slogan:"Org 3 is another shelf",slug:"org3"},{name:"Org 4",logo:"🕮",slogan:"Org 4 is a new shelf",slug:"org4"},{name:"Org 5",logo:"🕮",slogan:"Org 3 is another shelf",slug:"org5"},{name:"Org 6",logo:"🕮",slogan:"Org 6 is a new shelf",slug:"org6"}],r=o("/")({component:()=>e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-bold text-secondary mt-8",children:"Welcome to dAcademy!"}),e.jsx("h2",{className:"text-lg font-semibold mb-8",children:"Learn, Verify, Achieve: Protocol for a Decentralized Education"}),e.jsxs("div",{className:"dropdown dropdown-hover",children:[e.jsx("div",{tabIndex:0,role:"button",className:"btn m-1 rounded-sm",children:"Current Organizations & Bookshelves"}),e.jsx("ul",{tabIndex:0,className:"dropdown-content menu bg-base-100 rounded-sm z-[1] w-52 p-2 shadow",children:l.map(s=>e.jsx("li",{children:e.jsx(a,{to:`/org/${s.slug}`,children:s.name})},s.slug))})]}),e.jsx("div",{className:"flex flex-col mx-8 md:flex-row md:flex-wrap md:justify-center items-center",children:l.map(s=>e.jsx("div",{className:"w-full md:w-1/3 mb-8 md:mb-12",children:e.jsx("div",{className:"card bg-base-100 w-80 shadow-xl hover:shadow-secondary rounded-sm",children:e.jsxs(a,{to:`/org/${s.slug}`,children:[e.jsx("figure",{className:"px-10 pt-10",children:e.jsx("img",{src:s.logo,alt:"Org Logo",className:"w-48"})}),e.jsxs("div",{className:"card-body items-center text-center",children:[e.jsx("h2",{className:"card-title",children:s.name}),e.jsx("p",{children:s.slogan}),e.jsx("div",{className:"card-actions"})]})]})})},s.slug))})]})});export{r as Route};