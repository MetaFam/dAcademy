import{R as r,r as K,j as X,g as it}from"./index-HiPsjHpj.js";import{O as be,C as Se,b as Te,a as Re,T as De,D as Ee,R as xe,P as Ce}from"./index-DEHHTLm9.js";function Oe(t){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",n.appendChild(e),e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}const Yt=r.createContext({drawerRef:{current:null},overlayRef:{current:null},onPress:()=>{},onRelease:()=>{},onDrag:()=>{},onNestedDrag:()=>{},onNestedOpenChange:()=>{},onNestedRelease:()=>{},openProp:void 0,dismissible:!1,isOpen:!1,isDragging:!1,keyboardIsOpen:{current:!1},snapPointsOffset:null,snapPoints:null,handleOnly:!1,modal:!1,shouldFade:!1,activeSnapPoint:null,onOpenChange:()=>{},setActiveSnapPoint:()=>{},closeDrawer:()=>{},direction:"bottom",shouldAnimate:{current:!0},shouldScaleBackground:!1,setBackgroundColorOnScale:!0,noBodyStyles:!1,container:null,autoFocus:!1}),st=()=>{const t=r.useContext(Yt);if(!t)throw new Error("useDrawerContext must be used within a Drawer.Root");return t};Oe(`[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(
[data-state=closed]
){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}`);function $e(){const t=navigator.userAgent;return typeof window<"u"&&(/Firefox/.test(t)&&/Mobile/.test(t)||/FxiOS/.test(t))}function Ae(){return Nt(/^Mac/)}function Ne(){return Nt(/^iPhone/)}function Ut(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}function Me(){return Nt(/^iPad/)||Ae()&&navigator.maxTouchPoints>1}function qt(){return Ne()||Me()}function Nt(t){return typeof window<"u"&&window.navigator!=null?t.test(window.navigator.platform):void 0}const Pe=24,Ie=typeof window<"u"?K.useLayoutEffect:K.useEffect;function Wt(...t){return(...n)=>{for(let e of t)typeof e=="function"&&e(...n)}}const Et=typeof document<"u"&&window.visualViewport;function zt(t){let n=window.getComputedStyle(t);return/(auto|scroll)/.test(n.overflow+n.overflowX+n.overflowY)}function Xt(t){for(zt(t)&&(t=t.parentElement);t&&!zt(t);)t=t.parentElement;return t||document.scrollingElement||document.documentElement}const He=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);let vt=0,xt;function _e(t={}){let{isDisabled:n}=t;Ie(()=>{if(!n)return vt++,vt===1&&qt()&&(xt=Le()),()=>{vt--,vt===0&&(xt==null||xt())}},[n])}function Le(){let t,n=0,e=p=>{t=Xt(p.target),!(t===document.documentElement&&t===document.body)&&(n=p.changedTouches[0].pageY)},a=p=>{if(!t||t===document.documentElement||t===document.body){p.preventDefault();return}let h=p.changedTouches[0].pageY,B=t.scrollTop,L=t.scrollHeight-t.clientHeight;L!==0&&((B<=0&&h>n||B>=L&&h<n)&&p.preventDefault(),n=h)},i=p=>{let h=p.target;$t(h)&&h!==document.activeElement&&(p.preventDefault(),h.style.transform="translateY(-2000px)",h.focus(),requestAnimationFrame(()=>{h.style.transform=""}))},o=p=>{let h=p.target;$t(h)&&(h.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{h.style.transform="",Et&&(Et.height<window.innerHeight?requestAnimationFrame(()=>{Vt(h)}):Et.addEventListener("resize",()=>Vt(h),{once:!0}))}))},f=()=>{window.scrollTo(0,0)},m=window.pageXOffset,T=window.pageYOffset,D=Wt(ke(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`));window.scrollTo(0,0);let g=Wt(mt(document,"touchstart",e,{passive:!1,capture:!0}),mt(document,"touchmove",a,{passive:!1,capture:!0}),mt(document,"touchend",i,{passive:!1,capture:!0}),mt(document,"focus",o,!0),mt(window,"scroll",f));return()=>{D(),g(),window.scrollTo(m,T)}}function ke(t,n,e){let a=t.style[n];return t.style[n]=e,()=>{t.style[n]=a}}function mt(t,n,e,a){return t.addEventListener(n,e,a),()=>{t.removeEventListener(n,e,a)}}function Vt(t){let n=document.scrollingElement||document.documentElement;for(;t&&t!==n;){let e=Xt(t);if(e!==document.documentElement&&e!==document.body&&e!==t){let a=e.getBoundingClientRect().top,i=t.getBoundingClientRect().top,o=t.getBoundingClientRect().bottom;const f=e.getBoundingClientRect().bottom+Pe;o>f&&(e.scrollTop+=i-a)}t=e.parentElement}}function $t(t){return t instanceof HTMLInputElement&&!He.has(t.type)||t instanceof HTMLTextAreaElement||t instanceof HTMLElement&&t.isContentEditable}function Be(t,n){typeof t=="function"?t(n):t!=null&&(t.current=n)}function je(...t){return n=>t.forEach(e=>Be(e,n))}function Kt(...t){return K.useCallback(je(...t),t)}const Gt=new WeakMap;function $(t,n,e=!1){if(!t||!(t instanceof HTMLElement))return;let a={};Object.entries(n).forEach(([i,o])=>{if(i.startsWith("--")){t.style.setProperty(i,o);return}a[i]=t.style[i],t.style[i]=o}),!e&&Gt.set(t,a)}function Fe(t,n){if(!t||!(t instanceof HTMLElement))return;let e=Gt.get(t);e&&(t.style[n]=e[n])}const O=t=>{switch(t){case"top":case"bottom":return!0;case"left":case"right":return!1;default:return t}};function yt(t,n){if(!t)return null;const e=window.getComputedStyle(t),a=e.transform||e.webkitTransform||e.mozTransform;let i=a.match(/^matrix3d\((.+)\)$/);return i?parseFloat(i[1].split(", ")[O(n)?13:12]):(i=a.match(/^matrix\((.+)\)$/),i?parseFloat(i[1].split(", ")[O(n)?5:4]):null)}function Ue(t){return 8*(Math.log(t+1)-2)}function Ct(t,n){if(!t)return()=>{};const e=t.style.cssText;return Object.assign(t.style,n),()=>{t.style.cssText=e}}function We(...t){return(...n)=>{for(const e of t)typeof e=="function"&&e(...n)}}const x={DURATION:.5,EASE:[.32,.72,0,1]},Jt=.4,ze=.25,Ve=100,Qt=8,nt=16,At=26,Ot="vaul-dragging";function Zt(t){const n=r.useRef(t);return r.useEffect(()=>{n.current=t}),r.useMemo(()=>(...e)=>n.current==null?void 0:n.current.call(n,...e),[])}function Ye({defaultProp:t,onChange:n}){const e=r.useState(t),[a]=e,i=r.useRef(a),o=Zt(n);return r.useEffect(()=>{i.current!==a&&(o(a),i.current=a)},[a,i,o]),e}function te({prop:t,defaultProp:n,onChange:e=()=>{}}){const[a,i]=Ye({defaultProp:n,onChange:e}),o=t!==void 0,f=o?t:a,m=Zt(e),T=r.useCallback(D=>{if(o){const p=typeof D=="function"?D(t):D;p!==t&&m(p)}else i(D)},[o,t,i,m]);return[f,T]}function qe({activeSnapPointProp:t,setActiveSnapPointProp:n,snapPoints:e,drawerRef:a,overlayRef:i,fadeFromIndex:o,onSnapPointChange:f,direction:m="bottom",container:T,snapToSequentialPoint:D}){const[g,p]=te({prop:t,defaultProp:e==null?void 0:e[0],onChange:n}),[h,B]=r.useState(typeof window<"u"?{innerWidth:window.innerWidth,innerHeight:window.innerHeight}:void 0);r.useEffect(()=>{function u(){B({innerWidth:window.innerWidth,innerHeight:window.innerHeight})}return window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)},[]);const L=r.useMemo(()=>g===(e==null?void 0:e[e.length-1])||null,[e,g]),E=r.useMemo(()=>{var u;return(u=e==null?void 0:e.findIndex(b=>b===g))!=null?u:null},[e,g]),j=e&&e.length>0&&(o||o===0)&&!Number.isNaN(o)&&e[o]===g||!e,w=r.useMemo(()=>{const u=T?{width:T.getBoundingClientRect().width,height:T.getBoundingClientRect().height}:typeof window<"u"?{width:window.innerWidth,height:window.innerHeight}:{width:0,height:0};var b;return(b=e==null?void 0:e.map(y=>{const I=typeof y=="string";let M=0;if(I&&(M=parseInt(y,10)),O(m)){const l=I?M:h?y*u.height:0;return h?m==="bottom"?u.height-l:-u.height+l:l}const U=I?M:h?y*u.width:0;return h?m==="right"?u.width-U:-u.width+U:U}))!=null?b:[]},[e,h,T]),N=r.useMemo(()=>E!==null?w==null?void 0:w[E]:null,[w,E]),A=r.useCallback(u=>{var b;const y=(b=w==null?void 0:w.findIndex(I=>I===u))!=null?b:null;f(y),$(a.current,{transition:`transform ${x.DURATION}s cubic-bezier(${x.EASE.join(",")})`,transform:O(m)?`translate3d(0, ${u}px, 0)`:`translate3d(${u}px, 0, 0)`}),w&&y!==w.length-1&&o!==void 0&&y!==o&&y<o?$(i.current,{transition:`opacity ${x.DURATION}s cubic-bezier(${x.EASE.join(",")})`,opacity:"0"}):$(i.current,{transition:`opacity ${x.DURATION}s cubic-bezier(${x.EASE.join(",")})`,opacity:"1"}),p(e==null?void 0:e[Math.max(y,0)])},[a.current,e,w,o,i,p]);r.useEffect(()=>{if(g||t){var u;const b=(u=e==null?void 0:e.findIndex(y=>y===t||y===g))!=null?u:-1;w&&b!==-1&&typeof w[b]=="number"&&A(w[b])}},[g,t,e,w,A]);function c({draggedDistance:u,closeDrawer:b,velocity:y,dismissible:I}){if(o===void 0)return;const M=m==="bottom"||m==="right"?(N??0)-u:(N??0)+u,U=E===o-1,l=E===0,F=u>0;if(U&&$(i.current,{transition:`opacity ${x.DURATION}s cubic-bezier(${x.EASE.join(",")})`}),!D&&y>2&&!F){I?b():A(w[0]);return}if(!D&&y>2&&F&&w&&e){A(w[e.length-1]);return}const H=w==null?void 0:w.reduce((P,G)=>typeof P!="number"||typeof G!="number"?P:Math.abs(G-M)<Math.abs(P-M)?G:P),W=O(m)?window.innerHeight:window.innerWidth;if(y>Jt&&Math.abs(u)<W*.4){const P=F?1:-1;if(P>0&&L&&e){A(w[e.length-1]);return}if(l&&P<0&&I&&b(),E===null)return;A(w[E+P]);return}A(H)}function Y({draggedDistance:u}){if(N===null)return;const b=m==="bottom"||m==="right"?N-u:N+u;(m==="bottom"||m==="right")&&b<w[w.length-1]||(m==="top"||m==="left")&&b>w[w.length-1]||$(a.current,{transform:O(m)?`translate3d(0, ${b}px, 0)`:`translate3d(${b}px, 0, 0)`})}function tt(u,b){if(!e||typeof E!="number"||!w||o===void 0)return null;const y=E===o-1;if(E>=o&&b)return 0;if(y&&!b)return 1;if(!j&&!y)return null;const M=y?E+1:E-1,U=y?w[M]-w[M-1]:w[M+1]-w[M],l=u/Math.abs(U);return y?1-l:l}return{isLastSnapPoint:L,activeSnapPoint:g,shouldFade:j,getPercentageDragged:tt,setActiveSnapPoint:p,activeSnapPointIndex:E,onRelease:c,onDrag:Y,snapPointsOffset:w}}const Xe=()=>()=>{};function Ke(){const{direction:t,isOpen:n,shouldScaleBackground:e,setBackgroundColorOnScale:a,noBodyStyles:i}=st(),o=r.useRef(null),f=K.useMemo(()=>document.body.style.backgroundColor,[]);function m(){return(window.innerWidth-At)/window.innerWidth}r.useEffect(()=>{if(n&&e){o.current&&clearTimeout(o.current);const T=document.querySelector("[data-vaul-drawer-wrapper]")||document.querySelector("[vaul-drawer-wrapper]");if(!T)return;We(a&&!i?Ct(document.body,{background:"black"}):Xe,Ct(T,{transformOrigin:O(t)?"top":"left",transitionProperty:"transform, border-radius",transitionDuration:`${x.DURATION}s`,transitionTimingFunction:`cubic-bezier(${x.EASE.join(",")})`}));const D=Ct(T,{borderRadius:`${Qt}px`,overflow:"hidden",...O(t)?{transform:`scale(${m()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`}:{transform:`scale(${m()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`}});return()=>{D(),o.current=window.setTimeout(()=>{f?document.body.style.background=f:document.body.style.removeProperty("background")},x.DURATION*1e3)}}},[n,e,f])}let pt=null;function Ge({isOpen:t,modal:n,nested:e,hasBeenOpened:a,preventScrollRestoration:i,noBodyStyles:o}){const[f,m]=r.useState(()=>typeof window<"u"?window.location.href:""),T=r.useRef(0),D=r.useCallback(()=>{if(Ut()&&pt===null&&t&&!o){pt={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left,height:document.body.style.height,right:"unset"};const{scrollX:p,innerHeight:h}=window;document.body.style.setProperty("position","fixed","important"),Object.assign(document.body.style,{top:`${-T.current}px`,left:`${-p}px`,right:"0px",height:"auto"}),window.setTimeout(()=>window.requestAnimationFrame(()=>{const B=h-window.innerHeight;B&&T.current>=h&&(document.body.style.top=`${-(T.current+B)}px`)}),300)}},[t]),g=r.useCallback(()=>{if(Ut()&&pt!==null&&!o){const p=-parseInt(document.body.style.top,10),h=-parseInt(document.body.style.left,10);Object.assign(document.body.style,pt),window.requestAnimationFrame(()=>{if(i&&f!==window.location.href){m(window.location.href);return}window.scrollTo(h,p)}),pt=null}},[f]);return r.useEffect(()=>{function p(){T.current=window.scrollY}return p(),window.addEventListener("scroll",p),()=>{window.removeEventListener("scroll",p)}},[]),r.useEffect(()=>{if(n)return()=>{typeof document>"u"||document.querySelector("[data-vaul-drawer]")||g()}},[n,g]),r.useEffect(()=>{e||!a||(t?(!window.matchMedia("(display-mode: standalone)").matches&&D(),n||window.setTimeout(()=>{g()},500)):g())},[t,a,f,n,e,D,g]),{restorePositionSetting:g}}function ee({open:t,onOpenChange:n,children:e,onDrag:a,onRelease:i,snapPoints:o,shouldScaleBackground:f=!1,setBackgroundColorOnScale:m=!0,closeThreshold:T=ze,scrollLockTimeout:D=Ve,dismissible:g=!0,handleOnly:p=!1,fadeFromIndex:h=o&&o.length-1,activeSnapPoint:B,setActiveSnapPoint:L,fixed:E,modal:j=!0,onClose:w,nested:N,noBodyStyles:A=!1,direction:c="bottom",defaultOpen:Y=!1,disablePreventScroll:tt=!0,snapToSequentialPoint:u=!1,preventScrollRestoration:b=!1,repositionInputs:y=!0,onAnimationEnd:I,container:M,autoFocus:U=!1}){var l,F;const[H=!1,W]=te({defaultProp:Y,prop:t,onChange:s=>{n==null||n(s),!s&&!N&&fe(),setTimeout(()=>{I==null||I(s)},x.DURATION*1e3),s&&!j&&typeof window<"u"&&window.requestAnimationFrame(()=>{document.body.style.pointerEvents="auto"}),s||(document.body.style.pointerEvents="auto")}}),[P,G]=r.useState(!1),[J,lt]=r.useState(!1),[ie,Mt]=r.useState(!1),rt=r.useRef(null),ht=r.useRef(null),bt=r.useRef(null),St=r.useRef(null),ut=r.useRef(null),ct=r.useRef(!1),Tt=r.useRef(null),Rt=r.useRef(0),at=r.useRef(!1),Pt=r.useRef(!Y),It=r.useRef(0),d=r.useRef(null),Ht=r.useRef(((l=d.current)==null?void 0:l.getBoundingClientRect().height)||0),_t=r.useRef(((F=d.current)==null?void 0:F.getBoundingClientRect().width)||0),Dt=r.useRef(0),se=r.useCallback(s=>{o&&s===dt.length-1&&(ht.current=new Date)},[]),{activeSnapPoint:le,activeSnapPointIndex:ot,setActiveSnapPoint:Lt,onRelease:ue,snapPointsOffset:dt,onDrag:ce,shouldFade:kt,getPercentageDragged:de}=qe({snapPoints:o,activeSnapPointProp:B,setActiveSnapPointProp:L,drawerRef:d,fadeFromIndex:h,overlayRef:rt,onSnapPointChange:se,direction:c,container:M,snapToSequentialPoint:u});_e({isDisabled:!H||J||!j||ie||!P||!y||!tt});const{restorePositionSetting:fe}=Ge({isOpen:H,modal:j,nested:N??!1,hasBeenOpened:P,preventScrollRestoration:b,noBodyStyles:A});function wt(){return(window.innerWidth-At)/window.innerWidth}function me(s){var S,R;!g&&!o||d.current&&!d.current.contains(s.target)||(Ht.current=((S=d.current)==null?void 0:S.getBoundingClientRect().height)||0,_t.current=((R=d.current)==null?void 0:R.getBoundingClientRect().width)||0,lt(!0),bt.current=new Date,qt()&&window.addEventListener("touchend",()=>ct.current=!1,{once:!0}),s.target.setPointerCapture(s.pointerId),Rt.current=O(c)?s.pageY:s.pageX)}function Bt(s,S){var R;let v=s;const C=(R=window.getSelection())==null?void 0:R.toString(),k=d.current?yt(d.current,c):null,_=new Date;if(v.tagName==="SELECT"||v.hasAttribute("data-vaul-no-drag")||v.closest("[data-vaul-no-drag]"))return!1;if(c==="right"||c==="left")return!0;if(ht.current&&_.getTime()-ht.current.getTime()<500)return!1;if(k!==null&&(c==="bottom"?k>0:k<0))return!0;if(C&&C.length>0)return!1;if(ut.current&&_.getTime()-ut.current.getTime()<D&&k===0||S)return ut.current=_,!1;for(;v;){if(v.scrollHeight>v.clientHeight){if(v.scrollTop!==0)return ut.current=new Date,!1;if(v.getAttribute("role")==="dialog")return!0}v=v.parentNode}return!0}function pe(s){if(d.current&&J){const S=c==="bottom"||c==="right"?1:-1,R=(Rt.current-(O(c)?s.pageY:s.pageX))*S,v=R>0,C=o&&!g&&!v;if(C&&ot===0)return;const k=Math.abs(R),_=document.querySelector("[data-vaul-drawer-wrapper]"),Q=c==="bottom"||c==="top"?Ht.current:_t.current;let z=k/Q;const et=de(k,v);if(et!==null&&(z=et),C&&z>=1||!ct.current&&!Bt(s.target,v))return;if(d.current.classList.add(Ot),ct.current=!0,$(d.current,{transition:"none"}),$(rt.current,{transition:"none"}),o&&ce({draggedDistance:R}),v&&!o){const q=Ue(R),gt=Math.min(q*-1,0)*S;$(d.current,{transform:O(c)?`translate3d(0, ${gt}px, 0)`:`translate3d(${gt}px, 0, 0)`});return}const Z=1-z;if((kt||h&&ot===h-1)&&(a==null||a(s,z),$(rt.current,{opacity:`${Z}`,transition:"none"},!0)),_&&rt.current&&f){const q=Math.min(wt()+z*(1-wt()),1),gt=8-z*8,Ft=Math.max(0,14-z*14);$(_,{borderRadius:`${gt}px`,transform:O(c)?`scale(${q}) translate3d(0, ${Ft}px, 0)`:`scale(${q}) translate3d(${Ft}px, 0, 0)`,transition:"none"},!0)}if(!o){const q=k*S;$(d.current,{transform:O(c)?`translate3d(0, ${q}px, 0)`:`translate3d(${q}px, 0, 0)`})}}}r.useEffect(()=>{window.requestAnimationFrame(()=>{Pt.current=!0})},[]),r.useEffect(()=>{var s;function S(){if(!d.current||!y)return;const R=document.activeElement;if($t(R)||at.current){var v;const C=((v=window.visualViewport)==null?void 0:v.height)||0,k=window.innerHeight;let _=k-C;const Q=d.current.getBoundingClientRect().height||0,z=Q>k*.8;Dt.current||(Dt.current=Q);const et=d.current.getBoundingClientRect().top;if(Math.abs(It.current-_)>60&&(at.current=!at.current),o&&o.length>0&&dt&&ot){const Z=dt[ot]||0;_+=Z}if(It.current=_,Q>C||at.current){const Z=d.current.getBoundingClientRect().height;let q=Z;Z>C&&(q=C-(z?et:At)),E?d.current.style.height=`${Z-Math.max(_,0)}px`:d.current.style.height=`${Math.max(q,C-et)}px`}else $e()||(d.current.style.height=`${Dt.current}px`);o&&o.length>0&&!at.current?d.current.style.bottom="0px":d.current.style.bottom=`${Math.max(_,0)}px`}}return(s=window.visualViewport)==null||s.addEventListener("resize",S),()=>{var R;return(R=window.visualViewport)==null?void 0:R.removeEventListener("resize",S)}},[ot,o,dt]);function ft(s){he(),w==null||w(),s||W(!1),setTimeout(()=>{o&&Lt(o[0])},x.DURATION*1e3)}function jt(){if(!d.current)return;const s=document.querySelector("[data-vaul-drawer-wrapper]"),S=yt(d.current,c);$(d.current,{transform:"translate3d(0, 0, 0)",transition:`transform ${x.DURATION}s cubic-bezier(${x.EASE.join(",")})`}),$(rt.current,{transition:`opacity ${x.DURATION}s cubic-bezier(${x.EASE.join(",")})`,opacity:"1"}),f&&S&&S>0&&H&&$(s,{borderRadius:`${Qt}px`,overflow:"hidden",...O(c)?{transform:`scale(${wt()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,transformOrigin:"top"}:{transform:`scale(${wt()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,transformOrigin:"left"},transitionProperty:"transform, border-radius",transitionDuration:`${x.DURATION}s`,transitionTimingFunction:`cubic-bezier(${x.EASE.join(",")})`},!0)}function he(){!J||!d.current||(d.current.classList.remove(Ot),ct.current=!1,lt(!1),St.current=new Date)}function we(s){if(!J||!d.current)return;d.current.classList.remove(Ot),ct.current=!1,lt(!1),St.current=new Date;const S=yt(d.current,c);if(!s||!Bt(s.target,!1)||!S||Number.isNaN(S)||bt.current===null)return;const R=St.current.getTime()-bt.current.getTime(),v=Rt.current-(O(c)?s.pageY:s.pageX),C=Math.abs(v)/R;if(C>.05&&(Mt(!0),setTimeout(()=>{Mt(!1)},200)),o){ue({draggedDistance:v*(c==="bottom"||c==="right"?1:-1),closeDrawer:ft,velocity:C,dismissible:g}),i==null||i(s,!0);return}if(c==="bottom"||c==="right"?v>0:v<0){jt(),i==null||i(s,!0);return}if(C>Jt){ft(),i==null||i(s,!1);return}var k;const _=Math.min((k=d.current.getBoundingClientRect().height)!=null?k:0,window.innerHeight);var Q;const z=Math.min((Q=d.current.getBoundingClientRect().width)!=null?Q:0,window.innerWidth),et=c==="left"||c==="right";if(Math.abs(S)>=(et?z:_)*T){ft(),i==null||i(s,!1);return}i==null||i(s,!0),jt()}r.useEffect(()=>(H&&($(document.documentElement,{scrollBehavior:"auto"}),ht.current=new Date),()=>{Fe(document.documentElement,"scrollBehavior")}),[H]);function ge(s){const S=s?(window.innerWidth-nt)/window.innerWidth:1,R=s?-nt:0;Tt.current&&window.clearTimeout(Tt.current),$(d.current,{transition:`transform ${x.DURATION}s cubic-bezier(${x.EASE.join(",")})`,transform:O(c)?`scale(${S}) translate3d(0, ${R}px, 0)`:`scale(${S}) translate3d(${R}, 0, 0)`}),!s&&d.current&&(Tt.current=setTimeout(()=>{const v=yt(d.current,c);$(d.current,{transition:"none",transform:O(c)?`translate3d(0, ${v}px, 0)`:`translate3d(${v}px, 0, 0)`})},500))}function ve(s,S){if(S<0)return;const R=(window.innerWidth-nt)/window.innerWidth,v=R+S*(1-R),C=-nt+S*nt;$(d.current,{transform:O(c)?`scale(${v}) translate3d(0, ${C}px, 0)`:`scale(${v}) translate3d(${C}px, 0, 0)`,transition:"none"})}function ye(s,S){const R=O(c)?window.innerHeight:window.innerWidth,v=S?(R-nt)/R:1,C=S?-nt:0;S&&$(d.current,{transition:`transform ${x.DURATION}s cubic-bezier(${x.EASE.join(",")})`,transform:O(c)?`scale(${v}) translate3d(0, ${C}px, 0)`:`scale(${v}) translate3d(${C}px, 0, 0)`})}return r.useEffect(()=>{j||window.requestAnimationFrame(()=>{document.body.style.pointerEvents="auto"})},[j]),r.createElement(xe,{defaultOpen:Y,onOpenChange:s=>{!g&&!s||(s?G(!0):ft(!0),W(s))},open:H},r.createElement(Yt.Provider,{value:{activeSnapPoint:le,snapPoints:o,setActiveSnapPoint:Lt,drawerRef:d,overlayRef:rt,onOpenChange:n,onPress:me,onRelease:we,onDrag:pe,dismissible:g,shouldAnimate:Pt,handleOnly:p,isOpen:H,isDragging:J,shouldFade:kt,closeDrawer:ft,onNestedDrag:ve,onNestedOpenChange:ge,onNestedRelease:ye,keyboardIsOpen:at,modal:j,snapPointsOffset:dt,activeSnapPointIndex:ot,direction:c,shouldScaleBackground:f,setBackgroundColorOnScale:m,noBodyStyles:A,container:M,autoFocus:U}},e))}const ne=r.forwardRef(function({...t},n){const{overlayRef:e,snapPoints:a,onRelease:i,shouldFade:o,isOpen:f,modal:m,shouldAnimate:T}=st(),D=Kt(n,e),g=a&&a.length>0;if(!m)return null;const p=r.useCallback(h=>i(h),[i]);return r.createElement(be,{onMouseUp:p,ref:D,"data-vaul-overlay":"","data-vaul-snap-points":f&&g?"true":"false","data-vaul-snap-points-overlay":f&&o?"true":"false","data-vaul-animate":T!=null&&T.current?"true":"false",...t})});ne.displayName="Drawer.Overlay";const re=r.forwardRef(function({onPointerDownOutside:t,style:n,onOpenAutoFocus:e,...a},i){const{drawerRef:o,onPress:f,onRelease:m,onDrag:T,keyboardIsOpen:D,snapPointsOffset:g,activeSnapPointIndex:p,modal:h,isOpen:B,direction:L,snapPoints:E,container:j,handleOnly:w,shouldAnimate:N,autoFocus:A}=st(),[c,Y]=r.useState(!1),tt=Kt(i,o),u=r.useRef(null),b=r.useRef(null),y=r.useRef(!1),I=E&&E.length>0;Ke();const M=(l,F,H=0)=>{if(y.current)return!0;const W=Math.abs(l.y),P=Math.abs(l.x),G=P>W,J=["bottom","right"].includes(F)?1:-1;if(F==="left"||F==="right"){if(!(l.x*J<0)&&P>=0&&P<=H)return G}else if(!(l.y*J<0)&&W>=0&&W<=H)return!G;return y.current=!0,!0};r.useEffect(()=>{I&&window.requestAnimationFrame(()=>{Y(!0)})},[]);function U(l){u.current=null,y.current=!1,m(l)}return r.createElement(Se,{"data-vaul-drawer-direction":L,"data-vaul-drawer":"","data-vaul-delayed-snap-points":c?"true":"false","data-vaul-snap-points":B&&I?"true":"false","data-vaul-custom-container":j?"true":"false","data-vaul-animate":N!=null&&N.current?"true":"false",...a,ref:tt,style:g&&g.length>0?{"--snap-point-height":`${g[p??0]}px`,...n}:n,onPointerDown:l=>{w||(a.onPointerDown==null||a.onPointerDown.call(a,l),u.current={x:l.pageX,y:l.pageY},f(l))},onOpenAutoFocus:l=>{e==null||e(l),A||l.preventDefault()},onPointerDownOutside:l=>{if(t==null||t(l),!h||l.defaultPrevented){l.preventDefault();return}D.current&&(D.current=!1)},onFocusOutside:l=>{if(!h){l.preventDefault();return}},onPointerMove:l=>{if(b.current=l,w||(a.onPointerMove==null||a.onPointerMove.call(a,l),!u.current))return;const F=l.pageY-u.current.y,H=l.pageX-u.current.x,W=l.pointerType==="touch"?10:2;M({x:H,y:F},L,W)?T(l):(Math.abs(H)>W||Math.abs(F)>W)&&(u.current=null)},onPointerUp:l=>{a.onPointerUp==null||a.onPointerUp.call(a,l),u.current=null,y.current=!1,m(l)},onPointerOut:l=>{a.onPointerOut==null||a.onPointerOut.call(a,l),U(b.current)},onContextMenu:l=>{a.onContextMenu==null||a.onContextMenu.call(a,l),b.current&&U(b.current)}})});re.displayName="Drawer.Content";const Je=250,Qe=120,ae=r.forwardRef(function({preventCycle:t=!1,children:n,...e},a){const{closeDrawer:i,isDragging:o,snapPoints:f,activeSnapPoint:m,setActiveSnapPoint:T,dismissible:D,handleOnly:g,isOpen:p,onPress:h,onDrag:B}=st(),L=r.useRef(null),E=r.useRef(!1);function j(){if(E.current){A();return}window.setTimeout(()=>{w()},Qe)}function w(){if(o||t||E.current){A();return}if(A(),!f||f.length===0){D||i();return}if(m===f[f.length-1]&&D){i();return}const Y=f.findIndex(u=>u===m);if(Y===-1)return;const tt=f[Y+1];T(tt)}function N(){L.current=window.setTimeout(()=>{E.current=!0},Je)}function A(){L.current&&window.clearTimeout(L.current),E.current=!1}return r.createElement("div",{onClick:j,onPointerCancel:A,onPointerDown:c=>{g&&h(c),N()},onPointerMove:c=>{g&&B(c)},ref:a,"data-vaul-drawer-visible":p?"true":"false","data-vaul-handle":"","aria-hidden":"true",...e},r.createElement("span",{"data-vaul-handle-hitarea":"","aria-hidden":"true"},n))});ae.displayName="Drawer.Handle";function Ze({onDrag:t,onOpenChange:n,...e}){const{onNestedDrag:a,onNestedOpenChange:i,onNestedRelease:o}=st();if(!a)throw new Error("Drawer.NestedRoot must be placed in another drawer");return r.createElement(ee,{nested:!0,onClose:()=>{i(!1)},onDrag:(f,m)=>{a(f,m),t==null||t(f,m)},onOpenChange:f=>{f&&i(f)},onRelease:o,...e})}function tn(t){const n=st(),{container:e=n.container,...a}=t;return r.createElement(Ce,{container:e,...a})}const V={Root:ee,NestedRoot:Ze,Content:re,Overlay:ne,Trigger:Te,Portal:tn,Handle:ae,Close:Re,Title:De,Description:Ee};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,n){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,n),n)}};const en=({shouldScaleBackground:t=!0,...n})=>X.jsx(V.Root,{shouldScaleBackground:t,...n});en.displayName="Drawer";const dn=V.Trigger,nn=V.Portal,fn=V.Close,oe=K.forwardRef(({className:t,...n},e)=>X.jsx(V.Overlay,{ref:e,className:it("fixed inset-0 z-50 bg-black/80",t),...n}));oe.displayName=V.Overlay.displayName;const rn=K.forwardRef(({className:t,children:n,...e},a)=>X.jsxs(nn,{children:[X.jsx(oe,{}),X.jsxs(V.Content,{ref:a,className:it("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",t),...e,children:[X.jsx("div",{className:"mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted"}),n]})]}));rn.displayName="DrawerContent";const an=({className:t,...n})=>X.jsx("div",{className:it("grid gap-1.5 p-4 text-center sm:text-left",t),...n});an.displayName="DrawerHeader";const on=({className:t,...n})=>X.jsx("div",{className:it("mt-auto flex flex-col gap-2 p-4",t),...n});on.displayName="DrawerFooter";const sn=K.forwardRef(({className:t,...n},e)=>X.jsx(V.Title,{ref:e,className:it("text-lg font-semibold leading-none tracking-tight",t),...n}));sn.displayName=V.Title.displayName;const ln=K.forwardRef(({className:t,...n},e)=>X.jsx(V.Description,{ref:e,className:it("text-sm text-muted-foreground",t),...n}));ln.displayName=V.Description.displayName;globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(t,n){return this.cache.has(t)?this.cache.get(t):(this.cache.set(t,n),n)}};function mn(t){const[n,e]=K.useState(!1);return K.useEffect(()=>{function a(o){e(o.matches)}const i=matchMedia(t);return i.addEventListener("change",a),e(i.matches),()=>i.removeEventListener("change",a)},[t]),n}export{en as D,dn as a,rn as b,an as c,sn as d,ln as e,on as f,fn as g,mn as u};
