import{bs as t,r as o,bt as s}from"./index-qFgN0BDJ.js";const n="2.13.0",i=()=>`wagmi@${n}`;class a extends t{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiError"})}get docsBaseUrl(){return"https://wagmi.sh/react"}get version(){return i()}}class u extends a{constructor(){super("`useConfig` must be used within `WagmiProvider`.",{docsPath:"/api/WagmiProvider"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiProviderNotFoundError"})}}function g(r={}){const e=r.config??o.useContext(s);if(!e)throw new u;return e}export{g as u};
