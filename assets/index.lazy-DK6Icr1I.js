import{j as e,t as m,c as x}from"./index-C_TOYGMG.js";import{M as p,u as j}from"./index-BV6C0mBy.js";import{u as g}from"./index-Dna2GeS_.js";import{g as f,r as b}from"./gql-DHmsBT2a.js";import"./index-ItR96vxd.js";import"./useConfig-CdFQQPvH.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(s,c){return this.cache.has(s)?this.cache.get(s):(this.cache.set(s,c),c)}};function h({name:s,cover:c,description:i,className:t=""}){return e.jsxs("figure",{className:`relative w-fit ${t}`,children:[e.jsx("img",{src:m(c),className:"max-h-60 relative"}),e.jsxs("figcaption",{className:"absolute inset-0 flex flex-col justify-center items-center z-20 text-xl font-bold",children:[e.jsx("h2",{className:"text-center bg-white/30 text-white px-2 py-1 rounded-md",children:s}),e.jsx("section",{className:"description",children:e.jsx(p,{children:i})})]})]})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(s,c){return this.cache.has(s)?this.cache.get(s):(this.cache.set(s,c),c)}};const y=f`
  query CollectionQuery {
    collections(orderBy: updatedAt) {
      id
      details {
        slug
        cover
        name
        description
      }
      contents {
        id
        details {
          slug
          cover
          name
          description
        }
        contents {
          id
          details {
            slug
            image
            name
            description
          }
        }
      }
    }
  }
`,T=x("/")({component:k});function k(){const s=g();console.log({subgraph:s});const{data:{collections:c}}=j({queryKey:["collections"],queryFn:async()=>b(s,y)});function i(t){var o;let l=t.target;if(!l.checked){l.checked=!1;const a=(o=l.closest("label"))==null?void 0:o.nextElementSibling;a&&Array.from(a.querySelectorAll('input[type="checkbox"]')).forEach(r=>{r.checked=!1})}}return e.jsx("main",{children:e.jsx("ol",{id:"collections",children:c.map(({details:t,contents:l},o)=>t&&e.jsxs("li",{className:"flex gap-4",children:[e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",onChange:i}),e.jsx(h,{...t})]}),e.jsx("ol",{className:"shelves",children:l.map(({details:a,contents:r},d)=>e.jsxs("li",{children:[e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",onChange:i}),e.jsx(h,{className:"label-checked",...a})]}),e.jsx("ol",{className:"books",children:r.map(({details:n},u)=>e.jsx("li",{children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox"}),e.jsx(h,{className:"label-checked",name:n.name,cover:n.image,description:n.description})]})},u))})]},d))})]},o))})})}export{T as Route};
