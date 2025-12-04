(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1521,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},79537,e=>{e.v({AElig:"Æ",AMP:"&",Aacute:"Á",Acirc:"Â",Agrave:"À",Aring:"Å",Atilde:"Ã",Auml:"Ä",COPY:"©",Ccedil:"Ç",ETH:"Ð",Eacute:"É",Ecirc:"Ê",Egrave:"È",Euml:"Ë",GT:">",Iacute:"Í",Icirc:"Î",Igrave:"Ì",Iuml:"Ï",LT:"<",Ntilde:"Ñ",Oacute:"Ó",Ocirc:"Ô",Ograve:"Ò",Oslash:"Ø",Otilde:"Õ",Ouml:"Ö",QUOT:'"',REG:"®",THORN:"Þ",Uacute:"Ú",Ucirc:"Û",Ugrave:"Ù",Uuml:"Ü",Yacute:"Ý",aacute:"á",acirc:"â",acute:"´",aelig:"æ",agrave:"à",amp:"&",aring:"å",atilde:"ã",auml:"ä",brvbar:"¦",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",ecirc:"ê",egrave:"è",eth:"ð",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",iacute:"í",icirc:"î",iexcl:"¡",igrave:"ì",iquest:"¿",iuml:"ï",laquo:"«",lt:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",oacute:"ó",ocirc:"ô",ograve:"ò",ordf:"ª",ordm:"º",oslash:"ø",otilde:"õ",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',raquo:"»",reg:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",times:"×",uacute:"ú",ucirc:"û",ugrave:"ù",uml:"¨",uuml:"ü",yacute:"ý",yen:"¥",yuml:"ÿ"})},27208,e=>{e.v({0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"})},73850,e=>{"use strict";var t=e.i(45100);let n=(0,e.i(51849).createIcon)({iconProps:{useFillCurrentColor:!0},viewBox:"0 0 156 94",paths:(0,t.jsx)("path",{d:"M0,31.18h31.18v62.56H0V31.18Zm155.46,5.67v56.89h-31.18V45.36c0-7.83-6.34-14.18-14.17-14.18h-17.01c.29,1.85,.44,3.74,.44,5.67v56.89h-31.18V45.36c0-7.83-6.35-14.18-14.17-14.18H31.18V0h25.51c13.15,0,24.69,6.89,31.21,17.25,2.62,4.15,4.43,8.86,5.2,13.92V0h25.51c20.35,0,36.85,16.5,36.85,36.85Z"})});e.s(["IconMLogo",0,n])},7823,e=>{"use strict";function t(e,t){if(null==e)return{};var n={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n}e.s(["default",()=>t])},37215,e=>{"use strict";function t(){return(t=Object.assign.bind()).apply(null,arguments)}e.s(["default",()=>t])},22480,e=>{"use strict";let t=(0,e.i(64334).createContext)({currentId:"",onLinkClick:()=>{},linkMap:{current:new Map}});e.s(["AnchorContext",0,t])},98319,e=>{"use strict";var t=e.i(64334);function n(...e){return(0,t.useCallback)(t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})},e)}e.s(["useComposedRefs",()=>n])},88036,e=>{"use strict";var t=e.i(45100),n=e.i(64334),r=e.i(22480);function o(e){let t=(0,n.useRef)(null);return t.current=e,(0,n.useCallback)((...e)=>t.current?.(...e),[])}var i=e.i(96224);function a(e,t){try{return e.querySelector(t)}catch(e){return null}}function c({scrollContainer:e,targetId:t,offset:n,isScrolling:r}){var o,c;if(!t)return;let l=a(document,`#${CSS.escape(t)}`);if(!l)return;let u=e.current,s=((void 0===(o=u)&&(o=window),o)&&(o===window?Math.ceil(window.pageYOffset):o.scrollTop)||0)+((e,t)=>{if(!e.getClientRects().length)return 0;let n=e.getBoundingClientRect();return n.width||n.height?t&&t!==window?n.top-t.getBoundingClientRect().top:(t=e.ownerDocument.documentElement,n.top-t.clientTop):n.top})(l,u)+n;(r.current=!0,(0,i.isWindow)(u))?u.scrollTo((void 0===(c=u)&&(c=window),c)&&(c===window?Math.ceil(window.pageXOffset||window.scrollX):c.scrollLeft)||0,s):u.scrollTop=s}function l({targetId:e,linkMap:t,wrapperRef:n,currentId:r,setCurrentId:o,onChange:i}){e&&n.current&&t.current.get(e)&&e!==r&&o(e).then(()=>{i?.(e,r)})}var u=e.i(98319);let s=(0,n.forwardRef)((e,s)=>{let{scrollContainer:d,offset:p=0,children:f,onChange:h,queryKey:g="anchor-id",isCloseInitAnchor:m,...v}=e,{currentId:x,onLinkClick:C,wrapperRef:b,linkMap:y}=function({propScrollContainer:e,onChange:t,offset:r,queryKey:u,isCloseInitAnchor:s}){var d;let p,f,h=(0,n.useRef)(null),g=(0,n.useRef)(null),m=(0,n.useRef)(new Map),v=(0,n.useRef)(!1),[x,C]=function(e){let[t,r]=(0,n.useState)({value:"",resolve:e=>{}});return(0,n.useEffect)(()=>{t.resolve(t.value)},[t]),[t.value,e=>new Promise(t=>{r(n=>{let r=e;return"function"==typeof e&&(r=e(n.value)),{value:r,resolve:t}})})]}(0),b=o(()=>{if(v.current)return;let e=function({linkMap:e,scrollContainer:t}){let n=t.current,r=((0,i.isWindow)(n)?document.documentElement||document.body:n).getBoundingClientRect(),o=Array.from(e.current.keys()),c=[];for(let e of o){let t=a(document,"#"+CSS.escape(e));if(t){let{top:e}=t.getBoundingClientRect(),o=(0,i.isWindow)(n)?e:e-r.top;o>=0&&c.push({element:t,top:o})}}return 0===c.length?null:c.reduce((e,t)=>e.top<=t.top?e:t).element}({linkMap:m,scrollContainer:g});e?.id&&l({targetId:e.id,linkMap:m,wrapperRef:h,currentId:x,setCurrentId:C,onChange:t})}),y=o((d=()=>{b(),v.current=!1},p=null,(f=(...e)=>{p||(p=setTimeout(()=>{p=null,d(...e)},30))}).cancel=()=>{p&&(clearTimeout(p),p=null)},f));return(0,n.useEffect)(()=>(g.current=(0,i.isString)(e)?a(document,e):e||window,g.current?.addEventListener("scroll",y),()=>{g.current?.removeEventListener("scroll",y)}),[y,e]),(0,n.useEffect)(()=>{if(!s)return void y();let e=new URLSearchParams(new URL(window.location.href).search).get(u);e&&(l({targetId:e,linkMap:m,wrapperRef:h,currentId:x,setCurrentId:C,onChange:t}),c({scrollContainer:g,targetId:e,offset:r,isScrolling:v}))},[]),{onScroll:y,currentId:x,onLinkClick:function(e,n){e.preventDefault(),l({targetId:n,linkMap:m,wrapperRef:h,currentId:x,setCurrentId:C,onChange:t}),c({scrollContainer:g,targetId:n,offset:r,isScrolling:v})},wrapperRef:h,scrollContainer:g,linkMap:m}}({propScrollContainer:d,onChange:h,offset:p,queryKey:g,isCloseInitAnchor:m});return(0,t.jsx)(r.AnchorContext.Provider,{value:{currentId:x,linkMap:y,onLinkClick:C},children:(0,t.jsx)("div",{...v,ref:(0,u.useComposedRefs)(b,s),children:f})})});e.s(["Anchor",0,s],88036)},69438,e=>{"use strict";var t=e.i(45100),n=e.i(64334),r=e.i(22480),o=e.i(98319);let i=(0,n.forwardRef)((e,i)=>{let{onLinkClick:a,linkMap:c,currentId:l}=(0,n.useContext)(r.AnchorContext),{onClick:u,targetId:s,children:d,className:p,activeClassName:f,...h}=e,g=(0,n.useRef)(null);return(0,n.useEffect)(()=>{var e;return e=g.current,s&&c.current.set(s,e),()=>{c.current.delete(s)}},[s,c]),(0,t.jsx)("div",{ref:(0,o.useComposedRefs)(i,g),...h,onClick:e=>{e.stopPropagation(),u?.(e),a?.(e,s)},"data-target-id":s,className:l===s?f:p,children:d})});e.s(["AnchorLink",0,i],69438)},93562,e=>{"use strict";var t=e.i(88036),n=e.i(69438),r=e.i(22480);let o={Root:t.Anchor,Link:n.AnchorLink,Context:r.AnchorContext};e.s(["Anchor",()=>o])},59772,e=>{"use strict";var t=e.i(64334);let n=(0,t.createContext)({checked:!1});var r=e.i(45100),o=e.i(2157);let i=(0,t.createContext)({type:"radio"}),a={RadioContext:n,Root:function(e){let a=(0,t.useContext)(i),c=function({props:e,context:t}){let n={...e};return t.group&&(n.checked=t.value===e.value,n.disabled=!!(t.disabled||e.disabled),n.readonly=!!(t.readonly||e.readonly)),n}({props:e,context:a}),{disabled:l,readonly:u,children:s,value:d,checked:p,onChange:f,...h}=c,g=(0,t.useRef)(null),[m,v]=(0,o.useMergeValue)(!1,{value:p,defaultValue:c.defaultChecked});return(0,r.jsx)(n.Provider,{value:{checked:m,disabled:l,readonly:u},children:(0,r.jsxs)("label",{...h,onClick:function(e){l||u?e.preventDefault():h?.onClick?.(e)},"aria-disabled":!!l,"aria-readonly":!!u,"aria-checked":!!m,children:[(0,r.jsx)("input",{ref:g,disabled:!!l,value:d,type:"radio",checked:!!m,onChange:t=>{t.persist(),t.stopPropagation(),l||u||(a.group?a?.onChangeValue?.(d,t):"checked"in e||m||v(!0),m||f?.(!0,t))},onClick:e=>{e.stopPropagation()},"aria-readonly":!!u}),s]})})},Group:function(e){let{name:t,children:n,type:a="radio",disabled:c,readonly:l,onChange:u,...s}=e,[d,p]=(0,o.useMergeValue)(void 0,{defaultValue:e.defaultValue,value:e.value});return(0,r.jsx)("div",{role:"radiogroup",...s,children:(0,r.jsx)(i.Provider,{value:{onChangeValue:(t,n)=>{t!==d&&("value"in e||p(t),u?.(t,n))},type:a,value:d,disabled:c,readonly:l,group:!0,name:t},children:n})})}};e.s(["Radio",()=>a],59772)},46030,e=>{"use strict";var t=e.i(64334);let n=(0,t.createContext)({checked:!1});var r=e.i(45100),o=e.i(2157);let i=(0,t.createContext)({isCheckboxGroup:!1,checkboxGroupValue:[],onGroupChange:()=>{},registerValue:()=>{},unRegisterValue:()=>{}}),a={CheckboxContext:n,Root:function(e){let a=(0,t.useContext)(i),{onGroupChange:c}=a,l=function({props:e,context:t}){let n={...e};return t.isCheckboxGroup&&(n.checked=-1!==t.checkboxGroupValue.indexOf(e.value),n.disabled=!!(t.disabled||e.disabled),n.readonly=!!(t.readonly||e.readonly)),n}({props:e,context:a}),{disabled:u,children:s,readonly:d,value:p,checked:f,onChange:h,indeterminate:g,...m}=l,v=(0,t.useRef)(null),[x,C]=(0,o.useMergeValue)(!1,{value:f,defaultValue:l.defaultChecked});return(0,t.useEffect)(()=>(a.registerValue(p),()=>{a.unRegisterValue(p)}),[p]),(0,r.jsx)(n.Provider,{value:{checked:x,disabled:u,indeterminate:g,readonly:d},children:(0,r.jsxs)("label",{...m,onClick:function(e){u||d?e.preventDefault():m?.onClick?.(e)},"aria-disabled":!!u,"aria-readonly":!!d,"aria-checked":!!x,children:[(0,r.jsx)("input",{value:p,disabled:!!u,ref:v,checked:!!x,onChange:function(e){e.persist(),e.stopPropagation(),u||d||(a.isCheckboxGroup?c?.(l.value,e.target.checked,e):C(e.target.checked),h?.(e.target.checked,e))},onClick:e=>e.stopPropagation(),type:"checkbox","aria-readonly":!!d}),s]})})},IconCheck:function({className:e}){return(0,r.jsx)("svg",{className:e,"aria-hidden":!0,focusable:!1,viewBox:"0 0 1024 1024",width:"200",height:"200",fill:"currentColor",children:(0,r.jsx)("path",{d:"M877.44815445 206.10060629a64.72691371 64.72691371 0 0 0-95.14856334 4.01306852L380.73381888 685.46812814 235.22771741 533.48933518a64.72691371 64.72691371 0 0 0-92.43003222-1.03563036l-45.82665557 45.82665443a64.72691371 64.72691371 0 0 0-0.90617629 90.61767965l239.61903446 250.10479331a64.72691371 64.72691371 0 0 0 71.19960405 15.14609778 64.33855261 64.33855261 0 0 0 35.08198741-21.23042702l36.24707186-42.71976334 40.5190474-40.77795556-3.36579926-3.49525333 411.40426297-486.74638962a64.72691371 64.72691371 0 0 0-3.88361443-87.64024149l-45.3088404-45.43829334z","p-id":"840"})})},Group:function(e){let{disabled:n,children:a,readonly:c,onChange:l,...u}=e,[s,d]=(0,o.useMergeValue)([],{defaultValue:e.defaultValue,value:e.value}),[p,f]=(0,t.useState)([]);return(0,r.jsx)("div",{role:"checkboxgroup",...u,children:(0,r.jsx)(i.Provider,{value:{isCheckboxGroup:!0,checkboxGroupValue:s,onGroupChange:function(e,t,n){if(!Array.isArray(s))return void console.error("Checkbox.Group value must be an array");let r=s?.slice()||[];t?r.push(e):r.splice(s.indexOf(e),1),d(r),l?.(r.filter(e=>p.indexOf(e)>-1),n)},disabled:n,readonly:c,registerValue:e=>{f(t=>Array.from(new Set([...t,e])))},unRegisterValue:e=>{f(t=>t.filter(t=>t!==e))}},children:a})})}};e.s(["Checkbox",()=>a],46030)},818,e=>{"use strict";var t=e.i(45100),n=e.i(18694);e.i(82928);var r=e.i(69389);e.i(73869);var o=e.i(84435);let i=`
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
`;function a(){return(0,t.jsx)(o.CodePreview,{code:i})}let c=`
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
`;function l(){return(0,t.jsx)(o.CodePreview,{code:c})}function u(e){let o={code:"code",h2:"h2",p:"p",...(0,n.useMDXComponents)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{children:"前言"}),"\n",(0,t.jsxs)(o.p,{children:["对于弹框组件而言，创意基本上来自弹框的动画，所以这里我们使用了 ",(0,t.jsx)(o.code,{children:"react"})," 目前可谓最火的动画库之一的 ",(0,t.jsx)(o.code,{children:"motion"})," 的 ",(0,t.jsx)(o.code,{children:"react"})," 版本来设置弹框动画。"]}),"\n",(0,t.jsxs)(o.p,{children:["在弹框组件，我们可以使用 ",(0,t.jsx)(o.code,{children:"animateFn"})," 来自定义自己的想要的动画效果。"]}),"\n","\n",(0,t.jsx)(r.H3Sub,{sub:(0,t.jsx)(t.Fragment,{children:"是一种最常见于其它组件库的弹框动画类型"}),children:"淡入淡出动画"}),"\n",(0,t.jsx)(a,{}),"\n","\n",(0,t.jsx)(r.H3Sub,{sub:(0,t.jsx)(t.Fragment,{children:"更加动感的弹框动画类型"}),children:"弹跳缩放动画"}),"\n",(0,t.jsx)(l,{})]})}function s(e={}){let{wrapper:r}={...(0,n.useMDXComponents)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}function d(){return(0,t.jsx)(s,{})}e.s(["HowMakeCssButton",()=>d],818)}]);