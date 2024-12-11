import{d9 as b,da as f,bJ as r,bF as h,db as v,bE as y,dc as k,bK as w,by as u,bV as g,bS as C,bH as x,bM as L,dd as m,bD as A,de as N}from"./index-njPWUeu0.js";const S=b`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`;var d=function(c,e,t,o){var a=arguments.length,i=a<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(c,e,t,o);else for(var l=c.length-1;l>=0;l--)(s=c[l])&&(i=(a<3?s(i):a>3?s(e,t,i):s(e,t))||i);return a>3&&i&&Object.defineProperty(e,t,i),i};const p="scroll-lock";let n=class extends f{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=r.state.open,this.caipAddress=h.state.activeCaipAddress,this.caipNetwork=h.state.activeCaipNetwork,this.shake=r.state.shake,this.initializeTheming(),v.prefetch(),this.unsubscribe.push(r.subscribeKey("open",e=>e?this.onOpen():this.onClose()),r.subscribeKey("shake",e=>this.shake=e),h.subscribeKey("activeCaipNetwork",e=>this.onNewNetwork(e)),h.subscribeKey("activeCaipAddress",e=>this.onNewAddress(e))),y.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?k`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            <wui-card
              shake="${this.shake}"
              role="alertdialog"
              aria-modal="true"
              tabindex="0"
              data-testid="w3m-modal-card"
            >
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
              <w3m-alertbar></w3m-alertbar>
            </wui-card>
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){w.state.view==="UnsupportedChain"||await u.isSIWXCloseDisabled()?r.shake():r.close()}initializeTheming(){const{themeVariables:e,themeMode:t}=N.state,o=g.getColorTheme(t);C(e,o)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),x.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=p,e.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${p}"]`);e&&e.remove()}onAddKeyboardListener(){var t;this.abortController=new AbortController;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-card");e==null||e.focus(),window.addEventListener("keydown",o=>{if(o.key==="Escape")this.handleClose();else if(o.key==="Tab"){const{tagName:a}=o.target;a&&!a.includes("W3M-")&&!a.includes("WUI-")&&(e==null||e.focus())}},this.abortController)}onRemoveKeyboardListener(){var e;(e=this.abortController)==null||e.abort(),this.abortController=void 0}async onNewAddress(e){const t=L.getPlainAddress(e);this.caipAddress=e,await u.initializeIfEnabled(),t||r.close()}onNewNetwork(e){var a,i,s,l;if(!this.caipAddress){this.caipNetwork=e,w.goBack();return}const t=(i=(a=this.caipNetwork)==null?void 0:a.caipNetworkId)==null?void 0:i.toString(),o=(s=e==null?void 0:e.caipNetworkId)==null?void 0:s.toString();t&&o&&t!==o&&((l=this.caipNetwork)==null?void 0:l.name)!=="Unknown Network"&&w.goBack(),this.caipNetwork=e}};n.styles=S;d([m()],n.prototype,"open",void 0);d([m()],n.prototype,"caipAddress",void 0);d([m()],n.prototype,"caipNetwork",void 0);d([m()],n.prototype,"shake",void 0);n=d([A("w3m-modal")],n);export{n as W3mModal};
