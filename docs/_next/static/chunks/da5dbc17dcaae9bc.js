(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1521,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},79537,e=>{e.v({AElig:"Æ",AMP:"&",Aacute:"Á",Acirc:"Â",Agrave:"À",Aring:"Å",Atilde:"Ã",Auml:"Ä",COPY:"©",Ccedil:"Ç",ETH:"Ð",Eacute:"É",Ecirc:"Ê",Egrave:"È",Euml:"Ë",GT:">",Iacute:"Í",Icirc:"Î",Igrave:"Ì",Iuml:"Ï",LT:"<",Ntilde:"Ñ",Oacute:"Ó",Ocirc:"Ô",Ograve:"Ò",Oslash:"Ø",Otilde:"Õ",Ouml:"Ö",QUOT:'"',REG:"®",THORN:"Þ",Uacute:"Ú",Ucirc:"Û",Ugrave:"Ù",Uuml:"Ü",Yacute:"Ý",aacute:"á",acirc:"â",acute:"´",aelig:"æ",agrave:"à",amp:"&",aring:"å",atilde:"ã",auml:"ä",brvbar:"¦",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",ecirc:"ê",egrave:"è",eth:"ð",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",iacute:"í",icirc:"î",iexcl:"¡",igrave:"ì",iquest:"¿",iuml:"ï",laquo:"«",lt:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",oacute:"ó",ocirc:"ô",ograve:"ò",ordf:"ª",ordm:"º",oslash:"ø",otilde:"õ",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',raquo:"»",reg:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",times:"×",uacute:"ú",ucirc:"û",ugrave:"ù",uml:"¨",uuml:"ü",yacute:"ý",yen:"¥",yuml:"ÿ"})},27208,e=>{e.v({0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"})},73850,e=>{"use strict";var t=e.i(45100);let n=(0,e.i(51849).createIcon)({iconProps:{useFillCurrentColor:!0},viewBox:"0 0 156 94",paths:(0,t.jsx)("path",{d:"M0,31.18h31.18v62.56H0V31.18Zm155.46,5.67v56.89h-31.18V45.36c0-7.83-6.34-14.18-14.17-14.18h-17.01c.29,1.85,.44,3.74,.44,5.67v56.89h-31.18V45.36c0-7.83-6.35-14.18-14.17-14.18H31.18V0h25.51c13.15,0,24.69,6.89,31.21,17.25,2.62,4.15,4.43,8.86,5.2,13.92V0h25.51c20.35,0,36.85,16.5,36.85,36.85Z"})});e.s(["IconMLogo",0,n])},7823,e=>{"use strict";function t(e,t){if(null==e)return{};var n={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n}e.s(["default",()=>t])},37215,e=>{"use strict";function t(){return(t=Object.assign.bind()).apply(null,arguments)}e.s(["default",()=>t])},22480,e=>{"use strict";let t=(0,e.i(64334).createContext)({currentId:"",onLinkClick:()=>{},linkMap:{current:new Map}});e.s(["AnchorContext",0,t])},98319,e=>{"use strict";var t=e.i(64334);function n(...e){return(0,t.useCallback)(t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})},e)}e.s(["useComposedRefs",()=>n])},88036,e=>{"use strict";var t=e.i(45100),n=e.i(64334),r=e.i(22480);function a(e){let t=(0,n.useRef)(null);return t.current=e,(0,n.useCallback)((...e)=>t.current?.(...e),[])}var i=e.i(96224);function s(e,t){try{return e.querySelector(t)}catch(e){return null}}function o({scrollContainer:e,targetId:t,offset:n,isScrolling:r}){var a,o;if(!t)return;let l=s(document,`#${CSS.escape(t)}`);if(!l)return;let u=e.current,d=((void 0===(a=u)&&(a=window),a)&&(a===window?Math.ceil(window.pageYOffset):a.scrollTop)||0)+((e,t)=>{if(!e.getClientRects().length)return 0;let n=e.getBoundingClientRect();return n.width||n.height?t&&t!==window?n.top-t.getBoundingClientRect().top:(t=e.ownerDocument.documentElement,n.top-t.clientTop):n.top})(l,u)+n;(r.current=!0,(0,i.isWindow)(u))?u.scrollTo((void 0===(o=u)&&(o=window),o)&&(o===window?Math.ceil(window.pageXOffset||window.scrollX):o.scrollLeft)||0,d):u.scrollTop=d}function l({targetId:e,linkMap:t,wrapperRef:n,currentId:r,setCurrentId:a,onChange:i}){e&&n.current&&t.current.get(e)&&e!==r&&a(e).then(()=>{i?.(e,r)})}var u=e.i(98319);let d=(0,n.forwardRef)((e,d)=>{let{scrollContainer:c,offset:p=0,children:g,onChange:b,queryKey:f="anchor-id",isCloseInitAnchor:y,...h}=e,{currentId:v,onLinkClick:m,wrapperRef:x,linkMap:B}=function({propScrollContainer:e,onChange:t,offset:r,queryKey:u,isCloseInitAnchor:d}){var c;let p,g,b=(0,n.useRef)(null),f=(0,n.useRef)(null),y=(0,n.useRef)(new Map),h=(0,n.useRef)(!1),[v,m]=function(e){let[t,r]=(0,n.useState)({value:"",resolve:e=>{}});return(0,n.useEffect)(()=>{t.resolve(t.value)},[t]),[t.value,e=>new Promise(t=>{r(n=>{let r=e;return"function"==typeof e&&(r=e(n.value)),{value:r,resolve:t}})})]}(0),x=a(()=>{if(h.current)return;let e=function({linkMap:e,scrollContainer:t}){let n=t.current,r=((0,i.isWindow)(n)?document.documentElement||document.body:n).getBoundingClientRect(),a=Array.from(e.current.keys()),o=[];for(let e of a){let t=s(document,"#"+CSS.escape(e));if(t){let{top:e}=t.getBoundingClientRect(),a=(0,i.isWindow)(n)?e:e-r.top;a>=0&&o.push({element:t,top:a})}}return 0===o.length?null:o.reduce((e,t)=>e.top<=t.top?e:t).element}({linkMap:y,scrollContainer:f});e?.id&&l({targetId:e.id,linkMap:y,wrapperRef:b,currentId:v,setCurrentId:m,onChange:t})}),B=a((c=()=>{x(),h.current=!1},p=null,(g=(...e)=>{p||(p=setTimeout(()=>{p=null,c(...e)},30))}).cancel=()=>{p&&(clearTimeout(p),p=null)},g));return(0,n.useEffect)(()=>(f.current=(0,i.isString)(e)?s(document,e):e||window,f.current?.addEventListener("scroll",B),()=>{f.current?.removeEventListener("scroll",B)}),[B,e]),(0,n.useEffect)(()=>{if(!d)return void B();let e=new URLSearchParams(new URL(window.location.href).search).get(u);e&&(l({targetId:e,linkMap:y,wrapperRef:b,currentId:v,setCurrentId:m,onChange:t}),o({scrollContainer:f,targetId:e,offset:r,isScrolling:h}))},[]),{onScroll:B,currentId:v,onLinkClick:function(e,n){e.preventDefault(),l({targetId:n,linkMap:y,wrapperRef:b,currentId:v,setCurrentId:m,onChange:t}),o({scrollContainer:f,targetId:n,offset:r,isScrolling:h})},wrapperRef:b,scrollContainer:f,linkMap:y}}({propScrollContainer:c,onChange:b,offset:p,queryKey:f,isCloseInitAnchor:y});return(0,t.jsx)(r.AnchorContext.Provider,{value:{currentId:v,linkMap:B,onLinkClick:m},children:(0,t.jsx)("div",{...h,ref:(0,u.useComposedRefs)(x,d),children:g})})});e.s(["Anchor",0,d],88036)},69438,e=>{"use strict";var t=e.i(45100),n=e.i(64334),r=e.i(22480),a=e.i(98319);let i=(0,n.forwardRef)((e,i)=>{let{onLinkClick:s,linkMap:o,currentId:l}=(0,n.useContext)(r.AnchorContext),{onClick:u,targetId:d,children:c,className:p,activeClassName:g,...b}=e,f=(0,n.useRef)(null);return(0,n.useEffect)(()=>{var e;return e=f.current,d&&o.current.set(d,e),()=>{o.current.delete(d)}},[d,o]),(0,t.jsx)("div",{ref:(0,a.useComposedRefs)(i,f),...b,onClick:e=>{e.stopPropagation(),u?.(e),s?.(e,d)},"data-target-id":d,className:l===d?g:p,children:c})});e.s(["AnchorLink",0,i],69438)},93562,e=>{"use strict";var t=e.i(88036),n=e.i(69438),r=e.i(22480);let a={Root:t.Anchor,Link:n.AnchorLink,Context:r.AnchorContext};e.s(["Anchor",()=>a])},59772,e=>{"use strict";var t=e.i(64334);let n=(0,t.createContext)({checked:!1});var r=e.i(45100),a=e.i(2157);let i=(0,t.createContext)({type:"radio"}),s={RadioContext:n,Root:function(e){let s=(0,t.useContext)(i),o=function({props:e,context:t}){let n={...e};return t.group&&(n.checked=t.value===e.value,n.disabled=!!(t.disabled||e.disabled),n.readonly=!!(t.readonly||e.readonly)),n}({props:e,context:s}),{disabled:l,readonly:u,children:d,value:c,checked:p,onChange:g,...b}=o,f=(0,t.useRef)(null),[y,h]=(0,a.useMergeValue)(!1,{value:p,defaultValue:o.defaultChecked});return(0,r.jsx)(n.Provider,{value:{checked:y,disabled:l,readonly:u},children:(0,r.jsxs)("label",{...b,onClick:function(e){l||u?e.preventDefault():b?.onClick?.(e)},"aria-disabled":!!l,"aria-readonly":!!u,"aria-checked":!!y,children:[(0,r.jsx)("input",{ref:f,disabled:!!l,value:c,type:"radio",checked:!!y,onChange:t=>{t.persist(),t.stopPropagation(),l||u||(s.group?s?.onChangeValue?.(c,t):"checked"in e||y||h(!0),y||g?.(!0,t))},onClick:e=>{e.stopPropagation()},"aria-readonly":!!u}),d]})})},Group:function(e){let{name:t,children:n,type:s="radio",disabled:o,readonly:l,onChange:u,...d}=e,[c,p]=(0,a.useMergeValue)(void 0,{defaultValue:e.defaultValue,value:e.value});return(0,r.jsx)("div",{role:"radiogroup",...d,children:(0,r.jsx)(i.Provider,{value:{onChangeValue:(t,n)=>{t!==c&&("value"in e||p(t),u?.(t,n))},type:s,value:c,disabled:o,readonly:l,group:!0,name:t},children:n})})}};e.s(["Radio",()=>s],59772)},46030,e=>{"use strict";var t=e.i(64334);let n=(0,t.createContext)({checked:!1});var r=e.i(45100),a=e.i(2157);let i=(0,t.createContext)({isCheckboxGroup:!1,checkboxGroupValue:[],onGroupChange:()=>{},registerValue:()=>{},unRegisterValue:()=>{}}),s={CheckboxContext:n,Root:function(e){let s=(0,t.useContext)(i),{onGroupChange:o}=s,l=function({props:e,context:t}){let n={...e};return t.isCheckboxGroup&&(n.checked=-1!==t.checkboxGroupValue.indexOf(e.value),n.disabled=!!(t.disabled||e.disabled),n.readonly=!!(t.readonly||e.readonly)),n}({props:e,context:s}),{disabled:u,children:d,readonly:c,value:p,checked:g,onChange:b,indeterminate:f,...y}=l,h=(0,t.useRef)(null),[v,m]=(0,a.useMergeValue)(!1,{value:g,defaultValue:l.defaultChecked});return(0,t.useEffect)(()=>(s.registerValue(p),()=>{s.unRegisterValue(p)}),[p]),(0,r.jsx)(n.Provider,{value:{checked:v,disabled:u,indeterminate:f,readonly:c},children:(0,r.jsxs)("label",{...y,onClick:function(e){u||c?e.preventDefault():y?.onClick?.(e)},"aria-disabled":!!u,"aria-readonly":!!c,"aria-checked":!!v,children:[(0,r.jsx)("input",{value:p,disabled:!!u,ref:h,checked:!!v,onChange:function(e){e.persist(),e.stopPropagation(),u||c||(s.isCheckboxGroup?o?.(l.value,e.target.checked,e):m(e.target.checked),b?.(e.target.checked,e))},onClick:e=>e.stopPropagation(),type:"checkbox","aria-readonly":!!c}),d]})})},IconCheck:function({className:e}){return(0,r.jsx)("svg",{className:e,"aria-hidden":!0,focusable:!1,viewBox:"0 0 1024 1024",width:"200",height:"200",fill:"currentColor",children:(0,r.jsx)("path",{d:"M877.44815445 206.10060629a64.72691371 64.72691371 0 0 0-95.14856334 4.01306852L380.73381888 685.46812814 235.22771741 533.48933518a64.72691371 64.72691371 0 0 0-92.43003222-1.03563036l-45.82665557 45.82665443a64.72691371 64.72691371 0 0 0-0.90617629 90.61767965l239.61903446 250.10479331a64.72691371 64.72691371 0 0 0 71.19960405 15.14609778 64.33855261 64.33855261 0 0 0 35.08198741-21.23042702l36.24707186-42.71976334 40.5190474-40.77795556-3.36579926-3.49525333 411.40426297-486.74638962a64.72691371 64.72691371 0 0 0-3.88361443-87.64024149l-45.3088404-45.43829334z","p-id":"840"})})},Group:function(e){let{disabled:n,children:s,readonly:o,onChange:l,...u}=e,[d,c]=(0,a.useMergeValue)([],{defaultValue:e.defaultValue,value:e.value}),[p,g]=(0,t.useState)([]);return(0,r.jsx)("div",{role:"checkboxgroup",...u,children:(0,r.jsx)(i.Provider,{value:{isCheckboxGroup:!0,checkboxGroupValue:d,onGroupChange:function(e,t,n){if(!Array.isArray(d))return void console.error("Checkbox.Group value must be an array");let r=d?.slice()||[];t?r.push(e):r.splice(d.indexOf(e),1),c(r),l?.(r.filter(e=>p.indexOf(e)>-1),n)},disabled:n,readonly:o,registerValue:e=>{g(t=>Array.from(new Set([...t,e])))},unRegisterValue:e=>{g(t=>t.filter(t=>t!==e))}},children:s})})}};e.s(["Checkbox",()=>s],46030)},80850,e=>{"use strict";var t=e.i(45100),n=e.i(18694);e.i(82928);var r=e.i(69389),a=e.i(93612);e.i(73869);var i=e.i(84435);let s=`
function App() {
  return (
    <div className="flex gap-4 flex-wrap">
      <TButton status="primary">Brand</TButton>
      <TButton status="primary" type="outline">Outline</TButton>
    </div>
  );
}
`;function o(){return(0,t.jsx)(i.CodePreview,{code:s})}let l=`import { useState } from 'React';

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
    <div className="flex flex-wrap gap-4 max-w-[360px]">
      <TButton loading disabled status="primary">Primary</TButton>
      <TButton loading status="warning">Warning</TButton>
      <TButton loading={loading1} onClick={onClickBtn1}>Default</TButton>
      <TButton loading disabled status="primary" type="outline">Primary</TButton>
      <TButton loading status="warning" type="outline">Warning</TButton>
      <TButton loading={loading2} onClick={onClickBtn2} type="outline">Default</TButton>
    </div>
  );
}
`;function u(){return(0,t.jsx)(i.CodePreview,{code:l})}let d=`
function App() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex [&>button:first-child]:rounded-tr-none [&>button:first-child]:rounded-br-none [&>button:last-child]:rounded-tl-none [&>button:last-child]:rounded-bl-none [&>button:not(:last-child):not(:first-child)]:rounded-none [&>button:not(:last-child)]:border-r-white/20 [&>button:not(:last-child)]:border-r">
        <TButton status="primary">Left</TButton>
        <TButton status="primary">Middle</TButton>
        <TButton status="primary">Right</TButton>
      </div>
      <div className="flex [&>button:first-child]:rounded-tr-none [&>button:first-child]:rounded-br-none [&>button:last-child]:rounded-tl-none [&>button:last-child]:rounded-bl-none [&>button:not(:last-child):not(:first-child)]:rounded-none [&>button:not(:last-child)]:border-r-0">
        <TButton status="primary" type="outline">
          Left
        </TButton>
        <TButton status="primary" type="outline">
          Middle
        </TButton>
        <TButton status="primary" type="outline">
          Right
        </TButton>
      </div>
    </div>
  );
}
`;function c(){return(0,t.jsx)(i.CodePreview,{code:d})}let p=`import { useState } from 'React';

