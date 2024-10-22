import{j as e,e as r,l as m,t as o,L as c,n as d}from"./index-Dk-UNE0C.js";import{C as x}from"./index-D6TI4Nno.js";const p=({title:t,description:s})=>e.jsxs("header",{className:"justify-start mb-4",children:[e.jsx("h1",{className:"text-2xl font-medium text-primary justify-left text-left text-shadow-md",children:t}),e.jsx("h2",{className:"text-xl font-medium text-accent justify-left text-left text-shadow-md",children:s})]}),g=r("/org/$id/")({component:u}),h={superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5},desktop:{breakpoint:{max:3e3,min:1024},items:4},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}},j=({id:t,title:s,description:n,items:a})=>e.jsxs("div",{id:t,className:"container py-4 mt-30 gap-4 scroll-mt-20",children:[e.jsx(p,{title:s,description:n}),e.jsx(x,{responsive:h,className:"gap-4 md:gap-6 lg:gap-8 w-full",children:a.map((i,l)=>e.jsx("div",{id:`${t}-${o(i.title)}`,children:e.jsx(d,{...i})},l))})]});function u(){return e.jsxs(e.Fragment,{children:[e.jsx("div",{id:"top",className:"scroll-mt-32",children:e.jsx("h2",{className:"text-accent font-light text-3xl mb-2 pt-6",children:"A de-store of knowledge. Onboard forward."})}),e.jsx("div",{className:"container p-4 mt-30 gap-4",children:m.map((t,s)=>e.jsx(j,{id:o(t.title),title:t.title,description:t.description,items:t.books},s))}),e.jsx("div",{className:"fixed bottom-0 right-0 p-4",children:e.jsx(c,{to:"#top",className:"btn btn-ghost text-xl",children:e.jsxs("div",{className:"flex flex-col justify-center items-center",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 10l7-7 7 7"})}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 10l7-7 7 7"})})]})})})]})}export{u as App,g as Route,u as default};
