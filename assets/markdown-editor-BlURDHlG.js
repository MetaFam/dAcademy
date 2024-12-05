var S=e=>{throw TypeError(e)};var g=(e,t,s)=>t.has(e)||S("Cannot "+s);var r=(e,t,s)=>(g(e,t,"read from private field"),s?s.call(e):t.get(e)),b=(e,t,s)=>t.has(e)?S("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),p=(e,t,s,i)=>(g(e,t,"write to private field"),i?i.call(e,s):t.set(e,s),s),f=(e,t,s)=>(g(e,t,"access private method"),s);import{U,V as A,W as x,Y as k,Z as R,$ as q,a0 as L,r as y}from"./index-Ok4mnEmM.js";import{n as W,s as j}from"./useQuery-DcmfAyTL.js";import{a as D}from"./useAccount-DjdkbNyF.js";var c,l,o,u,a,O,M,K,F=(K=class extends U{constructor(t,s){super();b(this,a);b(this,c);b(this,l);b(this,o);b(this,u);p(this,c,t),this.setOptions(s),this.bindMethods(),f(this,a,O).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var i;const s=this.options;this.options=r(this,c).defaultMutationOptions(t),A(this.options,s)||r(this,c).getMutationCache().notify({type:"observerOptionsUpdated",mutation:r(this,o),observer:this}),s!=null&&s.mutationKey&&this.options.mutationKey&&x(s.mutationKey)!==x(this.options.mutationKey)?this.reset():((i=r(this,o))==null?void 0:i.state.status)==="pending"&&r(this,o).setOptions(this.options)}onUnsubscribe(){var t;this.hasListeners()||(t=r(this,o))==null||t.removeObserver(this)}onMutationUpdate(t){f(this,a,O).call(this),f(this,a,M).call(this,t)}getCurrentResult(){return r(this,l)}reset(){var t;(t=r(this,o))==null||t.removeObserver(this),p(this,o,void 0),f(this,a,O).call(this),f(this,a,M).call(this)}mutate(t,s){var i;return p(this,u,s),(i=r(this,o))==null||i.removeObserver(this),p(this,o,r(this,c).getMutationCache().build(r(this,c),this.options)),r(this,o).addObserver(this),r(this,o).execute(t)}},c=new WeakMap,l=new WeakMap,o=new WeakMap,u=new WeakMap,a=new WeakSet,O=function(){var s;const t=((s=r(this,o))==null?void 0:s.state)??k();p(this,l,{...t,isPending:t.status==="pending",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset})},M=function(t){R.batch(()=>{var s,i,n,m,h,C,w,E;if(r(this,u)&&this.hasListeners()){const d=r(this,l).variables,v=r(this,l).context;(t==null?void 0:t.type)==="success"?((i=(s=r(this,u)).onSuccess)==null||i.call(s,t.data,d,v),(m=(n=r(this,u)).onSettled)==null||m.call(n,t.data,null,d,v)):(t==null?void 0:t.type)==="error"&&((C=(h=r(this,u)).onError)==null||C.call(h,t.error,d,v),(E=(w=r(this,u)).onSettled)==null||E.call(w,void 0,t.error,d,v))}this.listeners.forEach(d=>{d(r(this,l))})})},K);function I(e){return{mutationFn(t){return q(e,t)},mutationKey:["writeContract"]}}function P(e,t){const s=L(),[i]=y.useState(()=>new F(s,e));y.useEffect(()=>{i.setOptions(e)},[i,e]);const n=y.useSyncExternalStore(y.useCallback(h=>i.subscribe(R.batchCalls(h)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),m=y.useCallback((h,C)=>{i.mutate(h,C).catch(W)},[i]);if(n.error&&j(i.options.throwOnError,[n.error]))throw n.error;return{...n,mutate:m,mutateAsync:n.mutate}}function Z(e={}){const{mutation:t}=e,s=D(e),i=I(s),{mutate:n,mutateAsync:m,...h}=P({...t,...i});return{...h,writeContract:n,writeContractAsync:m}}export{Z as u};