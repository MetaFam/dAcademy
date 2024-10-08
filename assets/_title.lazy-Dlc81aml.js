import{w as e,e as o,y as c}from"./index-DCFtSijN.js";function x({onChange:s,active:t}){const l=["Chapter","Chapter","Chapter"];return e.jsx("ol",{id:"chapters",className:"flex flex-col max-w-md mt-4 mr-10",children:l.map((r,a)=>e.jsx("li",{className:"card bg-base-100 shadow-md p-3",onClick:()=>s(a),children:e.jsxs("h2",{className:"text-lg font-bold text-left",children:[t===a+1?e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 inline-block",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})}):`${a+1} `,r]})},a))})}function m({active:s,content:t}){return e.jsx("div",{id:"content",className:"flex-grow",children:e.jsxs("div",{className:"card bg-transparent max-w-md mt-4 mx-auto",children:[e.jsxs("h2",{className:"text-lg font-bold text-left",children:["Quest ",s," Content:"]}),e.jsx("p",{className:"text-sm text-secondary",children:t})]})})}function i(s){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2em",height:"2em",viewBox:"0 0 32 32",...s,children:e.jsx("path",{fill:"currentColor",d:"M23 20a5 5 0 0 0-3.89 1.89l-7.31-4.57a4.46 4.46 0 0 0 0-2.64l7.31-4.57A5 5 0 1 0 18 7a4.8 4.8 0 0 0.2 1.32l-7.31 4.57a5 5 0 1 0 0 6.22l7.31 4.57A4.8 4.8 0 0 0 18 25a5 5 0 1 0 5-5m0-16a3 3 0 1 1-3 3a3 3 0 0 1 3-3M7 19a3 3 0 1 1 3-3a3 3 0 0 1-3 3m16 9a3 3 0 1 1 3-3a3 3 0 0 1-3 3"})})}function d(){return e.jsxs("div",{id:"reward",className:"flex flex-col flex-shrink-0 mx-auto",children:[e.jsx("div",{className:"text-blue-900 hover:text-white flex flex-grow justify-center mb-10 mt-8",children:e.jsx(i,{})}),e.jsx("p",{className:"text-left ml-1 mb-2",children:"x% completed"}),e.jsx("progress",{className:"progress progress-primary w-full mx-auto",value:15,max:"100"}),e.jsxs("div",{className:"clearfix mt-2",children:[e.jsx("p",{className:"text-left ml-1 float-left",children:"0 approved"}),e.jsx("p",{className:"text-right float-right",children:"x/y submitted"})]}),e.jsxs("div",{className:"card rounded-none bg-secondary/25 h-auto max-w-md mt-8 mr-4 mx-auto",children:[e.jsx("h1",{className:"text-3xl font-bold text-left mt-4 mb-2 ml-4",children:"Reward"}),e.jsx("h2",{className:"text-xl font-semibold text-left mt-2 mb-1 ml-4",children:"Achievement NFT"}),e.jsx("img",{src:"/assets/nfts.webp",alt:"Soulbound NFT",className:"w-full h-full object-none pb-8 px-4"})]})]})}function h(){console.log("Book component is being rendered");const[s,t]=o.useState(""),[l,r]=o.useState(1),a=n=>{switch(r(n+1),n){case 0:t("Content for Quest 1");break;case 1:t("Content for Quest 2");break;case 2:t("Content for Quest 3");break;default:t("")}};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"container mx-auto p-20",children:[e.jsx("p",{className:"text-sm text-secondary mt-5 text-left pl-1",children:"Author Wallet: 0x1234567890abcdef"}),e.jsx("h1",{className:"text-4xl md:text-6xl font-bold text-left mt-2",children:"Play­book Title"}),e.jsx("p",{className:"text-sm text-white text-left pl-1 mt-6 mb-4",children:"Last updated: insert date"}),e.jsxs("main",{className:"md:flex justify-start",children:[e.jsx(x,{onChange:a,active:l}),e.jsx(m,{content:s,active:l}),e.jsx(d,{})]})]})})}const p=c("/book/$title")({component:f});function f(){return e.jsx(h,{})}export{p as Route};
