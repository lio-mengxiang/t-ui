(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1521,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},79537,e=>{e.v({AElig:"Æ",AMP:"&",Aacute:"Á",Acirc:"Â",Agrave:"À",Aring:"Å",Atilde:"Ã",Auml:"Ä",COPY:"©",Ccedil:"Ç",ETH:"Ð",Eacute:"É",Ecirc:"Ê",Egrave:"È",Euml:"Ë",GT:">",Iacute:"Í",Icirc:"Î",Igrave:"Ì",Iuml:"Ï",LT:"<",Ntilde:"Ñ",Oacute:"Ó",Ocirc:"Ô",Ograve:"Ò",Oslash:"Ø",Otilde:"Õ",Ouml:"Ö",QUOT:'"',REG:"®",THORN:"Þ",Uacute:"Ú",Ucirc:"Û",Ugrave:"Ù",Uuml:"Ü",Yacute:"Ý",aacute:"á",acirc:"â",acute:"´",aelig:"æ",agrave:"à",amp:"&",aring:"å",atilde:"ã",auml:"ä",brvbar:"¦",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",ecirc:"ê",egrave:"è",eth:"ð",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",iacute:"í",icirc:"î",iexcl:"¡",igrave:"ì",iquest:"¿",iuml:"ï",laquo:"«",lt:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",oacute:"ó",ocirc:"ô",ograve:"ò",ordf:"ª",ordm:"º",oslash:"ø",otilde:"õ",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',raquo:"»",reg:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",times:"×",uacute:"ú",ucirc:"û",ugrave:"ù",uml:"¨",uuml:"ü",yacute:"ý",yen:"¥",yuml:"ÿ"})},27208,e=>{e.v({0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"})},73850,e=>{"use strict";var t=e.i(45100);let r=(0,e.i(51849).createIcon)({iconProps:{useFillCurrentColor:!0},viewBox:"0 0 156 94",paths:(0,t.jsx)("path",{d:"M0,31.18h31.18v62.56H0V31.18Zm155.46,5.67v56.89h-31.18V45.36c0-7.83-6.34-14.18-14.17-14.18h-17.01c.29,1.85,.44,3.74,.44,5.67v56.89h-31.18V45.36c0-7.83-6.35-14.18-14.17-14.18H31.18V0h25.51c13.15,0,24.69,6.89,31.21,17.25,2.62,4.15,4.43,8.86,5.2,13.92V0h25.51c20.35,0,36.85,16.5,36.85,36.85Z"})});e.s(["IconMLogo",0,r])},7823,e=>{"use strict";function t(e,t){if(null==e)return{};var r={};for(var i in e)if(({}).hasOwnProperty.call(e,i)){if(-1!==t.indexOf(i))continue;r[i]=e[i]}return r}e.s(["default",()=>t])},37215,e=>{"use strict";function t(){return(t=Object.assign.bind()).apply(null,arguments)}e.s(["default",()=>t])},22480,e=>{"use strict";let t=(0,e.i(64334).createContext)({currentId:"",onLinkClick:()=>{},linkMap:{current:new Map}});e.s(["AnchorContext",0,t])},98319,e=>{"use strict";var t=e.i(64334);function r(...e){return(0,t.useCallback)(t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})},e)}e.s(["useComposedRefs",()=>r])},88036,e=>{"use strict";var t=e.i(45100),r=e.i(64334),i=e.i(22480);function n(e){let t=(0,r.useRef)(null);return t.current=e,(0,r.useCallback)((...e)=>t.current?.(...e),[])}var a=e.i(96224);function l(e,t){try{return e.querySelector(t)}catch(e){return null}}function s({scrollContainer:e,targetId:t,offset:r,isScrolling:i}){var n,s;if(!t)return;let o=l(document,`#${CSS.escape(t)}`);if(!o)return;let u=e.current,d=((void 0===(n=u)&&(n=window),n)&&(n===window?Math.ceil(window.pageYOffset):n.scrollTop)||0)+((e,t)=>{if(!e.getClientRects().length)return 0;let r=e.getBoundingClientRect();return r.width||r.height?t&&t!==window?r.top-t.getBoundingClientRect().top:(t=e.ownerDocument.documentElement,r.top-t.clientTop):r.top})(o,u)+r;(i.current=!0,(0,a.isWindow)(u))?u.scrollTo((void 0===(s=u)&&(s=window),s)&&(s===window?Math.ceil(window.pageXOffset||window.scrollX):s.scrollLeft)||0,d):u.scrollTop=d}function o({targetId:e,linkMap:t,wrapperRef:r,currentId:i,setCurrentId:n,onChange:a}){e&&r.current&&t.current.get(e)&&e!==i&&n(e).then(()=>{a?.(e,i)})}var u=e.i(98319);let d=(0,r.forwardRef)((e,d)=>{let{scrollContainer:c,offset:p=0,children:g,onChange:f,queryKey:x="anchor-id",isCloseInitAnchor:b,...y}=e,{currentId:v,onLinkClick:h,wrapperRef:m,linkMap:P}=function({propScrollContainer:e,onChange:t,offset:i,queryKey:u,isCloseInitAnchor:d}){var c;let p,g,f=(0,r.useRef)(null),x=(0,r.useRef)(null),b=(0,r.useRef)(new Map),y=(0,r.useRef)(!1),[v,h]=function(e){let[t,i]=(0,r.useState)({value:"",resolve:e=>{}});return(0,r.useEffect)(()=>{t.resolve(t.value)},[t]),[t.value,e=>new Promise(t=>{i(r=>{let i=e;return"function"==typeof e&&(i=e(r.value)),{value:i,resolve:t}})})]}(0),m=n(()=>{if(y.current)return;let e=function({linkMap:e,scrollContainer:t}){let r=t.current,i=((0,a.isWindow)(r)?document.documentElement||document.body:r).getBoundingClientRect(),n=Array.from(e.current.keys()),s=[];for(let e of n){let t=l(document,"#"+CSS.escape(e));if(t){let{top:e}=t.getBoundingClientRect(),n=(0,a.isWindow)(r)?e:e-i.top;n>=0&&s.push({element:t,top:n})}}return 0===s.length?null:s.reduce((e,t)=>e.top<=t.top?e:t).element}({linkMap:b,scrollContainer:x});e?.id&&o({targetId:e.id,linkMap:b,wrapperRef:f,currentId:v,setCurrentId:h,onChange:t})}),P=n((c=()=>{m(),y.current=!1},p=null,(g=(...e)=>{p||(p=setTimeout(()=>{p=null,c(...e)},30))}).cancel=()=>{p&&(clearTimeout(p),p=null)},g));return(0,r.useEffect)(()=>(x.current=(0,a.isString)(e)?l(document,e):e||window,x.current?.addEventListener("scroll",P),()=>{x.current?.removeEventListener("scroll",P)}),[P,e]),(0,r.useEffect)(()=>{if(!d)return void P();let e=new URLSearchParams(new URL(window.location.href).search).get(u);e&&(o({targetId:e,linkMap:b,wrapperRef:f,currentId:v,setCurrentId:h,onChange:t}),s({scrollContainer:x,targetId:e,offset:i,isScrolling:y}))},[]),{onScroll:P,currentId:v,onLinkClick:function(e,r){e.preventDefault(),o({targetId:r,linkMap:b,wrapperRef:f,currentId:v,setCurrentId:h,onChange:t}),s({scrollContainer:x,targetId:r,offset:i,isScrolling:y})},wrapperRef:f,scrollContainer:x,linkMap:b}}({propScrollContainer:c,onChange:f,offset:p,queryKey:x,isCloseInitAnchor:b});return(0,t.jsx)(i.AnchorContext.Provider,{value:{currentId:v,linkMap:P,onLinkClick:h},children:(0,t.jsx)("div",{...y,ref:(0,u.useComposedRefs)(m,d),children:g})})});e.s(["Anchor",0,d],88036)},69438,e=>{"use strict";var t=e.i(45100),r=e.i(64334),i=e.i(22480),n=e.i(98319);let a=(0,r.forwardRef)((e,a)=>{let{onLinkClick:l,linkMap:s,currentId:o}=(0,r.useContext)(i.AnchorContext),{onClick:u,targetId:d,children:c,className:p,activeClassName:g,...f}=e,x=(0,r.useRef)(null);return(0,r.useEffect)(()=>{var e;return e=x.current,d&&s.current.set(d,e),()=>{s.current.delete(d)}},[d,s]),(0,t.jsx)("div",{ref:(0,n.useComposedRefs)(a,x),...f,onClick:e=>{e.stopPropagation(),u?.(e),l?.(e,d)},"data-target-id":d,className:o===d?g:p,children:c})});e.s(["AnchorLink",0,a],69438)},93562,e=>{"use strict";var t=e.i(88036),r=e.i(69438),i=e.i(22480);let n={Root:t.Anchor,Link:r.AnchorLink,Context:i.AnchorContext};e.s(["Anchor",()=>n])},59772,e=>{"use strict";var t=e.i(64334);let r=(0,t.createContext)({checked:!1});var i=e.i(45100),n=e.i(2157);let a=(0,t.createContext)({type:"radio"}),l={RadioContext:r,Root:function(e){let l=(0,t.useContext)(a),s=function({props:e,context:t}){let r={...e};return t.group&&(r.checked=t.value===e.value,r.disabled=!!(t.disabled||e.disabled),r.readonly=!!(t.readonly||e.readonly)),r}({props:e,context:l}),{disabled:o,readonly:u,children:d,value:c,checked:p,onChange:g,...f}=s,x=(0,t.useRef)(null),[b,y]=(0,n.useMergeValue)(!1,{value:p,defaultValue:s.defaultChecked});return(0,i.jsx)(r.Provider,{value:{checked:b,disabled:o,readonly:u},children:(0,i.jsxs)("label",{...f,onClick:function(e){o||u?e.preventDefault():f?.onClick?.(e)},"aria-disabled":!!o,"aria-readonly":!!u,"aria-checked":!!b,children:[(0,i.jsx)("input",{ref:x,disabled:!!o,value:c,type:"radio",checked:!!b,onChange:t=>{t.persist(),t.stopPropagation(),o||u||(l.group?l?.onChangeValue?.(c,t):"checked"in e||b||y(!0),b||g?.(!0,t))},onClick:e=>{e.stopPropagation()},"aria-readonly":!!u}),d]})})},Group:function(e){let{name:t,children:r,type:l="radio",disabled:s,readonly:o,onChange:u,...d}=e,[c,p]=(0,n.useMergeValue)(void 0,{defaultValue:e.defaultValue,value:e.value});return(0,i.jsx)("div",{role:"radiogroup",...d,children:(0,i.jsx)(a.Provider,{value:{onChangeValue:(t,r)=>{t!==c&&("value"in e||p(t),u?.(t,r))},type:l,value:c,disabled:s,readonly:o,group:!0,name:t},children:r})})}};e.s(["Radio",()=>l],59772)},46030,e=>{"use strict";var t=e.i(64334);let r=(0,t.createContext)({checked:!1});var i=e.i(45100),n=e.i(2157);let a=(0,t.createContext)({isCheckboxGroup:!1,checkboxGroupValue:[],onGroupChange:()=>{},registerValue:()=>{},unRegisterValue:()=>{}}),l={CheckboxContext:r,Root:function(e){let l=(0,t.useContext)(a),{onGroupChange:s}=l,o=function({props:e,context:t}){let r={...e};return t.isCheckboxGroup&&(r.checked=-1!==t.checkboxGroupValue.indexOf(e.value),r.disabled=!!(t.disabled||e.disabled),r.readonly=!!(t.readonly||e.readonly)),r}({props:e,context:l}),{disabled:u,children:d,readonly:c,value:p,checked:g,onChange:f,indeterminate:x,...b}=o,y=(0,t.useRef)(null),[v,h]=(0,n.useMergeValue)(!1,{value:g,defaultValue:o.defaultChecked});return(0,t.useEffect)(()=>(l.registerValue(p),()=>{l.unRegisterValue(p)}),[p]),(0,i.jsx)(r.Provider,{value:{checked:v,disabled:u,indeterminate:x,readonly:c},children:(0,i.jsxs)("label",{...b,onClick:function(e){u||c?e.preventDefault():b?.onClick?.(e)},"aria-disabled":!!u,"aria-readonly":!!c,"aria-checked":!!v,children:[(0,i.jsx)("input",{value:p,disabled:!!u,ref:y,checked:!!v,onChange:function(e){e.persist(),e.stopPropagation(),u||c||(l.isCheckboxGroup?s?.(o.value,e.target.checked,e):h(e.target.checked),f?.(e.target.checked,e))},onClick:e=>e.stopPropagation(),type:"checkbox","aria-readonly":!!c}),d]})})},IconCheck:function({className:e}){return(0,i.jsx)("svg",{className:e,"aria-hidden":!0,focusable:!1,viewBox:"0 0 1024 1024",width:"200",height:"200",fill:"currentColor",children:(0,i.jsx)("path",{d:"M877.44815445 206.10060629a64.72691371 64.72691371 0 0 0-95.14856334 4.01306852L380.73381888 685.46812814 235.22771741 533.48933518a64.72691371 64.72691371 0 0 0-92.43003222-1.03563036l-45.82665557 45.82665443a64.72691371 64.72691371 0 0 0-0.90617629 90.61767965l239.61903446 250.10479331a64.72691371 64.72691371 0 0 0 71.19960405 15.14609778 64.33855261 64.33855261 0 0 0 35.08198741-21.23042702l36.24707186-42.71976334 40.5190474-40.77795556-3.36579926-3.49525333 411.40426297-486.74638962a64.72691371 64.72691371 0 0 0-3.88361443-87.64024149l-45.3088404-45.43829334z","p-id":"840"})})},Group:function(e){let{disabled:r,children:l,readonly:s,onChange:o,...u}=e,[d,c]=(0,n.useMergeValue)([],{defaultValue:e.defaultValue,value:e.value}),[p,g]=(0,t.useState)([]);return(0,i.jsx)("div",{role:"checkboxgroup",...u,children:(0,i.jsx)(a.Provider,{value:{isCheckboxGroup:!0,checkboxGroupValue:d,onGroupChange:function(e,t,r){if(!Array.isArray(d))return void console.error("Checkbox.Group value must be an array");let i=d?.slice()||[];t?i.push(e):i.splice(d.indexOf(e),1),c(i),o?.(i.filter(e=>p.indexOf(e)>-1),r)},disabled:r,readonly:s,registerValue:e=>{g(t=>Array.from(new Set([...t,e])))},unRegisterValue:e=>{g(t=>t.filter(t=>t!==e))}},children:l})})}};e.s(["Checkbox",()=>l],46030)},87411,e=>{"use strict";var t=e.i(45100),r=e.i(18694);e.i(82928);var i=e.i(69389),n=e.i(93612);e.i(73869);var a=e.i(84435);let l=`
function App() {
  return (
    <div className="flex gap-8 flex-wrap">
      <PixelButton status="primary">Primary</PixelButton>
      <PixelButton status="primary" type="outline">Primary</PixelButton>
    </div>
  );
}
`;function s(){return(0,t.jsx)(a.CodePreview,{code:l})}let o=`import { useState } from 'React';

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
`;function u(){return(0,t.jsx)(a.CodePreview,{code:o})}let d=`
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
`;function c(){return(0,t.jsx)(a.CodePreview,{code:d})}let p=`
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
`;function g(){return(0,t.jsx)(a.CodePreview,{code:p})}let f=`function App() {
  return (
    <div className="flex gap-8 flex-wrap">
      <PixelButton status="primary" onlyIcon><IconHomeLine /></PixelButton>
      <PixelButton status="primary">Go <IconArrowRightLine className="ml-2" /></PixelButton>
    </div>
  );
}`;function x(){return(0,t.jsx)(a.CodePreview,{code:f})}let b=`
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
`;function y(){return(0,t.jsx)(a.CodePreview,{code:b})}e.i(95640);var v=e.i(40864);e.i(36038);var h=e.i(54513),m=e.i(66898);let P=`
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
`,C=[{content:(0,t.jsx)(h.CollapseSubMenu,{children:"Button 代码"}),items:[{content:(0,t.jsx)("div",{className:"overflow-auto max-h-125",style:{maxHeight:"440px"},children:(0,t.jsx)(v.JsPreview,{code:P,readOnly:!0})})}]},{content:(0,t.jsx)(h.CollapseSubMenu,{children:"CS 函数代码"}),items:[{content:(0,t.jsx)("div",{className:"overflow-auto max-h-125",style:{maxHeight:"440px"},children:(0,t.jsx)(v.JsPreview,{code:B,readOnly:!0})})}]},{content:(0,t.jsx)(h.CollapseSubMenu,{children:"BaseBtnStyle 代码"}),items:[{content:(0,t.jsx)("div",{className:"overflow-auto max-h-125",style:{maxHeight:"440px"},children:(0,t.jsx)(v.JsPreview,{code:w,readOnly:!0})})}]}];function j(){return(0,t.jsx)(m.CollapseMenu,{data:C,subMenuClassName:"bg-color-100 rounded-md"})}function k(e){return(0,t.jsxs)(t.Fragment,{children:["\n",(0,t.jsx)(i.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["按钮分为",(0,t.jsx)(n.Code,{children:"品牌色按钮"}),"、",(0,t.jsx)(n.Code,{children:"线形按钮"})," 等等按钮"]}),children:"基本用法"}),"\n",(0,t.jsx)(s,{}),"\n","\n",(0,t.jsx)(i.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.Code,{children:"Button"}),"可以嵌入图标，在只设置图标而没有 children 时，按钮的高宽相等"]}),children:"图标按钮"}),"\n",(0,t.jsx)(x,{}),"\n","\n",(0,t.jsx)(i.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["通过设置",(0,t.jsx)(n.Code,{children:"Loading"}),"可以让一个按钮处于加载中状态。处于加载中状态的按钮不会触发点击事件"]}),children:"按钮状态"}),"\n",(0,t.jsx)(g,{}),"\n","\n",(0,t.jsx)(i.H3Sub,{sub:(0,t.jsx)(t.Fragment,{children:"按钮的禁用状态"}),children:"禁用按钮"}),"\n",(0,t.jsx)(y,{}),"\n","\n",(0,t.jsx)(i.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["通过设置",(0,t.jsx)(n.Code,{children:"Loading"}),"可以让一个按钮处于加载中状态。处于加载中状态的按钮不会触发点击事件"]}),children:"Loading 按钮"}),"\n",(0,t.jsx)(u,{}),"\n","\n",(0,t.jsx)(i.H3Sub,{sub:(0,t.jsx)(t.Fragment,{children:"可用在同级多项操作，以按钮组合方式出现"}),children:"组合按钮"}),"\n",(0,t.jsx)(c,{}),"\n","\n",(0,t.jsx)(i.H3Sub,{children:"组件源码"}),"\n",(0,t.jsx)(j,{})]})}function R(e={}){let{wrapper:i}={...(0,r.useMDXComponents)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(k,{...e})}):k(e)}function S(){return(0,t.jsx)(R,{})}e.s(["HowMakeCssButton",()=>S],87411)}]);