function App() {
  return (
    <div className="flex flex-wrap gap-4 max-w-[360px]">
      <TButton status="primary" small>Small</TButton>
      <TButton status="primary">Default</TButton>
      <TButton status="primary" large>Large</TButton>
    </div>
  );
}
`;function g(){return(0,t.jsx)(i.CodePreview,{code:p})}let b=`
function App() {
  return (
    <div className="flex flex-wrap gap-4 max-w-[440px]">
      <TButton status="primary">Primary</TButton>
      <TButton status="warning">Warning</TButton>
      <TButton status="error">Error</TButton>
      <TButton status="success">Success</TButton>
      <TButton>Default</TButton>
      <TButton status="primary" type="outline">Primary</TButton>
      <TButton status="warning" type="outline">Warning</TButton>
      <TButton status="error" type="outline">Error</TButton>
      <TButton status="success" type="outline">Success</TButton>
      <TButton type="outline">Default</TButton>
    </div>
  );
}
`;function f(){return(0,t.jsx)(i.CodePreview,{code:b})}let y=`function App() {
  return (
    <div className="flex gap-4 flex-wrap">
      <TButton status="primary" onlyIcon><IconHomeLine /></TButton>
      <TButton status="primary">Go <IconArrowRightLine className="ml-2" /></TButton>
    </div>
  );
}`;function h(){return(0,t.jsx)(i.CodePreview,{code:y})}let v=`
function App() {
  return (
    <div className="flex flex-wrap gap-4 max-w-[440px]">
      <TButton disabled status="primary">Primary</TButton>
      <TButton disabled status="warning">Warning</TButton>
      <TButton disabled status="error">Error</TButton>
      <TButton disabled status="success">Success</TButton>
      <TButton disabled>Default</TButton>
      <TButton disabled status="primary" type="outline">Primary</TButton>
      <TButton disabled status="warning" type="outline">Warning</TButton>
      <TButton disabled status="error" type="outline">Error</TButton>
      <TButton disabled status="success" type="outline">Success</TButton>
      <TButton disabled type="outline">Default</TButton>
    </div>
  );
}
`;function m(){return(0,t.jsx)(i.CodePreview,{code:v})}e.i(95640);var x=e.i(40864);e.i(36038);var B=e.i(54513),T=e.i(66898);let w=`
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
`,C=`
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
}`,j=`
export const baseBtnStyle =
  'inline-flex relative items-center justify-center outline-none pl-3.5 pr-3.5 h-8 text-sm appearance-none select-none cursor-pointer whitespace-nowrap transition-all duration-200 ease-linear box-border rounded border border-transparent';
