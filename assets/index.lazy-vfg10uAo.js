import{j as e,t as h,c as d,r as a}from"./index-C_TOYGMG.js";import{u as o}from"./index-Dna2GeS_.js";import{u as i,M as n}from"./index-BV6C0mBy.js";import{g as l,r as u}from"./gql-DHmsBT2a.js";import"./useConfig-CdFQQPvH.js";import"./index-ItR96vxd.js";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(s,r){return this.cache.has(s)?this.cache.get(s):(this.cache.set(s,r),r)}};const g=l`
  query BookDetails($query: String!) {
    bookSearch(text: $query) {
      name
      description
      image
      slug
    }
  }
`;function m({query:s}){const r=o(),{data:{bookSearch:t}}=i({queryKey:[`search-book-${s}`],queryFn:async()=>u(r,g,{query:s})});return e.jsx("ul",{children:t.length===0?"No results found.":t.map(c=>e.jsx("li",{children:e.jsxs("details",{children:[e.jsx("summary",{children:e.jsxs("a",{href:`/#/book/${c.slug}`,children:[c.name,e.jsx("img",{className:"max-h-48",src:h(c.image)})]})}),e.jsx(n,{children:c.description})]})}))})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(s,r){return this.cache.has(s)?this.cache.get(s):(this.cache.set(s,r),r)}};const j=l`
  query shelfDetails($query: String!) {
    shelfSearch(text: $query) {
      name
      description
      cover
      slug
    }
  }
`;function x({query:s}){const r=o(),{data:{shelfSearch:t}}=i({queryKey:[`search-shelf-${s}`],queryFn:async()=>u(r,j,{query:s})});return e.jsx("ul",{children:t.length===0?"No results found.":t.map(c=>e.jsx("li",{children:e.jsxs("details",{children:[e.jsx("summary",{children:e.jsxs("a",{href:`/#/shelf/${c.slug}`,children:[c.name,e.jsx("img",{className:"max-h-48",src:h(c.cover)})]})}),e.jsx(n,{children:c.description})]})}))})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(s,r){return this.cache.has(s)?this.cache.get(s):(this.cache.set(s,r),r)}};const p=l`
  query collectionDetails($query: String!) {
    collectionSearch(text: $query) {
      name
      description
      cover
      slug
    }
  }
`;function f({query:s}){const r=o(),{data:{collectionSearch:t}}=i({queryKey:[`search-collection-${s}`],queryFn:async()=>u(r,p,{query:s})});return e.jsx("ul",{children:t.length===0?"No results found.":t.map(c=>e.jsx("li",{children:e.jsxs("details",{children:[e.jsx("summary",{children:e.jsxs("a",{href:`/#/collection/${c.slug}`,children:[c.name,e.jsx("img",{className:"max-h-48",src:h(c.cover)})]})}),e.jsx(n,{children:c.description})]})}))})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(s,r){return this.cache.has(s)?this.cache.get(s):(this.cache.set(s,r),r)}};const R=d("/search/")({component:y});function y(){const r=new URLSearchParams(window.location.search).get("q");if(!r)throw new Error("No query string");return e.jsxs(e.Fragment,{children:[e.jsxs("h1",{children:[" Searching for: ",e.jsx("q",{children:r})]}),e.jsx("h2",{children:" Book Results: "}),e.jsx(a.Suspense,{fallback:"Loading",children:e.jsx(m,{query:r})}),e.jsx("h2",{children:" Shelf Results: "}),e.jsx(a.Suspense,{fallback:"Loading",children:e.jsx(x,{query:r})}),e.jsx("h2",{children:" Collection Results: "}),e.jsx(a.Suspense,{fallback:"Loading",children:e.jsx(f,{query:r})})]})}export{R as Route};
