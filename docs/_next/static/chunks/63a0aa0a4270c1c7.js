(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1521,(e,s,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return t}});let t=e=>{}},79537,e=>{e.v({AElig:"Æ",AMP:"&",Aacute:"Á",Acirc:"Â",Agrave:"À",Aring:"Å",Atilde:"Ã",Auml:"Ä",COPY:"©",Ccedil:"Ç",ETH:"Ð",Eacute:"É",Ecirc:"Ê",Egrave:"È",Euml:"Ë",GT:">",Iacute:"Í",Icirc:"Î",Igrave:"Ì",Iuml:"Ï",LT:"<",Ntilde:"Ñ",Oacute:"Ó",Ocirc:"Ô",Ograve:"Ò",Oslash:"Ø",Otilde:"Õ",Ouml:"Ö",QUOT:'"',REG:"®",THORN:"Þ",Uacute:"Ú",Ucirc:"Û",Ugrave:"Ù",Uuml:"Ü",Yacute:"Ý",aacute:"á",acirc:"â",acute:"´",aelig:"æ",agrave:"à",amp:"&",aring:"å",atilde:"ã",auml:"ä",brvbar:"¦",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",ecirc:"ê",egrave:"è",eth:"ð",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",iacute:"í",icirc:"î",iexcl:"¡",igrave:"ì",iquest:"¿",iuml:"ï",laquo:"«",lt:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",oacute:"ó",ocirc:"ô",ograve:"ò",ordf:"ª",ordm:"º",oslash:"ø",otilde:"õ",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',raquo:"»",reg:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",times:"×",uacute:"ú",ucirc:"û",ugrave:"ù",uml:"¨",uuml:"ü",yacute:"ý",yen:"¥",yuml:"ÿ"})},27208,e=>{e.v({0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"})},73850,e=>{"use strict";var s=e.i(45100);let r=(0,e.i(51849).createIcon)({iconProps:{useFillCurrentColor:!0},viewBox:"0 0 156 94",paths:(0,s.jsx)("path",{d:"M0,31.18h31.18v62.56H0V31.18Zm155.46,5.67v56.89h-31.18V45.36c0-7.83-6.34-14.18-14.17-14.18h-17.01c.29,1.85,.44,3.74,.44,5.67v56.89h-31.18V45.36c0-7.83-6.35-14.18-14.17-14.18H31.18V0h25.51c13.15,0,24.69,6.89,31.21,17.25,2.62,4.15,4.43,8.86,5.2,13.92V0h25.51c20.35,0,36.85,16.5,36.85,36.85Z"})});e.s(["IconMLogo",0,r])},7823,e=>{"use strict";function s(e,s){if(null==e)return{};var r={};for(var t in e)if(({}).hasOwnProperty.call(e,t)){if(-1!==s.indexOf(t))continue;r[t]=e[t]}return r}e.s(["default",()=>s])},37215,e=>{"use strict";function s(){return(s=Object.assign.bind()).apply(null,arguments)}e.s(["default",()=>s])},22480,e=>{"use strict";let s=(0,e.i(64334).createContext)({currentId:"",onLinkClick:()=>{},linkMap:{current:new Map}});e.s(["AnchorContext",0,s])},98319,e=>{"use strict";var s=e.i(64334);function r(...e){return(0,s.useCallback)(s=>{e.forEach(e=>{"function"==typeof e?e(s):null!=e&&(e.current=s)})},e)}e.s(["useComposedRefs",()=>r])},88036,e=>{"use strict";var s=e.i(45100),r=e.i(64334),t=e.i(22480);function n(e){let s=(0,r.useRef)(null);return s.current=e,(0,r.useCallback)((...e)=>s.current?.(...e),[])}var i=e.i(96224);function d(e,s){try{return e.querySelector(s)}catch(e){return null}}function a({scrollContainer:e,targetId:s,offset:r,isScrolling:t}){var n,a;if(!s)return;let l=d(document,`#${CSS.escape(s)}`);if(!l)return;let o=e.current,c=((void 0===(n=o)&&(n=window),n)&&(n===window?Math.ceil(window.pageYOffset):n.scrollTop)||0)+((e,s)=>{if(!e.getClientRects().length)return 0;let r=e.getBoundingClientRect();return r.width||r.height?s&&s!==window?r.top-s.getBoundingClientRect().top:(s=e.ownerDocument.documentElement,r.top-s.clientTop):r.top})(l,o)+r;(t.current=!0,(0,i.isWindow)(o))?o.scrollTo((void 0===(a=o)&&(a=window),a)&&(a===window?Math.ceil(window.pageXOffset||window.scrollX):a.scrollLeft)||0,c):o.scrollTop=c}function l({targetId:e,linkMap:s,wrapperRef:r,currentId:t,setCurrentId:n,onChange:i}){e&&r.current&&s.current.get(e)&&e!==t&&n(e).then(()=>{i?.(e,t)})}var o=e.i(98319);let c=(0,r.forwardRef)((e,c)=>{let{scrollContainer:u,offset:b=0,children:g,onChange:h,queryKey:p="anchor-id",isCloseInitAnchor:x,...f}=e,{currentId:j,onLinkClick:v,wrapperRef:m,linkMap:w}=function({propScrollContainer:e,onChange:s,offset:t,queryKey:o,isCloseInitAnchor:c}){var u;let b,g,h=(0,r.useRef)(null),p=(0,r.useRef)(null),x=(0,r.useRef)(new Map),f=(0,r.useRef)(!1),[j,v]=function(e){let[s,t]=(0,r.useState)({value:"",resolve:e=>{}});return(0,r.useEffect)(()=>{s.resolve(s.value)},[s]),[s.value,e=>new Promise(s=>{t(r=>{let t=e;return"function"==typeof e&&(t=e(r.value)),{value:t,resolve:s}})})]}(0),m=n(()=>{if(f.current)return;let e=function({linkMap:e,scrollContainer:s}){let r=s.current,t=((0,i.isWindow)(r)?document.documentElement||document.body:r).getBoundingClientRect(),n=Array.from(e.current.keys()),a=[];for(let e of n){let s=d(document,"#"+CSS.escape(e));if(s){let{top:e}=s.getBoundingClientRect(),n=(0,i.isWindow)(r)?e:e-t.top;n>=0&&a.push({element:s,top:n})}}return 0===a.length?null:a.reduce((e,s)=>e.top<=s.top?e:s).element}({linkMap:x,scrollContainer:p});e?.id&&l({targetId:e.id,linkMap:x,wrapperRef:h,currentId:j,setCurrentId:v,onChange:s})}),w=n((u=()=>{m(),f.current=!1},b=null,(g=(...e)=>{b||(b=setTimeout(()=>{b=null,u(...e)},30))}).cancel=()=>{b&&(clearTimeout(b),b=null)},g));return(0,r.useEffect)(()=>(p.current=(0,i.isString)(e)?d(document,e):e||window,p.current?.addEventListener("scroll",w),()=>{p.current?.removeEventListener("scroll",w)}),[w,e]),(0,r.useEffect)(()=>{if(!c)return void w();let e=new URLSearchParams(new URL(window.location.href).search).get(o);e&&(l({targetId:e,linkMap:x,wrapperRef:h,currentId:j,setCurrentId:v,onChange:s}),a({scrollContainer:p,targetId:e,offset:t,isScrolling:f}))},[]),{onScroll:w,currentId:j,onLinkClick:function(e,r){e.preventDefault(),l({targetId:r,linkMap:x,wrapperRef:h,currentId:j,setCurrentId:v,onChange:s}),a({scrollContainer:p,targetId:r,offset:t,isScrolling:f})},wrapperRef:h,scrollContainer:p,linkMap:x}}({propScrollContainer:u,onChange:h,offset:b,queryKey:p,isCloseInitAnchor:x});return(0,s.jsx)(t.AnchorContext.Provider,{value:{currentId:j,linkMap:w,onLinkClick:v},children:(0,s.jsx)("div",{...f,ref:(0,o.useComposedRefs)(m,c),children:g})})});e.s(["Anchor",0,c],88036)},69438,e=>{"use strict";var s=e.i(45100),r=e.i(64334),t=e.i(22480),n=e.i(98319);let i=(0,r.forwardRef)((e,i)=>{let{onLinkClick:d,linkMap:a,currentId:l}=(0,r.useContext)(t.AnchorContext),{onClick:o,targetId:c,children:u,className:b,activeClassName:g,...h}=e,p=(0,r.useRef)(null);return(0,r.useEffect)(()=>{var e;return e=p.current,c&&a.current.set(c,e),()=>{a.current.delete(c)}},[c,a]),(0,s.jsx)("div",{ref:(0,n.useComposedRefs)(i,p),...h,onClick:e=>{e.stopPropagation(),o?.(e),d?.(e,c)},"data-target-id":c,className:l===c?g:b,children:u})});e.s(["AnchorLink",0,i],69438)},93562,e=>{"use strict";var s=e.i(88036),r=e.i(69438),t=e.i(22480);let n={Root:s.Anchor,Link:r.AnchorLink,Context:t.AnchorContext};e.s(["Anchor",()=>n])},59772,e=>{"use strict";var s=e.i(64334);let r=(0,s.createContext)({checked:!1});var t=e.i(45100),n=e.i(2157);let i=(0,s.createContext)({type:"radio"}),d={RadioContext:r,Root:function(e){let d=(0,s.useContext)(i),a=function({props:e,context:s}){let r={...e};return s.group&&(r.checked=s.value===e.value,r.disabled=!!(s.disabled||e.disabled),r.readonly=!!(s.readonly||e.readonly)),r}({props:e,context:d}),{disabled:l,readonly:o,children:c,value:u,checked:b,onChange:g,...h}=a,p=(0,s.useRef)(null),[x,f]=(0,n.useMergeValue)(!1,{value:b,defaultValue:a.defaultChecked});return(0,t.jsx)(r.Provider,{value:{checked:x,disabled:l,readonly:o},children:(0,t.jsxs)("label",{...h,onClick:function(e){l||o?e.preventDefault():h?.onClick?.(e)},"aria-disabled":!!l,"aria-readonly":!!o,"aria-checked":!!x,children:[(0,t.jsx)("input",{ref:p,disabled:!!l,value:u,type:"radio",checked:!!x,onChange:s=>{s.persist(),s.stopPropagation(),l||o||(d.group?d?.onChangeValue?.(u,s):"checked"in e||x||f(!0),x||g?.(!0,s))},onClick:e=>{e.stopPropagation()},"aria-readonly":!!o}),c]})})},Group:function(e){let{name:s,children:r,type:d="radio",disabled:a,readonly:l,onChange:o,...c}=e,[u,b]=(0,n.useMergeValue)(void 0,{defaultValue:e.defaultValue,value:e.value});return(0,t.jsx)("div",{role:"radiogroup",...c,children:(0,t.jsx)(i.Provider,{value:{onChangeValue:(s,r)=>{s!==u&&("value"in e||b(s),o?.(s,r))},type:d,value:u,disabled:a,readonly:l,group:!0,name:s},children:r})})}};e.s(["Radio",()=>d],59772)},36063,e=>{"use strict";var s=e.i(45100),r=e.i(18694);e.i(82928);var t=e.i(72304),n=e.i(2697),i=e.i(47445),d=e.i(69389);e.i(73869);var a=e.i(84435);let l=`function App() {
  return (
    <button
        style={{
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          padding: '0 14px',
          fontSize: '14px',
          lineHeight: '32px',
          borderRadius: '4px',
          background: '#2563eb',
      }}
    >
      Primary
    </button>
  );
}`;function o(){return(0,s.jsx)(a.CodePreview,{code:l})}let c=`import { Button, IconLoadingLine } from '@t-headless-ui/react';

const baseBtnStyle =
    'inline-flex relative items-center justify-center outline-none pl-3.5 pr-3.5 h-8 text-sm appearance-none select-none cursor-pointer whitespace-nowrap transition-all duration-200 ease-linear box-border rounded';

function TButton({ status = 'default', disabled, loading, children, ...restProps }) {
  return (
    <Button
      className={cs(baseBtnStyle, {
        // primary
        'bg-blue-600': status === 'primary' && !disabled,
        // warning
        'bg-orange-600': status === 'warning' && !disabled,
        // error
        'bg-red-600': status === 'error' && !disabled,
        // success
        'bg-green-600': status === 'success' && !disabled,
        // default
        'bg-gray-200': status === 'default' && !disabled,
        'text-white': status !== 'default',
        // hover
        'hover:bg-blue-500': status === 'primary' && !disabled,
        'hover:bg-orange-500': status === 'warning' && !disabled,
        'hover:bg-red-500': status === 'error' && !disabled,
        'hover:bg-green-500': status === 'success' && !disabled,
        // primary disabled
       'bg-blue-300': status === 'primary' && disabled,
        // warning disabled
        'bg-orange-300': status === 'warning' && disabled,
        // error disabled
        'bg-red-300': status === 'error' && disabled,
        // success disabled
        'bg-green-300': status === 'success' && disabled,
        // default disabled
        'bg-gray-50': status === 'default' && disabled,
        'text-gray-300': status === 'default' && disabled,
        // loading
        'cursor-not-allowed border border-transparent': disabled,
      })}
      {...restProps}
    >
      {loading ? <IconLoadingLine className="mr-2 animate-spin" /> : null}
      {children}
    </Button>
  );
}

function App() {
  return (
    <div className="flex gap-x-4">
      <TButton status="primary">Button</TButton>
      <TButton status="success">Button</TButton>
      <TButton status="success" loading>Button</TButton>
    </div>
  );
}`;function u(){return(0,s.jsx)(a.CodePreview,{code:c})}let b=`import { Button, IconLoadingLine } from '@t-headless-ui/react';

const baseBtnStyle =
    'inline-flex relative items-center justify-center outline-none pl-3.5 pr-3.5 h-8 text-sm appearance-none select-none cursor-pointer whitespace-nowrap transition-all duration-200 ease-linear box-border rounded border border-solid border-transparent';

function TButton({ status = 'default', disabled, loading, children, small, large, ...restProps }) {
  return (
    <Button
      className={cs(baseBtnStyle, {
        // primary
        'bg-blue-600': status === 'primary' && !disabled,
        // warning
        'bg-orange-600': status === 'warning' && !disabled,
        // error
        'bg-red-600': status === 'error' && !disabled,
        // success
        'bg-green-600': status === 'success' && !disabled,
        // default
        'bg-gray-200': status === 'default' && !disabled,
        'text-white': status !== 'default',
        // hover
        'hover:bg-blue-500': status === 'primary' && !disabled,
        'hover:bg-orange-500': status === 'warning' && !disabled,
        'hover:bg-red-500': status === 'error' && !disabled,
        'hover:bg-green-500': status === 'success' && !disabled,
        // primary disabled
       'bg-blue-300': status === 'primary' && disabled,
        // warning disabled
        'bg-orange-300': status === 'warning' && disabled,
        // error disabled
        'bg-red-300': status === 'error' && disabled,
        // success disabled
        'bg-green-300': status === 'success' && disabled,
        // default disabled
        'bg-gray-50': status === 'default' && disabled,
        'text-gray-300': status === 'default' && disabled,
        // loading
        'cursor-not-allowed border border-transparent': disabled,
        // active
        'active:bg-blue-700': status === 'primary' && !disabled,
        'active:bg-warning-700': status === 'warning' && !disabled,
        'active:bg-red-700': status === 'error' && !disabled,
        'active:bg-green-700': status === 'success' && !disabled,
        // focus
        'focus-visible:border-blue-200': status === 'primary' && !disabled,
        'focus-visible:border-warning-200': status === 'warning' && !disabled,
        'focus-visible:border-red-200': status === 'error' && !disabled,
        'focus-visible:border-green-200': status === 'success' && !disabled,
        // size
        'h-7': small,
        'h-9': large,
      })}
      {...restProps}
    >
      {loading ? <IconLoadingLine className="mr-2 animate-spin" /> : null}
      {children}
    </Button>
  );
}

function App() {
  return (
    <div className="inline-flex [&>button:first-child]:rounded-tr-none [&>button:first-child]:rounded-br-none [&>button:last-child]:rounded-tl-none [&>button:last-child]:rounded-bl-none [&>button:not(:last-child):not(:first-child)]:rounded-none [&>button:not(:last-child)]:border-r-white/20 [&>button:not(:last-child)]:border-r">
      <TButton status="primary">Small</TButton>
      <TButton status="primary">Default</TButton>
      <TButton status="primary">Large</TButton>
    </div>
  );
}`;function g(){return(0,s.jsx)(a.CodePreview,{code:b})}let h=`import { Button, IconLoadingLine } from '@t-headless-ui/react';

const baseBtnStyle =
    'inline-flex relative items-center justify-center outline-none pl-3.5 pr-3.5 h-8 text-sm appearance-none select-none cursor-pointer whitespace-nowrap transition-all duration-200 ease-linear box-border rounded border border-solid border-transparent';

function TButton({ status = 'default', disabled, loading, children, small, large, ...restProps }) {
  return (
    <Button
      className={cs(baseBtnStyle, {
        // primary
        'bg-blue-600': status === 'primary' && !disabled,
        // warning
        'bg-orange-600': status === 'warning' && !disabled,
        // error
        'bg-red-600': status === 'error' && !disabled,
        // success
        'bg-green-600': status === 'success' && !disabled,
        // default
        'bg-gray-200': status === 'default' && !disabled,
        'text-white': status !== 'default',
        // hover
        'hover:bg-blue-500': status === 'primary' && !disabled,
        'hover:bg-orange-500': status === 'warning' && !disabled,
        'hover:bg-red-500': status === 'error' && !disabled,
        'hover:bg-green-500': status === 'success' && !disabled,
        // primary disabled
       'bg-blue-300': status === 'primary' && disabled,
        // warning disabled
        'bg-orange-300': status === 'warning' && disabled,
        // error disabled
        'bg-red-300': status === 'error' && disabled,
        // success disabled
        'bg-green-300': status === 'success' && disabled,
        // default disabled
        'bg-gray-50': status === 'default' && disabled,
        'text-gray-300': status === 'default' && disabled,
        // loading
        'cursor-not-allowed border border-transparent': disabled,
        // active
        'active:bg-blue-700': status === 'primary' && !disabled,
        'active:bg-warning-700': status === 'warning' && !disabled,
        'active:bg-red-700': status === 'error' && !disabled,
        'active:bg-green-700': status === 'success' && !disabled,
        // focus
        'focus-visible:border-blue-200': status === 'primary' && !disabled,
        'focus-visible:border-warning-200': status === 'warning' && !disabled,
        'focus-visible:border-red-200': status === 'error' && !disabled,
        'focus-visible:border-green-200': status === 'success' && !disabled,
        // size
        'h-7': small,
        'h-9': large,
      })}
      {...restProps}
    >
      {loading ? <IconLoadingLine className="mr-2 animate-spin" /> : null}
      {children}
    </Button>
  );
}

function App() {
  return (
    <div className="flex gap-x-4">
      <TButton status="primary" small>Small</TButton>
      <TButton status="primary">Default</TButton>
      <TButton status="primary" large>Large</TButton>
    </div>
  );
}`;function p(){return(0,s.jsx)(a.CodePreview,{code:h})}let x=`import { Button, IconLoadingLine } from '@t-headless-ui/react';

const baseBtnStyle =
    'inline-flex relative items-center justify-center outline-none pl-3.5 pr-3.5 h-8 text-sm appearance-none select-none cursor-pointer whitespace-nowrap transition-all duration-200 ease-linear box-border rounded border border-solid border-transparent';

function TButton({ status = 'default', disabled, loading, children, ...restProps }) {
  return (
    <Button
      className={cs(baseBtnStyle, {
        // primary
        'bg-blue-600': status === 'primary' && !disabled,
        // warning
        'bg-orange-600': status === 'warning' && !disabled,
        // error
        'bg-red-600': status === 'error' && !disabled,
        // success
        'bg-green-600': status === 'success' && !disabled,
        // default
        'bg-gray-200': status === 'default' && !disabled,
        'text-white': status !== 'default',
        // hover
        'hover:bg-blue-500': status === 'primary' && !disabled,
        'hover:bg-orange-500': status === 'warning' && !disabled,
        'hover:bg-red-500': status === 'error' && !disabled,
        'hover:bg-green-500': status === 'success' && !disabled,
         // primary disabled
       'bg-blue-300': status === 'primary' && disabled,
        // warning disabled
        'bg-orange-300': status === 'warning' && disabled,
        // error disabled
        'bg-red-300': status === 'error' && disabled,
        // success disabled
        'bg-green-200': status === 'success' && disabled,
        // default disabled
        'bg-gray-50': status === 'default' && disabled,
        'text-gray-300': status === 'default' && disabled,
        // loading
        'cursor-not-allowed border border-transparent': disabled,
        // active
      'active:bg-blue-700': status === 'primary' && !disabled,
      'active:bg-warning-700': status === 'warning' && !disabled,
      'active:bg-red-700': status === 'error' && !disabled,
      'active:bg-green-700': status === 'success' && !disabled,
      // focus
      'focus-visible:border-blue-200': status === 'primary' && !disabled,
      'focus-visible:border-warning-200': status === 'warning' && !disabled,
      'focus-visible:border-red-200': status === 'error' && !disabled,
      'focus-visible:border-green-200': status === 'success' && !disabled,
      })}
      {...restProps}
    >
      {loading ? <IconLoadingLine className="mr-2 animate-spin" /> : null}
      {children}
    </Button>
  );
}

function App() {
  return (
    <div className="flex gap-x-4">
      <TButton status="primary">Button</TButton>
      <TButton status="success">Button</TButton>
    </div>
  );
}`;function f(){return(0,s.jsx)(a.CodePreview,{code:x})}let j=`import { Button } from '@t-headless-ui/react';

const baseBtnStyle =
    'inline-flex relative items-center justify-center outline-none pl-3.5 pr-3.5 h-8 text-sm appearance-none select-none cursor-pointer whitespace-nowrap transition-all duration-200 ease-linear box-border rounded';

function TButton({
  status = 'default',
  disabled,
  loading,
  children,
  ...restProps
}) {
  return (
    <Button
      className={cs(baseBtnStyle, {
        // primary
        'bg-blue-500': status === 'primary' && !disabled,
        // warning
        'bg-orange-500': status === 'warning' && !disabled,
        // error
        'bg-red-500': status === 'error' && !disabled,
        // success
        'bg-green-500': status === 'success' && !disabled,
        // default
        'bg-gray-100': status === 'default' && !disabled,
        'text-white': status !== 'default',
        // primary disabled
       'bg-blue-300': status === 'primary' && disabled,
        // warning disabled
        'bg-orange-300': status === 'warning' && disabled,
        // error disabled
        'bg-red-300': status === 'error' && disabled,
        // success disabled
        'bg-green-300': status === 'success' && disabled,
        // default disabled
        'bg-gray-50': status === 'default' && disabled,
        'text-gray-300': status === 'default' && disabled,
        'cursor-not-allowed border border-transparent': disabled,
      })}
      {...restProps}
    >
      {children}
    </Button>
  );
}

function App() {
  return (
      <TButton status="primary">Button</TButton>
  );
}`;function v(){return(0,s.jsx)(a.CodePreview,{code:j})}function m(e){let a={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.useMDXComponents)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.H1,{subheading:"使用 Tailwind CSS 构建篇",children:"原来精美的 Button 都是这么封装的？一看就会"}),"\n",(0,s.jsx)(n.AvatarM,{}),"\n",(0,s.jsx)(t.ImageTypography,{src:"/button/button.webp",fill:!0,alt:"button"}),"\n",(0,s.jsxs)(a.p,{children:["注：这篇是讲的使用 ",(0,s.jsx)(a.code,{children:"tailwindcss"})," 添加样式。如果你对 ",(0,s.jsx)(a.code,{children:"css/less/sass"})," 的 ",(0,s.jsx)(a.code,{children:"Button"})," 感兴趣， 请移步上一篇文章。我\n这篇完全是上一篇文章复制，只是将 ",(0,s.jsx)(a.code,{children:"css"})," 修改为 ",(0,s.jsx)(a.code,{children:"tailwindcss"}),"。"]}),"\n",(0,s.jsxs)(a.p,{children:["有同学觉得写一个 ",(0,s.jsx)(a.code,{children:"Button"})," 组件还不简单吗？直接使用 ",(0,s.jsx)(a.code,{children:"button"})," 标签 + ",(0,s.jsx)(a.code,{children:"css"})," 轻松实现："]}),"\n",(0,s.jsx)(o,{}),"\n",(0,s.jsxs)(a.p,{children:["但这个按钮问题太多了，例如没有 ",(0,s.jsx)(a.code,{children:"hover"})," 状态，没有 ",(0,s.jsx)(a.code,{children:"disabled"})," 状态。接着我们之前在 《必读指南》介绍的知名组件库对于 ",(0,s.jsx)(a.code,{children:"Button"}),"\n组件的要求，我们一一实现："]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"hover 状态"}),"\n",(0,s.jsx)(a.li,{children:"disabled 状态"}),"\n",(0,s.jsx)(a.li,{children:"loading 状态出现 loading 图标"}),"\n",(0,s.jsx)(a.li,{children:"group 按钮"}),"\n",(0,s.jsx)(a.li,{children:"单个图标的 Button"}),"\n",(0,s.jsx)(a.li,{children:"按钮尺寸"}),"\n",(0,s.jsx)(a.li,{children:"边框按钮、纯文字按钮"}),"\n",(0,s.jsx)(a.li,{children:"按钮状态，例如成功状态按钮"}),"\n"]}),"\n",(0,s.jsx)(a.h2,{children:"1、抽象 Button 状态"}),"\n",(0,s.jsxs)(a.p,{children:["对于 ",(0,s.jsx)(a.code,{children:"button"})," 我们可以将一些常用的功能单独抽离成 ",(0,s.jsx)(a.code,{children:"css"})," 变量。例如："]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["设置不同主题色：例如 ",(0,s.jsx)(a.code,{children:"primary"}),"（主色）, ",(0,s.jsx)(a.code,{children:"success"}),"（成功状态）, ",(0,s.jsx)(a.code,{children:"error"}),"（失败状态） 等等。"]}),"\n",(0,s.jsxs)(a.li,{children:["设置 ",(0,s.jsx)(a.code,{children:"disabled"})," 状态的背景色，文字颜色（不同主题色还需要分别设置不同的 ",(0,s.jsx)(a.code,{children:"disabled"})," 状态色）"]}),"\n",(0,s.jsx)(a.li,{children:"等等"}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"我在 Tailwind 中是这样做的："}),"\n",(0,s.jsx)(v,{}),"\n",(0,s.jsxs)(a.p,{children:["其实，上面所有的状态类名，例如 ",(0,s.jsx)(a.code,{children:"bg-blue-500"})," 属于 ",(0,s.jsx)(a.code,{children:"tailwindcss"})," 自己带的类名，我们可以在 ",(0,s.jsx)(a.code,{children:"tailwind.config.ts"})," 中定义，自己业务的主题类名\n类似 ",(0,s.jsx)(a.code,{children:"bg-primary-color"}),"。"]}),"\n",(0,s.jsx)(a.h2,{children:"2、增加 loading/hover 态"}),"\n",(0,s.jsxs)(a.p,{children:["我们上面定义了正常和 ",(0,s.jsx)(a.code,{children:"disabled"})," 状态的 ",(0,s.jsx)(a.code,{children:"css"})," 变量，接下来 ",(0,s.jsx)(a.code,{children:"loading"})," 状态需要的是一个 ",(0,s.jsx)(a.code,{children:"loading"})," 图标，\n图标我们直接从 ",(0,s.jsx)(a.code,{children:"@t-headless-ui/react"})," 中获取, 对 ",(0,s.jsx)(a.code,{children:"loading"})," 处理是传入参数 ",(0,s.jsx)(a.code,{children:"loading: true"})," 的参数，\n就会出现 ",(0,s.jsx)(a.code,{children:"loading"})," 图标，当然你可以自定义任意 ",(0,s.jsx)(a.code,{children:"loading"})," 图标。"]}),"\n",(0,s.jsxs)(a.p,{children:["需要注意，",(0,s.jsx)(a.code,{children:"loading"})," 状态，",(0,s.jsx)(a.code,{children:"onClick"})," 事件是不会触发。"]}),"\n",(0,s.jsxs)(a.p,{children:["接着我们增加一下 ",(0,s.jsx)(a.code,{children:"hover"})," 状态，为什么需要 ",(0,s.jsx)(a.code,{children:"hover"})," 态呢？好处就是当 ",(0,s.jsx)(a.code,{children:"hover"})," 按钮时，能给对面一个反馈，知道此时正在 ",(0,s.jsx)(a.code,{children:"hover"})," 哪个按钮，我们使用如下\ncss 实现："]}),"\n",(0,s.jsx)(i.CodeBlock,{code:`// hover
'hover:bg-color-100': !disabled`,language:"css"}),"\n",(0,s.jsx)(a.p,{children:"效果如下："}),"\n",(0,s.jsx)(u,{}),"\n",(0,s.jsx)(a.h2,{children:"3、增加 active/focus 态"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.code,{children:"active"})," 状态是指点击按钮且没有离开按钮时的状态，表明按钮正在被点击，我们在后续的 《创意案例》 章节会有\n很多有意思的案例，比如点击按钮时，按钮会有一个波纹效果，会有彩带等等。"]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.code,{children:"focus"})," 状态是指当我们使用键盘的 ",(0,s.jsx)(a.code,{children:"tab"})," 键选中按钮时的状态。主要是有些场景用户希望用 ",(0,s.jsx)(a.code,{children:"tab"})," 快速选中按钮\n例如在弹框组件中，往往会有确定和取消两个按钮，我们就可以使用 ",(0,s.jsx)(a.code,{children:"tab"})," 快速选中。所以有一个 ui 上能区分是否 ",(0,s.jsx)(a.code,{children:"focus"}),"\n对应按钮是很有必要的。"]}),"\n",(0,s.jsxs)(a.p,{children:["加这个两个状态也就是几行 ",(0,s.jsx)(a.code,{children:"css"})," 的事，如下："]}),"\n",(0,s.jsx)(i.CodeBlock,{code:`// active
'active:bg-blue-700': status === 'primary' && !disabled,
'active:bg-warning-700': status === 'warning' && !disabled,
'active:bg-red-700': status === 'error' && !disabled,
'active:bg-green-700': status === 'success' && !disabled,
// focus
'focus-visible:border-blue-100': status === 'primary' && !disabled,
'focus-visible:border-warning-100': status === 'warning' && !disabled,
'focus-visible:border-red-100': status === 'error' && !disabled,
'focus-visible:border-green-100': status === 'success' && !disabled,`,language:"css"}),"\n",(0,s.jsx)(a.p,{children:"效果如下："}),"\n",(0,s.jsx)(f,{}),"\n",(0,s.jsx)(a.h2,{children:"4、使用 css 增强 Button"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["按钮尺寸：很多库会让 ",(0,s.jsx)(a.code,{children:"Button"})," 组件支持 ",(0,s.jsx)(a.code,{children:"lg"}),"、",(0,s.jsx)(a.code,{children:"sm"})," 等尺寸，其实就是修改一下 ",(0,s.jsx)(a.code,{children:"height"})," 和 ",(0,s.jsx)(a.code,{children:"padding"})," 即可。"]}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["我们先拿按钮尺寸来举例，在这之前，我们首先要明白一个很重要的辅助函数 ",(0,s.jsx)(a.code,{children:"classNames"}),"。"]}),"\n",(0,s.jsxs)(a.p,{children:["简单来说 ",(0,s.jsx)(a.code,{children:"classNames"})," 是一个帮助你动态拼接 ",(0,s.jsx)(a.code,{children:"CSS"})," 类名的小工具，让你写样式时更简洁、更清晰。"]}),"\n",(0,s.jsx)(a.p,{children:"🎯 为什么需要它？\n你可能经常会写这样的代码："}),"\n",(0,s.jsx)(i.CodeBlock,{code:`<div className={isActive ? "btn active" : "btn"}>点击我</div>`,language:"jsx"}),"\n",(0,s.jsx)(a.p,{children:"但当你的条件变多，代码就会变得很乱，比如这样："}),"\n",(0,s.jsx)(i.CodeBlock,{code:`<div className={isActive ? (isDisabled ? 'btn active disabled' : 'btn active') : isDisabled ? 'btn disabled' : 'btn'}>点击我</div>`,language:"jsx"}),"\n",(0,s.jsx)(a.p,{children:"😵 看起来非常难读！我们可以用 classnames 简化"}),"\n",(0,s.jsx)(i.CodeBlock,{code:`import classNames from "classnames";

<div
className={classNames('btn', {
  active: isActive,
  disabled: isDisabled,
})}
>
点击我
</div>
`,language:"jsx"}),"\n",(0,s.jsx)(a.p,{children:"这会根据 isActive 和 isDisabled 的值自动拼接类名。"}),"\n",(0,s.jsx)(a.p,{children:"比如："}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:'isActive = true, isDisabled = false ➜ "btn active"'}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:'isActive = false, isDisabled = true ➜ "btn disabled"'}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:'都为 true ➜ "btn active disabled"'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.code,{children:"classNames"})," 还支持传入数组，比如："]}),"\n",(0,s.jsx)(i.CodeBlock,{code:`<div className={classNames('btn', ['active', 'disabled'])}>点击我</div>`,language:"jsx"}),"\n",(0,s.jsx)(a.p,{children:'这会拼接 "btn active disabled" 这个类名。'}),"\n",(0,s.jsxs)(a.p,{children:["好了，我们接着之前的增加按钮尺寸的功能。\n我们使用 ",(0,s.jsx)(a.code,{children:"classNames"})," 辅助函数，动态拼接 ",(0,s.jsx)(a.code,{children:"CSS"})," 类名，实现按钮尺寸的功能。还有，我自己实现了一个简单 ",(0,s.jsx)(a.code,{children:"classNames"})," 辅助函数，命令为 ",(0,s.jsx)(a.code,{children:"cs"}),"。"]}),"\n",(0,s.jsx)(p,{}),"\n",(0,s.jsxs)(a.p,{children:["下面的一些对标知名组件库的功能，大家也可以用类似的方法去实现，因为都是简单的 ",(0,s.jsx)(a.code,{children:"css"})," + ",(0,s.jsx)(a.code,{children:"classNames"})," 辅助函数的组合。我就不赘述了。"]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"单个图标的 Button：将按钮长宽设置一致即可。"}),"\n",(0,s.jsx)(a.li,{children:"边框按钮、纯文字按钮：将背景颜色去掉，改为边框颜色即可。"}),"\n",(0,s.jsxs)(a.li,{children:["按钮状态，例如成功状态按钮：设置不同主题色即可，建议在 ",(0,s.jsx)(a.code,{children:"global.css"})," 中定义，这个涉及到组件库的换肤方案，有兴趣的可以来我们的组件库交流群里找我详细了解。"]}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["其实，Button 组件使用 ",(0,s.jsx)(a.code,{children:"less"})," 我在自己之前实现的组件库 ",(0,s.jsx)(a.code,{children:"@mx-design/react"})," 中也有实现，感兴趣的同学欢迎到我的 github 和组件库群探讨。但我也深知\n这种 ",(0,s.jsx)(a.code,{children:"css"})," 和组件耦合的组件库的局限性，所以放弃了 ",(0,s.jsx)(a.code,{children:"@mx-design/react"})," 的维护，转而专注于 ",(0,s.jsx)(a.code,{children:"headless"})," 的组件库的开发。"]}),"\n",(0,s.jsx)(a.h2,{children:"5、增加实现 group 按钮"}),"\n",(0,s.jsxs)(a.p,{children:["这个也比较好实现，其实也算是简单的 ",(0,s.jsx)(a.code,{children:"css"})," 功能。我们可以在 Button 组件外层包裹一个 ",(0,s.jsx)(a.code,{children:"div"}),"，然后给 ",(0,s.jsx)(a.code,{children:"div"})," 加上一个类名，例如 ",(0,s.jsx)(a.code,{children:"button-group"}),"。"]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["然后对于 ",(0,s.jsx)(a.code,{children:"button-group"})," 第一个子元素，也就是第一个 ",(0,s.jsx)(a.code,{children:"Button"})," 组件，我们可以给它左上角和左下角加上一个 ",(0,s.jsx)(a.code,{children:"border-radius"}),"，例如 ",(0,s.jsx)(a.code,{children:"4px"}),"。"]}),"\n",(0,s.jsxs)(a.li,{children:["接着对于 ",(0,s.jsx)(a.code,{children:"button-group"})," 最后一个子元素，也就是最后一个 ",(0,s.jsx)(a.code,{children:"Button"})," 组件，我们可以给它右上角和右下角加上一个 ",(0,s.jsx)(a.code,{children:"border-radius"}),"，例如 ",(0,s.jsx)(a.code,{children:"4px"}),"。"]}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"就轻松实现 group 按钮的功能了。"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.code,{children:"css"})," 大致如下（以下代码还处理了一些边界情况，例如按钮重合部分，有的边框需要）"]}),"\n",(0,s.jsx)(i.CodeBlock,{code:`.btn-group {
  display: inline-flex;
  --btn-radius: 4px;
}
.btn-group .normal-btn:first-child {
  border-radius: var(--btn-radius) 0 0 var(--btn-radius);
}
.btn-group .btn-outline:first-child:hover {
  border-right-color: transparent;
}
.btn-group .normal-btn:not(:first-child):not(:last-child):hover {
  border-right-color: transparent;
}
.btn-group .normal-btn:last-child {
  border-radius: 0 var(--btn-radius) var(--btn-radius) 0;
}
.btn-group .normal-btn:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.btn-group .normal-btn:not(:last-child) {
  border-right: 1px solid rgba(255, 255, 255, 20%);
}`,language:"css"}),"\n",(0,s.jsx)(a.p,{children:"效果如下："}),"\n",(0,s.jsx)(g,{}),"\n",(0,s.jsx)(a.h2,{children:"6、总结"}),"\n",(0,s.jsx)(a.p,{children:"作为一名合格的前端开发，毫无疑问需要对页面常见功能和组件了解基本原理，如果要向更高级的前端工程师段位进阶，这些组件需要自己实现\n也是必须的。最后，希望文章对你有帮助，有任何疑惑，欢迎加入目前国内最好手写组件库交流群。"}),"\n",(0,s.jsxs)(a.p,{children:["完整代码可以去我的 ",(0,s.jsx)(a.code,{children:"@mx-design/react"})," 组件库中查看。也欢迎报名我的质量超超超高的 ",(0,s.jsx)(a.code,{children:"React"})," 组件库开发教程。\n我肯定你学到的知识，会把很多同段位的前端遥遥甩在身后，这对于你面试项目介绍、远程工作展示自己的项目、或者接单子时展示实力都会大有帮助。\n我也很乐意直接帮助优化简历中的项目介绍的内容。"]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.code,{children:"Vue"})," 组件库也在开发中，vue 的同伴也欢迎加群哦。"]})]})}function w(e={}){let{wrapper:t}={...(0,r.useMDXComponents)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}function y(){return(0,s.jsx)(w,{})}e.s(["HowMakeCssButton",()=>y],36063)}]);