`,k=[{content:(0,t.jsx)(B.CollapseSubMenu,{children:"Button 代码"}),items:[{content:(0,t.jsx)("div",{className:"overflow-auto max-h-125",style:{maxHeight:"440px"},children:(0,t.jsx)(x.JsPreview,{code:w,readOnly:!0})})}]},{content:(0,t.jsx)(B.CollapseSubMenu,{children:"CS 函数代码"}),items:[{content:(0,t.jsx)("div",{className:"overflow-auto max-h-125",style:{maxHeight:"440px"},children:(0,t.jsx)(x.JsPreview,{code:C,readOnly:!0})})}]},{content:(0,t.jsx)(B.CollapseSubMenu,{children:"BaseBtnStyle 代码"}),items:[{content:(0,t.jsx)("div",{className:"overflow-auto max-h-125",style:{maxHeight:"440px"},children:(0,t.jsx)(x.JsPreview,{code:j,readOnly:!0})})}]}];function P(){return(0,t.jsx)(T.CollapseMenu,{data:k,subMenuClassName:"bg-color-100 rounded-md"})}function S(e){return(0,t.jsxs)(t.Fragment,{children:["\n",(0,t.jsx)(r.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["按钮分为",(0,t.jsx)(a.Code,{children:"品牌色按钮"}),"、",(0,t.jsx)(a.Code,{children:"线形按钮"})," 等等按钮"]}),children:"基本用法"}),"\n",(0,t.jsx)(o,{}),"\n","\n",(0,t.jsx)(r.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.Code,{children:"Button"}),"可以嵌入图标，在只设置图标而没有 children 时，按钮的高宽相等"]}),children:"图标按钮"}),"\n",(0,t.jsx)(h,{}),"\n","\n",(0,t.jsx)(r.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["通过设置",(0,t.jsx)(a.Code,{children:"Loading"}),"可以让一个按钮处于加载中状态。处于加载中状态的按钮不会触发点击事件"]}),children:"按钮状态"}),"\n",(0,t.jsx)(f,{}),"\n","\n",(0,t.jsx)(r.H3Sub,{sub:(0,t.jsx)(t.Fragment,{children:"按钮的禁用状态"}),children:"禁用按钮"}),"\n",(0,t.jsx)(m,{}),"\n","\n",(0,t.jsx)(r.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["通过设置",(0,t.jsx)(a.Code,{children:"Loading"}),"可以让一个按钮处于加载中状态。处于加载中状态的按钮不会触发点击事件"]}),children:"Loading 按钮"}),"\n",(0,t.jsx)(u,{}),"\n","\n",(0,t.jsx)(r.H3Sub,{sub:(0,t.jsx)(t.Fragment,{children:"可用在同级多项操作，以按钮组合方式出现"}),children:"不同按钮尺寸"}),"\n",(0,t.jsx)(g,{}),"\n","\n",(0,t.jsx)(r.H3Sub,{sub:(0,t.jsx)(t.Fragment,{children:"可用在同级多项操作，以按钮组合方式出现"}),children:"组合按钮"}),"\n",(0,t.jsx)(c,{}),"\n","\n",(0,t.jsx)(r.H3Sub,{children:"组件源码"}),"\n",(0,t.jsx)(P,{})]})}function R(e={}){let{wrapper:r}={...(0,n.useMDXComponents)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(S,{...e})}):S(e)}function A(){return(0,t.jsx)(R,{})}e.s(["HowMakeCssButton",()=>A],80850)}]);