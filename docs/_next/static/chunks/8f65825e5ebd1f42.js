(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1521,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},79537,e=>{e.v({AElig:"Æ",AMP:"&",Aacute:"Á",Acirc:"Â",Agrave:"À",Aring:"Å",Atilde:"Ã",Auml:"Ä",COPY:"©",Ccedil:"Ç",ETH:"Ð",Eacute:"É",Ecirc:"Ê",Egrave:"È",Euml:"Ë",GT:">",Iacute:"Í",Icirc:"Î",Igrave:"Ì",Iuml:"Ï",LT:"<",Ntilde:"Ñ",Oacute:"Ó",Ocirc:"Ô",Ograve:"Ò",Oslash:"Ø",Otilde:"Õ",Ouml:"Ö",QUOT:'"',REG:"®",THORN:"Þ",Uacute:"Ú",Ucirc:"Û",Ugrave:"Ù",Uuml:"Ü",Yacute:"Ý",aacute:"á",acirc:"â",acute:"´",aelig:"æ",agrave:"à",amp:"&",aring:"å",atilde:"ã",auml:"ä",brvbar:"¦",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",ecirc:"ê",egrave:"è",eth:"ð",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",iacute:"í",icirc:"î",iexcl:"¡",igrave:"ì",iquest:"¿",iuml:"ï",laquo:"«",lt:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",oacute:"ó",ocirc:"ô",ograve:"ò",ordf:"ª",ordm:"º",oslash:"ø",otilde:"õ",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',raquo:"»",reg:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",times:"×",uacute:"ú",ucirc:"û",ugrave:"ù",uml:"¨",uuml:"ü",yacute:"ý",yen:"¥",yuml:"ÿ"})},27208,e=>{e.v({0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"})},73850,e=>{"use strict";var t=e.i(45100);let i=(0,e.i(51849).createIcon)({iconProps:{useFillCurrentColor:!0},viewBox:"0 0 156 94",paths:(0,t.jsx)("path",{d:"M0,31.18h31.18v62.56H0V31.18Zm155.46,5.67v56.89h-31.18V45.36c0-7.83-6.34-14.18-14.17-14.18h-17.01c.29,1.85,.44,3.74,.44,5.67v56.89h-31.18V45.36c0-7.83-6.35-14.18-14.17-14.18H31.18V0h25.51c13.15,0,24.69,6.89,31.21,17.25,2.62,4.15,4.43,8.86,5.2,13.92V0h25.51c20.35,0,36.85,16.5,36.85,36.85Z"})});e.s(["IconMLogo",0,i])},7823,e=>{"use strict";function t(e,t){if(null==e)return{};var i={};for(var n in e)if(({}).hasOwnProperty.call(e,n)){if(-1!==t.indexOf(n))continue;i[n]=e[n]}return i}e.s(["default",()=>t])},37215,e=>{"use strict";function t(){return(t=Object.assign.bind()).apply(null,arguments)}e.s(["default",()=>t])},22480,e=>{"use strict";let t=(0,e.i(64334).createContext)({currentId:"",onLinkClick:()=>{},linkMap:{current:new Map}});e.s(["AnchorContext",0,t])},98319,e=>{"use strict";var t=e.i(64334);function i(...e){return(0,t.useCallback)(t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})},e)}e.s(["useComposedRefs",()=>i])},88036,e=>{"use strict";var t=e.i(45100),i=e.i(64334),n=e.i(22480);function r(e){let t=(0,i.useRef)(null);return t.current=e,(0,i.useCallback)((...e)=>t.current?.(...e),[])}var s=e.i(96224);function l(e,t){try{return e.querySelector(t)}catch(e){return null}}function a({scrollContainer:e,targetId:t,offset:i,isScrolling:n}){var r,a;if(!t)return;let o=l(document,`#${CSS.escape(t)}`);if(!o)return;let u=e.current,d=((void 0===(r=u)&&(r=window),r)&&(r===window?Math.ceil(window.pageYOffset):r.scrollTop)||0)+((e,t)=>{if(!e.getClientRects().length)return 0;let i=e.getBoundingClientRect();return i.width||i.height?t&&t!==window?i.top-t.getBoundingClientRect().top:(t=e.ownerDocument.documentElement,i.top-t.clientTop):i.top})(o,u)+i;(n.current=!0,(0,s.isWindow)(u))?u.scrollTo((void 0===(a=u)&&(a=window),a)&&(a===window?Math.ceil(window.pageXOffset||window.scrollX):a.scrollLeft)||0,d):u.scrollTop=d}function o({targetId:e,linkMap:t,wrapperRef:i,currentId:n,setCurrentId:r,onChange:s}){e&&i.current&&t.current.get(e)&&e!==n&&r(e).then(()=>{s?.(e,n)})}var u=e.i(98319);let d=(0,i.forwardRef)((e,d)=>{let{scrollContainer:c,offset:p=0,children:g,onChange:f,queryKey:x="anchor-id",isCloseInitAnchor:b,...y}=e,{currentId:m,onLinkClick:v,wrapperRef:h,linkMap:P}=function({propScrollContainer:e,onChange:t,offset:n,queryKey:u,isCloseInitAnchor:d}){var c;let p,g,f=(0,i.useRef)(null),x=(0,i.useRef)(null),b=(0,i.useRef)(new Map),y=(0,i.useRef)(!1),[m,v]=function(e){let[t,n]=(0,i.useState)({value:"",resolve:e=>{}});return(0,i.useEffect)(()=>{t.resolve(t.value)},[t]),[t.value,e=>new Promise(t=>{n(i=>{let n=e;return"function"==typeof e&&(n=e(i.value)),{value:n,resolve:t}})})]}(0),h=r(()=>{if(y.current)return;let e=function({linkMap:e,scrollContainer:t}){let i=t.current,n=((0,s.isWindow)(i)?document.documentElement||document.body:i).getBoundingClientRect(),r=Array.from(e.current.keys()),a=[];for(let e of r){let t=l(document,"#"+CSS.escape(e));if(t){let{top:e}=t.getBoundingClientRect(),r=(0,s.isWindow)(i)?e:e-n.top;r>=0&&a.push({element:t,top:r})}}return 0===a.length?null:a.reduce((e,t)=>e.top<=t.top?e:t).element}({linkMap:b,scrollContainer:x});e?.id&&o({targetId:e.id,linkMap:b,wrapperRef:f,currentId:m,setCurrentId:v,onChange:t})}),P=r((c=()=>{h(),y.current=!1},p=null,(g=(...e)=>{p||(p=setTimeout(()=>{p=null,c(...e)},30))}).cancel=()=>{p&&(clearTimeout(p),p=null)},g));return(0,i.useEffect)(()=>(x.current=(0,s.isString)(e)?l(document,e):e||window,x.current?.addEventListener("scroll",P),()=>{x.current?.removeEventListener("scroll",P)}),[P,e]),(0,i.useEffect)(()=>{if(!d)return void P();let e=new URLSearchParams(new URL(window.location.href).search).get(u);e&&(o({targetId:e,linkMap:b,wrapperRef:f,currentId:m,setCurrentId:v,onChange:t}),a({scrollContainer:x,targetId:e,offset:n,isScrolling:y}))},[]),{onScroll:P,currentId:m,onLinkClick:function(e,i){e.preventDefault(),o({targetId:i,linkMap:b,wrapperRef:f,currentId:m,setCurrentId:v,onChange:t}),a({scrollContainer:x,targetId:i,offset:n,isScrolling:y})},wrapperRef:f,scrollContainer:x,linkMap:b}}({propScrollContainer:c,onChange:f,offset:p,queryKey:x,isCloseInitAnchor:b});return(0,t.jsx)(n.AnchorContext.Provider,{value:{currentId:m,linkMap:P,onLinkClick:v},children:(0,t.jsx)("div",{...y,ref:(0,u.useComposedRefs)(h,d),children:g})})});e.s(["Anchor",0,d],88036)},69438,e=>{"use strict";var t=e.i(45100),i=e.i(64334),n=e.i(22480),r=e.i(98319);let s=(0,i.forwardRef)((e,s)=>{let{onLinkClick:l,linkMap:a,currentId:o}=(0,i.useContext)(n.AnchorContext),{onClick:u,targetId:d,children:c,className:p,activeClassName:g,...f}=e,x=(0,i.useRef)(null);return(0,i.useEffect)(()=>{var e;return e=x.current,d&&a.current.set(d,e),()=>{a.current.delete(d)}},[d,a]),(0,t.jsx)("div",{ref:(0,r.useComposedRefs)(s,x),...f,onClick:e=>{e.stopPropagation(),u?.(e),l?.(e,d)},"data-target-id":d,className:o===d?g:p,children:c})});e.s(["AnchorLink",0,s],69438)},93562,e=>{"use strict";var t=e.i(88036),i=e.i(69438),n=e.i(22480);let r={Root:t.Anchor,Link:i.AnchorLink,Context:n.AnchorContext};e.s(["Anchor",()=>r])},87411,e=>{"use strict";var t=e.i(45100),i=e.i(18694);e.i(82928);var n=e.i(69389),r=e.i(93612);e.i(73869);var s=e.i(84435);let l=`
function App() {
  return (
    <div className="flex gap-8 flex-wrap">
      <PixelButton status="primary">Primary</PixelButton>
      <PixelButton status="primary" type="outline">Primary</PixelButton>
    </div>
  );
}
`;function a(){return(0,t.jsx)(s.CodePreview,{code:l})}let o=`import { useState } from 'React';

function App() {
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  function onClickBtn1(e) {
      setLoading1(true);
      setTimeout(() => {
        setLoading1(false);
      }, 4000);
    }

    function onClickBtn2(e) {
      setLoading2(true);
      setTimeout(() => {
        setLoading2(false);
      }, 4000);
    }



  return (
    <div className="flex flex-wrap gap-8 flex-col">
      <div className="flex flex-wrap gap-8">
        <PixelButton loading disabled status="primary">Primary</PixelButton>
        <PixelButton loading status="warning">Warning</PixelButton>
        <PixelButton loading={loading1} onClick={onClickBtn1}>Default</PixelButton>
      </div>
      <div className="flex flex-wrap gap-8">
        <PixelButton loading disabled status="primary" type="outline">Primary</PixelButton>
        <PixelButton loading status="warning" type="outline">Warning</PixelButton>
        <PixelButton loading={loading2} onClick={onClickBtn2} type="outline">Default</PixelButton>
      </div>
    </div>
  );
}
`;function u(){return(0,t.jsx)(s.CodePreview,{code:o})}let d=`
function App() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex">
        <PixelButton status="primary">Left</PixelButton>
        <PixelButton status="primary">Middle</PixelButton>
        <PixelButton status="primary">Right</PixelButton>
      </div>
      <div className="flex">
        <PixelButton status="primary" type="outline">
          Left
        </PixelButton>
        <PixelButton status="primary" type="outline">
          Middle
        </PixelButton>
        <PixelButton status="primary" type="outline">
          Right
        </PixelButton>
      </div>
    </div>
  );
}
`;function c(){return(0,t.jsx)(s.CodePreview,{code:d})}let p=`
function App() {
  return (
    <div className="flex flex-wrap gap-8">
      <div className="flex flex-wrap gap-8">
        <PixelButton status="primary">Primary</PixelButton>
        <PixelButton status="warning">Warning</PixelButton>
        <PixelButton status="error">Error</PixelButton>
        <PixelButton status="success">Success</PixelButton>
        <PixelButton>Default</PixelButton>
      </div>
      <div className="flex flex-wrap gap-8">
        <PixelButton status="primary" type="outline">Primary</PixelButton>
        <PixelButton status="warning" type="outline">Warning</PixelButton>
        <PixelButton status="error" type="outline">Error</PixelButton>
        <PixelButton status="success" type="outline">Success</PixelButton>
        <PixelButton type="outline">Default</PixelButton>
      </div>
    </div>
  );
}
`;function g(){return(0,t.jsx)(s.CodePreview,{code:p})}let f=`function App() {
  return (
    <div className="flex gap-8 flex-wrap">
      <PixelButton status="primary" onlyIcon><IconHomeLine /></PixelButton>
      <PixelButton status="primary">Go <IconArrowRightLine className="ml-2" /></PixelButton>
    </div>
  );
}`;function x(){return(0,t.jsx)(s.CodePreview,{code:f})}let b=`
function App() {
  return (
    <div className="flex flex-wrap gap-8 flex-col">
      <div className="flex flex-wrap gap-8">
        <PixelButton disabled status="primary">Primary</PixelButton>
        <PixelButton disabled status="warning">Warning</PixelButton>
        <PixelButton disabled status="error">Error</PixelButton>
        <PixelButton disabled status="success">Success</PixelButton>
        <PixelButton disabled>Default</PixelButton>
      </div>
      <div className="flex flex-wrap gap-8">
        <PixelButton disabled status="primary" type="outline">Primary</PixelButton>
        <PixelButton disabled status="warning" type="outline">Warning</PixelButton>
        <PixelButton disabled status="error" type="outline">Error</PixelButton>
        <PixelButton disabled status="success" type="outline">Success</PixelButton>
        <PixelButton disabled type="outline">Default</PixelButton>
      </div>
    </div>
  );
}
`;function y(){return(0,t.jsx)(s.CodePreview,{code:b})}e.i(95640);var m=e.i(40864);e.i(36038);var v=e.i(54513),h=e.i(66898);let P=`
import React, { type PropsWithChildren } from 'react';

import { Button, IconLoadingLine, type ButtonProps } from '@t-headless-ui/react';
import { baseBtnStyle } from '../common-tailwind.style';
import { cs } from '@/_utils';

interface TButtonProps extends ButtonProps {
  status?: 'default' | 'primary' | 'warning' | 'success' | 'error';
  type?: 'fill' | 'outline';
  disabled?: boolean;
  loading?: boolean;
  onlyIcon?: boolean;
  small?: boolean;
  large?: boolean;
}

export function TButton({
  status = 'default',
  type = 'fill',
  disabled,
  loading,
  children,
  small,
  large,
  onlyIcon = false,
  ...restProps
}: PropsWithChildren<TButtonProps>) {
  return (
    <Button
      className={cs(baseBtnStyle, {
        // primary
        'bg-blue-600': status === 'primary' && !disabled && type === 'fill',
        'border-blue-600': status === 'primary' && !disabled && type === 'outline',
        'text-blue-600': status === 'primary' && !disabled && type === 'outline',
        // warning
        'bg-orange-600': status === 'warning' && !disabled && type === 'fill',
        'border-orange-600': status === 'warning' && !disabled && type === 'outline',
        'text-orange-600': status === 'warning' && !disabled && type === 'outline',
        // error
        'bg-red-600': status === 'error' && !disabled && type === 'fill',
        'border-red-600': status === 'error' && !disabled && type === 'outline',
        'text-red-600': status === 'error' && !disabled && type === 'outline',
        // success
        'bg-green-600': status === 'success' && !disabled && type === 'fill',
        'border-green-600': status === 'success' && !disabled && type === 'outline',
        'text-green-600': status === 'success' && !disabled && type === 'outline',
        // default
        'bg-gray-200': status === 'default' && !disabled && type === 'fill',
        'border-gray-900': status === 'default' && !disabled && type === 'outline',
        'text-white': status !== 'default' && type !== 'outline',

        // hover
        'hover:bg-blue-500': status === 'primary' && !disabled && !loading && type === 'fill',
        'hover:border-blue-400': status === 'primary' && !disabled && !loading && type === 'outline',
        'hover:text-blue-500': status === 'primary' && !disabled && !loading && type === 'outline',
        // warning
        'hover:bg-orange-500': status === 'warning' && !disabled && !loading && type === 'fill',
        'hover:border-orange-500': status === 'warning' && !disabled && !loading && type === 'outline',
        'hover:text-orange-500': status === 'warning' && !disabled && !loading && type === 'outline',
        // error
        'hover:bg-red-500': status === 'error' && !disabled && !loading && type === 'fill',
        'hover:border-red-500': status === 'error' && !disabled && !loading && type === 'outline',
        'hover:text-red-500': status === 'error' && !disabled && !loading && type === 'outline',
        // success
        'hover:bg-green-500': status === 'success' && !disabled && !loading && type === 'fill',
        'hover:border-green-500': status === 'success' && !disabled && !loading && type === 'outline',
        'hover:text-green-500': status === 'success' && !disabled && !loading && type === 'outline',
        // default
        'hover:bg-gray-100': status === 'default' && !disabled && !loading && type === 'fill',
        'hover:border-gray-500': status === 'default' && !disabled && !loading && type === 'outline',
        'hover:text-gray-500': status === 'default' && !disabled && !loading && type === 'outline',

        // primary disabled
        'bg-blue-300': status === 'primary' && disabled && type === 'fill',
        'border-blue-300': status === 'primary' && disabled && type === 'outline',
        'text-blue-300': status === 'primary' && disabled && type === 'outline',
        // warning disabled
        'bg-orange-300': status === 'warning' && disabled && type === 'fill',
        'border-orange-300': status === 'warning' && disabled && type === 'outline',
        'text-orange-300': status === 'warning' && disabled && type === 'outline',
        // error disabled
        'bg-red-300': status === 'error' && disabled && type === 'fill',
        'border-red-300': status === 'error' && disabled && type === 'outline',
        'text-red-300': status === 'error' && disabled && type === 'outline',
        // success disabled
        'bg-green-300': status === 'success' && disabled && type === 'fill',
        'border-green-300': status === 'success' && disabled && type === 'outline',
        'text-green-300': status === 'success' && disabled && type === 'outline',
        // default disabled
        'bg-gray-50': status === 'default' && disabled && type === 'fill',
        'border-gray-50': status === 'default' && disabled && type === 'outline',
        'text-gray-300': status === 'default' && disabled,
        // loading
        'cursor-not-allowed': loading || disabled,
        // active
        'active:bg-blue-700': status === 'primary' && !disabled && !loading && type === 'fill',
        'active:border-blue-700': status === 'primary' && !disabled && !loading && type === 'outline',
        'active:text-blue-700': status === 'primary' && !disabled && !loading && type === 'outline',
        'active:bg-orange-700': status === 'warning' && !disabled && !loading && type === 'fill',
        'active:border-orange-700': status === 'warning' && !disabled && !loading && type === 'outline',
        'active:text-orange-700': status === 'warning' && !disabled && !loading && type === 'outline',
        'active:bg-red-700': status === 'error' && !disabled && !loading && type === 'fill',
        'active:text-red-700': status === 'error' && !disabled && !loading && type === 'outline',
        'active:border-red-700': status === 'error' && !disabled && !loading && type === 'outline',
        'active:bg-green-700': status === 'success' && !disabled && !loading && type === 'fill',
        'active:border-green-700': status === 'success' && !disabled && !loading && type === 'outline',
        'active:text-green-700': status === 'success' && !disabled && !loading && type === 'outline',
        // default
        'active:bg-gray-300': status === 'default' && !disabled && !loading && type === 'fill',
        'active:border-gray-600': status === 'default' && !disabled && !loading && type === 'outline',
        'active:text-gray-600': status === 'default' && !disabled && !loading && type === 'outline',
        // default
        // focus
        'focus-visible:border-blue-200': status === 'primary' && !disabled,
        'focus-visible:border-orange-200': status === 'warning' && !disabled,
        'focus-visible:border-red-200': status === 'error' && !disabled,
        'focus-visible:border-green-200': status === 'success' && !disabled,
        // size
        'h-7': small,
        'h-9': large,
        // onlyIcon
        'pl-2 pr-2': onlyIcon,
      })}
      {...restProps}
    >
      {loading ? <IconLoadingLine className="mr-2 animate-spin" /> : null}
      {children}
    </Button>
  );
}
`,B=`
import { isString, isArray, isObject } from './is';
import { twMerge } from 'tailwind-merge';

type ClassNamesArg = string | string[] | { [key: string]: any } | undefined | null | boolean;

export function cs(...args: ClassNamesArg[]): string {
  const { length } = args;
  let classNames: string[] = [];
  for (let i = 0; i < length; i++) {
    const v = args[i];
    if (!v) {
      continue;
    }
    if (isString(v)) {
      classNames.push(v);
    } else if (isArray(v)) {
      classNames = classNames.concat(v);
    } else if (isObject(v)) {
      Object.keys(v).forEach((k) => {
        if (v[k]) {
          classNames.push(k);
        }
      });
    }
  }
  return twMerge([...new Set(classNames)].join(' '));
}`,w=`
export const baseBtnStyle =
  'inline-flex relative items-center justify-center outline-none pl-3.5 pr-3.5 h-8 text-sm appearance-none select-none cursor-pointer whitespace-nowrap transition-all duration-200 ease-linear box-border rounded border border-transparent';
`,j=[{content:(0,t.jsx)(v.CollapseSubMenu,{children:"Button 代码"}),items:[{content:(0,t.jsx)("div",{className:"overflow-auto max-h-125",style:{maxHeight:"440px"},children:(0,t.jsx)(m.JsPreview,{code:P,readOnly:!0})})}]},{content:(0,t.jsx)(v.CollapseSubMenu,{children:"CS 函数代码"}),items:[{content:(0,t.jsx)("div",{className:"overflow-auto max-h-125",style:{maxHeight:"440px"},children:(0,t.jsx)(m.JsPreview,{code:B,readOnly:!0})})}]},{content:(0,t.jsx)(v.CollapseSubMenu,{children:"BaseBtnStyle 代码"}),items:[{content:(0,t.jsx)("div",{className:"overflow-auto max-h-125",style:{maxHeight:"440px"},children:(0,t.jsx)(m.JsPreview,{code:w,readOnly:!0})})}]}];function C(){return(0,t.jsx)(h.CollapseMenu,{data:j,subMenuClassName:"bg-color-100 rounded-md"})}function S(e){return(0,t.jsxs)(t.Fragment,{children:["\n",(0,t.jsx)(n.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["按钮分为",(0,t.jsx)(r.Code,{children:"品牌色按钮"}),"、",(0,t.jsx)(r.Code,{children:"线形按钮"})," 等等按钮"]}),children:"基本用法"}),"\n",(0,t.jsx)(a,{}),"\n","\n",(0,t.jsx)(n.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.Code,{children:"Button"}),"可以嵌入图标，在只设置图标而没有 children 时，按钮的高宽相等"]}),children:"图标按钮"}),"\n",(0,t.jsx)(x,{}),"\n","\n",(0,t.jsx)(n.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["通过设置",(0,t.jsx)(r.Code,{children:"Loading"}),"可以让一个按钮处于加载中状态。处于加载中状态的按钮不会触发点击事件"]}),children:"按钮状态"}),"\n",(0,t.jsx)(g,{}),"\n","\n",(0,t.jsx)(n.H3Sub,{sub:(0,t.jsx)(t.Fragment,{children:"按钮的禁用状态"}),children:"禁用按钮"}),"\n",(0,t.jsx)(y,{}),"\n","\n",(0,t.jsx)(n.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["通过设置",(0,t.jsx)(r.Code,{children:"Loading"}),"可以让一个按钮处于加载中状态。处于加载中状态的按钮不会触发点击事件"]}),children:"Loading 按钮"}),"\n",(0,t.jsx)(u,{}),"\n","\n",(0,t.jsx)(n.H3Sub,{sub:(0,t.jsx)(t.Fragment,{children:"可用在同级多项操作，以按钮组合方式出现"}),children:"组合按钮"}),"\n",(0,t.jsx)(c,{}),"\n","\n",(0,t.jsx)(n.H3Sub,{children:"组件源码"}),"\n",(0,t.jsx)(C,{})]})}function N(e={}){let{wrapper:n}={...(0,i.useMDXComponents)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(S,{...e})}):S(e)}function A(){return(0,t.jsx)(N,{})}e.s(["HowMakeCssButton",()=>A],87411)}]);