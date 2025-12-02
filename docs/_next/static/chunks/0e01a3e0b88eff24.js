(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1521,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},79537,e=>{e.v({AElig:"Æ",AMP:"&",Aacute:"Á",Acirc:"Â",Agrave:"À",Aring:"Å",Atilde:"Ã",Auml:"Ä",COPY:"©",Ccedil:"Ç",ETH:"Ð",Eacute:"É",Ecirc:"Ê",Egrave:"È",Euml:"Ë",GT:">",Iacute:"Í",Icirc:"Î",Igrave:"Ì",Iuml:"Ï",LT:"<",Ntilde:"Ñ",Oacute:"Ó",Ocirc:"Ô",Ograve:"Ò",Oslash:"Ø",Otilde:"Õ",Ouml:"Ö",QUOT:'"',REG:"®",THORN:"Þ",Uacute:"Ú",Ucirc:"Û",Ugrave:"Ù",Uuml:"Ü",Yacute:"Ý",aacute:"á",acirc:"â",acute:"´",aelig:"æ",agrave:"à",amp:"&",aring:"å",atilde:"ã",auml:"ä",brvbar:"¦",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",ecirc:"ê",egrave:"è",eth:"ð",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",iacute:"í",icirc:"î",iexcl:"¡",igrave:"ì",iquest:"¿",iuml:"ï",laquo:"«",lt:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",oacute:"ó",ocirc:"ô",ograve:"ò",ordf:"ª",ordm:"º",oslash:"ø",otilde:"õ",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',raquo:"»",reg:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",times:"×",uacute:"ú",ucirc:"û",ugrave:"ù",uml:"¨",uuml:"ü",yacute:"ý",yen:"¥",yuml:"ÿ"})},27208,e=>{e.v({0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"})},73850,e=>{"use strict";var t=e.i(45100);let n=(0,e.i(51849).createIcon)({iconProps:{useFillCurrentColor:!0},viewBox:"0 0 156 94",paths:(0,t.jsx)("path",{d:"M0,31.18h31.18v62.56H0V31.18Zm155.46,5.67v56.89h-31.18V45.36c0-7.83-6.34-14.18-14.17-14.18h-17.01c.29,1.85,.44,3.74,.44,5.67v56.89h-31.18V45.36c0-7.83-6.35-14.18-14.17-14.18H31.18V0h25.51c13.15,0,24.69,6.89,31.21,17.25,2.62,4.15,4.43,8.86,5.2,13.92V0h25.51c20.35,0,36.85,16.5,36.85,36.85Z"})});e.s(["IconMLogo",0,n])},7823,e=>{"use strict";function t(e,t){if(null==e)return{};var n={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n}e.s(["default",()=>t])},37215,e=>{"use strict";function t(){return(t=Object.assign.bind()).apply(null,arguments)}e.s(["default",()=>t])},22480,e=>{"use strict";let t=(0,e.i(64334).createContext)({currentId:"",onLinkClick:()=>{},linkMap:{current:new Map}});e.s(["AnchorContext",0,t])},98319,e=>{"use strict";var t=e.i(64334);function n(...e){return(0,t.useCallback)(t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})},e)}e.s(["useComposedRefs",()=>n])},88036,e=>{"use strict";var t=e.i(45100),n=e.i(64334),r=e.i(22480);function o(e){let t=(0,n.useRef)(null);return t.current=e,(0,n.useCallback)((...e)=>t.current?.(...e),[])}var i=e.i(96224);function c(e,t){try{return e.querySelector(t)}catch(e){return null}}function a({scrollContainer:e,targetId:t,offset:n,isScrolling:r}){var o,a;if(!t)return;let u=c(document,`#${CSS.escape(t)}`);if(!u)return;let l=e.current,s=((void 0===(o=l)&&(o=window),o)&&(o===window?Math.ceil(window.pageYOffset):o.scrollTop)||0)+((e,t)=>{if(!e.getClientRects().length)return 0;let n=e.getBoundingClientRect();return n.width||n.height?t&&t!==window?n.top-t.getBoundingClientRect().top:(t=e.ownerDocument.documentElement,n.top-t.clientTop):n.top})(u,l)+n;(r.current=!0,(0,i.isWindow)(l))?l.scrollTo((void 0===(a=l)&&(a=window),a)&&(a===window?Math.ceil(window.pageXOffset||window.scrollX):a.scrollLeft)||0,s):l.scrollTop=s}function u({targetId:e,linkMap:t,wrapperRef:n,currentId:r,setCurrentId:o,onChange:i}){e&&n.current&&t.current.get(e)&&e!==r&&o(e).then(()=>{i?.(e,r)})}var l=e.i(98319);let s=(0,n.forwardRef)((e,s)=>{let{scrollContainer:d,offset:p=0,children:f,onChange:m,queryKey:h="anchor-id",isCloseInitAnchor:v,...g}=e,{currentId:C,onLinkClick:x,wrapperRef:y,linkMap:w}=function({propScrollContainer:e,onChange:t,offset:r,queryKey:l,isCloseInitAnchor:s}){var d;let p,f,m=(0,n.useRef)(null),h=(0,n.useRef)(null),v=(0,n.useRef)(new Map),g=(0,n.useRef)(!1),[C,x]=function(e){let[t,r]=(0,n.useState)({value:"",resolve:e=>{}});return(0,n.useEffect)(()=>{t.resolve(t.value)},[t]),[t.value,e=>new Promise(t=>{r(n=>{let r=e;return"function"==typeof e&&(r=e(n.value)),{value:r,resolve:t}})})]}(0),y=o(()=>{if(g.current)return;let e=function({linkMap:e,scrollContainer:t}){let n=t.current,r=((0,i.isWindow)(n)?document.documentElement||document.body:n).getBoundingClientRect(),o=Array.from(e.current.keys()),a=[];for(let e of o){let t=c(document,"#"+CSS.escape(e));if(t){let{top:e}=t.getBoundingClientRect(),o=(0,i.isWindow)(n)?e:e-r.top;o>=0&&a.push({element:t,top:o})}}return 0===a.length?null:a.reduce((e,t)=>e.top<=t.top?e:t).element}({linkMap:v,scrollContainer:h});e?.id&&u({targetId:e.id,linkMap:v,wrapperRef:m,currentId:C,setCurrentId:x,onChange:t})}),w=o((d=()=>{y(),g.current=!1},p=null,(f=(...e)=>{p||(p=setTimeout(()=>{p=null,d(...e)},30))}).cancel=()=>{p&&(clearTimeout(p),p=null)},f));return(0,n.useEffect)(()=>(h.current=(0,i.isString)(e)?c(document,e):e||window,h.current?.addEventListener("scroll",w),()=>{h.current?.removeEventListener("scroll",w)}),[w,e]),(0,n.useEffect)(()=>{if(!s)return void w();let e=new URLSearchParams(new URL(window.location.href).search).get(l);e&&(u({targetId:e,linkMap:v,wrapperRef:m,currentId:C,setCurrentId:x,onChange:t}),a({scrollContainer:h,targetId:e,offset:r,isScrolling:g}))},[]),{onScroll:w,currentId:C,onLinkClick:function(e,n){e.preventDefault(),u({targetId:n,linkMap:v,wrapperRef:m,currentId:C,setCurrentId:x,onChange:t}),a({scrollContainer:h,targetId:n,offset:r,isScrolling:g})},wrapperRef:m,scrollContainer:h,linkMap:v}}({propScrollContainer:d,onChange:m,offset:p,queryKey:h,isCloseInitAnchor:v});return(0,t.jsx)(r.AnchorContext.Provider,{value:{currentId:C,linkMap:w,onLinkClick:x},children:(0,t.jsx)("div",{...g,ref:(0,l.useComposedRefs)(y,s),children:f})})});e.s(["Anchor",0,s],88036)},69438,e=>{"use strict";var t=e.i(45100),n=e.i(64334),r=e.i(22480),o=e.i(98319);let i=(0,n.forwardRef)((e,i)=>{let{onLinkClick:c,linkMap:a,currentId:u}=(0,n.useContext)(r.AnchorContext),{onClick:l,targetId:s,children:d,className:p,activeClassName:f,...m}=e,h=(0,n.useRef)(null);return(0,n.useEffect)(()=>{var e;return e=h.current,s&&a.current.set(s,e),()=>{a.current.delete(s)}},[s,a]),(0,t.jsx)("div",{ref:(0,o.useComposedRefs)(i,h),...m,onClick:e=>{e.stopPropagation(),l?.(e),c?.(e,s)},"data-target-id":s,className:u===s?f:p,children:d})});e.s(["AnchorLink",0,i],69438)},93562,e=>{"use strict";var t=e.i(88036),n=e.i(69438),r=e.i(22480);let o={Root:t.Anchor,Link:n.AnchorLink,Context:r.AnchorContext};e.s(["Anchor",()=>o])},59772,e=>{"use strict";var t=e.i(64334);let n=(0,t.createContext)({checked:!1});var r=e.i(45100),o=e.i(2157);let i=(0,t.createContext)({type:"radio"}),c={RadioContext:n,Root:function(e){let c=(0,t.useContext)(i),a=function({props:e,context:t}){let n={...e};return t.group&&(n.checked=t.value===e.value,n.disabled=!!(t.disabled||e.disabled),n.readonly=!!(t.readonly||e.readonly)),n}({props:e,context:c}),{disabled:u,readonly:l,children:s,value:d,checked:p,onChange:f,...m}=a,h=(0,t.useRef)(null),[v,g]=(0,o.useMergeValue)(!1,{value:p,defaultValue:a.defaultChecked});return(0,r.jsx)(n.Provider,{value:{checked:v,disabled:u,readonly:l},children:(0,r.jsxs)("label",{...m,onClick:function(e){u||l?e.preventDefault():m?.onClick?.(e)},"aria-disabled":!!u,"aria-readonly":!!l,"aria-checked":!!v,children:[(0,r.jsx)("input",{ref:h,disabled:!!u,value:d,type:"radio",checked:!!v,onChange:t=>{t.persist(),t.stopPropagation(),u||l||(c.group?c?.onChangeValue?.(d,t):"checked"in e||v||g(!0),v||f?.(!0,t))},onClick:e=>{e.stopPropagation()},"aria-readonly":!!l}),s]})})},Group:function(e){let{name:t,children:n,type:c="radio",disabled:a,readonly:u,onChange:l,...s}=e,[d,p]=(0,o.useMergeValue)(void 0,{defaultValue:e.defaultValue,value:e.value});return(0,r.jsx)("div",{role:"radiogroup",...s,children:(0,r.jsx)(i.Provider,{value:{onChangeValue:(t,n)=>{t!==d&&("value"in e||p(t),l?.(t,n))},type:c,value:d,disabled:a,readonly:u,group:!0,name:t},children:n})})}};e.s(["Radio",()=>c],59772)},818,e=>{"use strict";var t=e.i(45100),n=e.i(18694);e.i(82928);var r=e.i(69389);e.i(73869);var o=e.i(84435);let i=`
function App() {
  function applyPopupFade(placement) {
    if (placement === 'top' || placement === 'top-end' || placement === 'top-start') {
      return {
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
        exit: {
          opacity: 0,
        },
      };
    }
    if (placement === 'bottom' || placement === 'bottom-end' || placement === 'bottom-start') {
      return {
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
        exit: {
          opacity: 0,
        },
      };
    }
    if (placement === 'left' || placement === 'left-end' || placement === 'left-start') {
      return {
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
        exit: {
          opacity: 0,
        },
      };
    }
    if (placement === 'right' || placement === 'right-end' || placement === 'right-start') {
      return {
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
        exit: {
          opacity: 0,
        },
      };
    }
    return {};
  }

  return (
    <TPopover popoverContent="Popover Content" animateFn={applyPopupFade}>
      <TButton status="primary">Hover me!</TButton>
    </TPopover>
  );
}
`;function c(){return(0,t.jsx)(o.CodePreview,{code:i})}let a=`
function App() {
  function applyPopupBounceScale(placement) {
    const baseAnimation = {
      initial: {
        opacity: 0,
        scale: 0.3,
        transformOrigin: getTransformOrigin(placement)
      },
      animate: {
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          damping: 15,
          stiffness: 300,
          bounce: 0.4
        }
      },
      exit: {
        opacity: 0,
        scale: 0.8,
        transition: {
          duration: 0.2,
          ease: "easeInOut"
        }
      }
    };
    return baseAnimation;
  }

  function getTransformOrigin(placement) {
    const origins = {
      'top': 'bottom center',
      'top-start': 'bottom left',
      'top-end': 'bottom right',
      'bottom': 'top center',
      'bottom-start': 'top left',
      'bottom-end': 'top right',
      'left': 'right center',
      'left-start': 'right top',
      'left-end': 'right bottom',
      'right': 'left center',
      'right-start': 'left top',
      'right-end': 'left bottom'
    };
    return origins[placement] || 'center';
  }

  return (
    <TPopover popoverContent="Bouncy Popover!" animateFn={applyPopupBounceScale}>
      <TButton status="primary">Bounce Scale</TButton>
    </TPopover>
  );
}
`;function u(){return(0,t.jsx)(o.CodePreview,{code:a})}function l(e){let o={code:"code",h2:"h2",p:"p",...(0,n.useMDXComponents)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{children:"前言"}),"\n",(0,t.jsxs)(o.p,{children:["对于弹框组件而言，创意基本上来自弹框的动画，所以这里我们使用了 ",(0,t.jsx)(o.code,{children:"react"})," 目前可谓最火的动画库之一的 ",(0,t.jsx)(o.code,{children:"motion"})," 的 ",(0,t.jsx)(o.code,{children:"react"})," 版本来设置弹框动画。"]}),"\n",(0,t.jsxs)(o.p,{children:["在弹框组件，我们可以使用 ",(0,t.jsx)(o.code,{children:"animateFn"})," 来自定义自己的想要的动画效果。"]}),"\n","\n",(0,t.jsx)(r.H3Sub,{sub:(0,t.jsx)(t.Fragment,{children:"是一种最常见于其它组件库的弹框动画类型"}),children:"淡入淡出动画"}),"\n",(0,t.jsx)(c,{}),"\n","\n",(0,t.jsx)(r.H3Sub,{sub:(0,t.jsx)(t.Fragment,{children:"更加动感的弹框动画类型"}),children:"弹跳缩放动画"}),"\n",(0,t.jsx)(u,{})]})}function s(e={}){let{wrapper:r}={...(0,n.useMDXComponents)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}function d(){return(0,t.jsx)(s,{})}e.s(["HowMakeCssButton",()=>d],818)}]);