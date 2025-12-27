(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,22836,92176,e=>{"use strict";var t=e.i(45100),r=e.i(51849);let n=(0,r.createIcon)({iconProps:{useStrokeCurrentColor:!0},paths:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("path",{d:"M4 9V41L9 21H39.5V15C39.5 13.8954 38.6046 13 37.5 13H24L19 7H6C4.89543 7 4 7.89543 4 9Z",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M40 41L44 21H8.8125L4 41H40Z",fill:"none",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})});e.s(["IconOpenFileLine",0,n],22836);let a=(0,r.createIcon)({iconProps:{useStrokeCurrentColor:!0},paths:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("path",{d:"M40 27V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H21",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M17 12L31 12",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M17 20L31 20",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M17 28H23",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M37 37C37 38.3807 36.4404 39.6307 35.5355 40.5355C34.6307 41.4404 33.3807 42 32 42C29.2386 42 27 39.7614 27 37C27 34.2386 29.2386 32 32 32C34.7614 32 37 34.2386 37 37Z",fill:"none"}),(0,t.jsx)("path",{d:"M39 44L35.5355 40.5355M35.5355 40.5355C36.4404 39.6307 37 38.3807 37 37C37 34.2386 34.7614 32 32 32C29.2386 32 27 34.2386 27 37C27 39.7614 29.2386 42 32 42C33.3807 42 34.6307 41.4404 35.5355 40.5355Z",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})});e.s(["IconSearchFileLine",0,a],92176)},37284,e=>{"use strict";var t=e.i(45100);let r=(0,e.i(51849).createIcon)({iconProps:{useStrokeCurrentColor:!0},paths:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("path",{strokeWidth:"4",d:"M16 21h16m-16 8h10m11 13H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h21l7 7v27a2 2 0 0 1-2 2Z"})})});e.s(["IconInfoFileLine",0,r])},59772,e=>{"use strict";var t=e.i(64334);let r=(0,t.createContext)({checked:!1});var n=e.i(45100),a=e.i(2157);let s=(0,t.createContext)({type:"radio"}),i={RadioContext:r,Root:function(e){let i=(0,t.useContext)(s),o=function({props:e,context:t}){let r={...e};return t.group&&(r.checked=t.value===e.value,r.disabled=!!(t.disabled||e.disabled),r.readonly=!!(t.readonly||e.readonly)),r}({props:e,context:i}),{disabled:l,readonly:u,children:d,value:c,checked:p,onChange:g,...b}=o,h=(0,t.useRef)(null),[f,x]=(0,a.useMergeValue)(!1,{value:p,defaultValue:o.defaultChecked});return(0,n.jsx)(r.Provider,{value:{checked:f,disabled:l,readonly:u},children:(0,n.jsxs)("label",{...b,onClick:function(e){l||u?e.preventDefault():b?.onClick?.(e)},"aria-disabled":!!l,"aria-readonly":!!u,"aria-checked":!!f,children:[(0,n.jsx)("input",{ref:h,disabled:!!l,value:c,type:"radio",checked:!!f,onChange:t=>{t.persist(),t.stopPropagation(),l||u||(i.group?i?.onChangeValue?.(c,t):"checked"in e||f||x(!0),f||g?.(!0,t))},onClick:e=>{e.stopPropagation()},"aria-readonly":!!u}),d]})})},Group:function(e){let{name:t,children:r,type:i="radio",disabled:o,readonly:l,onChange:u,...d}=e,[c,p]=(0,a.useMergeValue)(void 0,{defaultValue:e.defaultValue,value:e.value});return(0,n.jsx)("div",{role:"radiogroup",...d,children:(0,n.jsx)(s.Provider,{value:{onChangeValue:(t,r)=>{t!==c&&("value"in e||p(t),u?.(t,r))},type:i,value:c,disabled:o,readonly:l,group:!0,name:t},children:r})})}};e.s(["Radio",()=>i],59772)},1521,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},79537,e=>{e.v({AElig:"Æ",AMP:"&",Aacute:"Á",Acirc:"Â",Agrave:"À",Aring:"Å",Atilde:"Ã",Auml:"Ä",COPY:"©",Ccedil:"Ç",ETH:"Ð",Eacute:"É",Ecirc:"Ê",Egrave:"È",Euml:"Ë",GT:">",Iacute:"Í",Icirc:"Î",Igrave:"Ì",Iuml:"Ï",LT:"<",Ntilde:"Ñ",Oacute:"Ó",Ocirc:"Ô",Ograve:"Ò",Oslash:"Ø",Otilde:"Õ",Ouml:"Ö",QUOT:'"',REG:"®",THORN:"Þ",Uacute:"Ú",Ucirc:"Û",Ugrave:"Ù",Uuml:"Ü",Yacute:"Ý",aacute:"á",acirc:"â",acute:"´",aelig:"æ",agrave:"à",amp:"&",aring:"å",atilde:"ã",auml:"ä",brvbar:"¦",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",ecirc:"ê",egrave:"è",eth:"ð",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",iacute:"í",icirc:"î",iexcl:"¡",igrave:"ì",iquest:"¿",iuml:"ï",laquo:"«",lt:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",oacute:"ó",ocirc:"ô",ograve:"ò",ordf:"ª",ordm:"º",oslash:"ø",otilde:"õ",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',raquo:"»",reg:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",times:"×",uacute:"ú",ucirc:"û",ugrave:"ù",uml:"¨",uuml:"ü",yacute:"ý",yen:"¥",yuml:"ÿ"})},27208,e=>{e.v({0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"})},7823,e=>{"use strict";function t(e,t){if(null==e)return{};var r={};for(var n in e)if(({}).hasOwnProperty.call(e,n)){if(-1!==t.indexOf(n))continue;r[n]=e[n]}return r}e.s(["default",()=>t])},88897,e=>{"use strict";function t(){return(t=Object.assign.bind()).apply(null,arguments)}e.s(["default",()=>t])},73850,e=>{"use strict";var t=e.i(45100);let r=(0,e.i(51849).createIcon)({iconProps:{useFillCurrentColor:!0},viewBox:"0 0 156 94",paths:(0,t.jsx)("path",{d:"M0,31.18h31.18v62.56H0V31.18Zm155.46,5.67v56.89h-31.18V45.36c0-7.83-6.34-14.18-14.17-14.18h-17.01c.29,1.85,.44,3.74,.44,5.67v56.89h-31.18V45.36c0-7.83-6.35-14.18-14.17-14.18H31.18V0h25.51c13.15,0,24.69,6.89,31.21,17.25,2.62,4.15,4.43,8.86,5.2,13.92V0h25.51c20.35,0,36.85,16.5,36.85,36.85Z"})});e.s(["IconMLogo",0,r])},68279,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return d},getImageProps:function(){return u}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let s=e.r(33982),i=e.r(23318),o=e.r(14455),l=s._(e.r(50314));function u(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/t-ui/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let d=o.Image},77601,(e,t,r)=>{t.exports=e.r(68279)},18694,10780,28841,51809,16520,e=>{"use strict";var t=e.i(45100);e.i(90850);var r=e.i(21990);let n=e=>"string"==typeof e?e:void 0;function a({children:e,subheading:r}){return(0,t.jsxs)("h1",{className:"font-medium mb-8 text-[36px]",id:n(e),children:[e,(0,t.jsx)("div",{className:"text-lg font-normal text-color-400",children:r})]})}function s({children:e}){return(0,t.jsx)("h2",{className:"font-medium mb-8 mt-8 text-[28px]",id:n(e),children:e})}function i({children:e,className:a}){return(0,t.jsx)("h3",{className:(0,r.cs)("font-medium mb-8 mt-8 text-[20px]",a),id:n(e),children:e})}function o({children:e,sub:r}){return(0,t.jsxs)("div",{className:"mb-8",children:[(0,t.jsx)(i,{className:"mb-2",children:e}),(0,t.jsx)("div",{className:"text-[13px]",children:r})]})}function l({children:e}){return(0,t.jsx)("h4",{className:"font-medium mb-8 mt-8 text-[16px]",id:n(e),children:e})}function u({children:e}){return(0,t.jsx)("h5",{className:"font-medium mb-8 mt-8 text-[14px]",id:n(e),children:e})}function d({children:e}){return(0,t.jsx)("h6",{className:"font-medium mb-8 mt-8 text-[12px]",id:n(e),children:e})}e.s(["H1",()=>a,"H2",()=>s,"H3",()=>i,"H3Sub",()=>o,"H4",()=>l,"H5",()=>u,"H6",()=>d],10780);var c=e.i(53027);function p({children:e}){return(0,t.jsx)("ul",{className:"list-disc p-0 m-6 space-y-4",children:e})}function g({children:e}){return(0,t.jsx)("ol",{className:"list-decimal p-0 m-6 space-y-4",children:e})}var b=e.i(77601),h=e.i(39943);function f({src:e,alt:n,width:a,height:s,fill:i,style:o,containerClassName:l,imageClassName:u}){return(0,t.jsx)("div",{className:(0,r.cs)(`w-full h-96 relative mt-8 mb-8 ${l}`),children:(0,t.jsx)(b.default,{src:(0,h.getImageUrl)(e),alt:n,width:a,height:s,style:o,fill:i,className:(0,r.cs)("object-cover",u)})})}e.s(["ImageTypography",()=>f],28841);var x=e.i(69457),m=e.i(73850);function y(){return(0,t.jsx)(x.Avatar,{text:"孟祥_成都 🔥",des:"前端技术专家，全栈开发工程师",children:(0,t.jsx)(m.IconMLogo,{})})}e.s(["AvatarM",()=>y],51809);var v=e.i(57030);e.i(78806);var j=e.i(186),B=e.i(61750),C=e.i(96183);function T(e){return{h1:({children:e})=>(0,t.jsx)(a,{children:e}),h2:({children:e})=>(0,t.jsx)(s,{children:e}),h3:({children:e})=>(0,t.jsx)(i,{children:e}),h4:({children:e})=>(0,t.jsx)(l,{children:e}),h5:({children:e})=>(0,t.jsx)(u,{children:e}),h6:({children:e})=>(0,t.jsx)(d,{children:e}),p:({children:e})=>(0,t.jsx)(c.Paragraph,{children:e}),ol:({children:e})=>(0,t.jsx)(g,{children:e}),ul:({children:e})=>(0,t.jsx)(p,{children:e}),code:({children:e,className:r})=>r?.startsWith("language-")?(0,t.jsx)(v.CodeBlock,{language:r,code:e}):(0,t.jsx)(j.Code,{children:e}),a:e=>(0,t.jsx)(B.Link,{...e}),pre:({children:e})=>(0,t.jsx)(C.Pre,{children:e}),...e}}e.s([],16520),e.s(["useMDXComponents",()=>T],18694)},46030,e=>{"use strict";var t=e.i(64334);let r=(0,t.createContext)({checked:!1});var n=e.i(45100),a=e.i(2157);let s=(0,t.createContext)({isCheckboxGroup:!1,checkboxGroupValue:[],onGroupChange:()=>{},registerValue:()=>{},unRegisterValue:()=>{}}),i={CheckboxContext:r,Root:function(e){let i=(0,t.useContext)(s),{onGroupChange:o}=i,l=function({props:e,context:t}){let r={...e};return t.isCheckboxGroup&&(r.checked=-1!==t.checkboxGroupValue.indexOf(e.value),r.disabled=!!(t.disabled||e.disabled),r.readonly=!!(t.readonly||e.readonly)),r}({props:e,context:i}),{disabled:u,children:d,readonly:c,value:p,checked:g,onChange:b,indeterminate:h,...f}=l,x=(0,t.useRef)(null),[m,y]=(0,a.useMergeValue)(!1,{value:g,defaultValue:l.defaultChecked});return(0,t.useEffect)(()=>(i.registerValue(p),()=>{i.unRegisterValue(p)}),[p]),(0,n.jsx)(r.Provider,{value:{checked:m,disabled:u,indeterminate:h,readonly:c},children:(0,n.jsxs)("label",{...f,onClick:function(e){u||c?e.preventDefault():f?.onClick?.(e)},"aria-disabled":!!u,"aria-readonly":!!c,"aria-checked":!!m,children:[(0,n.jsx)("input",{value:p,disabled:!!u,ref:x,checked:!!m,onChange:function(e){e.persist(),e.stopPropagation(),u||c||(i.isCheckboxGroup?o?.(l.value,e.target.checked,e):y(e.target.checked),b?.(e.target.checked,e))},onClick:e=>e.stopPropagation(),type:"checkbox","aria-readonly":!!c}),d]})})},IconCheck:function({className:e}){return(0,n.jsx)("svg",{className:e,"aria-hidden":!0,focusable:!1,viewBox:"0 0 1024 1024",width:"200",height:"200",fill:"currentColor",children:(0,n.jsx)("path",{d:"M877.44815445 206.10060629a64.72691371 64.72691371 0 0 0-95.14856334 4.01306852L380.73381888 685.46812814 235.22771741 533.48933518a64.72691371 64.72691371 0 0 0-92.43003222-1.03563036l-45.82665557 45.82665443a64.72691371 64.72691371 0 0 0-0.90617629 90.61767965l239.61903446 250.10479331a64.72691371 64.72691371 0 0 0 71.19960405 15.14609778 64.33855261 64.33855261 0 0 0 35.08198741-21.23042702l36.24707186-42.71976334 40.5190474-40.77795556-3.36579926-3.49525333 411.40426297-486.74638962a64.72691371 64.72691371 0 0 0-3.88361443-87.64024149l-45.3088404-45.43829334z","p-id":"840"})})},Group:function(e){let{disabled:r,children:i,readonly:o,onChange:l,...u}=e,[d,c]=(0,a.useMergeValue)([],{defaultValue:e.defaultValue,value:e.value}),[p,g]=(0,t.useState)([]);return(0,n.jsx)("div",{role:"checkboxgroup",...u,children:(0,n.jsx)(s.Provider,{value:{isCheckboxGroup:!0,checkboxGroupValue:d,onGroupChange:function(e,t,r){if(!Array.isArray(d))return void console.error("Checkbox.Group value must be an array");let n=d?.slice()||[];t?n.push(e):n.splice(d.indexOf(e),1),c(n),l?.(n.filter(e=>p.indexOf(e)>-1),r)},disabled:r,readonly:o,registerValue:e=>{g(t=>Array.from(new Set([...t,e])))},unRegisterValue:e=>{g(t=>t.filter(t=>t!==e))}},children:i})})}};e.s(["Checkbox",()=>i],46030)},13724,e=>{"use strict";var t=e.i(45100),r=e.i(18694);e.i(16520);var n=e.i(10780),a=e.i(186);e.i(89065);var s=e.i(4783);let i=`
function App() {
  return (
    <div className="flex gap-4 flex-wrap">
      <TButton status="primary">Brand</TButton>
      <TButton status="primary" type="outline">Outline</TButton>
    </div>
  );
}
`;function o(){return(0,t.jsx)(s.CodePreview,{code:i})}let l=`import { useState } from 'React';

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
      <TButton loading={loading1} onClick={onClickBtn1} status="default">Default</TButton>
      <TButton loading disabled status="primary" type="outline">Primary</TButton>
      <TButton loading status="warning" type="outline">Warning</TButton>
      <TButton loading={loading2} onClick={onClickBtn2} status="default" type="outline">Default</TButton>
    </div>
  );
}
`;function u(){return(0,t.jsx)(s.CodePreview,{code:l})}let d=`
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
`;function c(){return(0,t.jsx)(s.CodePreview,{code:d})}let p=`import { useState } from 'React';

function App() {
  return (
    <div className="flex flex-wrap gap-4 max-w-[360px]">
      <TButton status="primary" small>Small</TButton>
      <TButton status="primary">Default</TButton>
      <TButton status="primary" large>Large</TButton>
    </div>
  );
}
`;function g(){return(0,t.jsx)(s.CodePreview,{code:p})}let b=`
function App() {
  return (
    <div className="flex flex-wrap gap-4 max-w-[440px]">
      <TButton status="primary">Primary</TButton>
      <TButton status="warning">Warning</TButton>
      <TButton status="error">Error</TButton>
      <TButton status="success">Success</TButton>
      <TButton status="default">Default</TButton>
      <TButton status="primary" type="outline">Primary</TButton>
      <TButton status="warning" type="outline">Warning</TButton>
      <TButton status="error" type="outline">Error</TButton>
      <TButton status="success" type="outline">Success</TButton>
      <TButton status="default" type="outline">Default</TButton>
    </div>
  );
}
`;function h(){return(0,t.jsx)(s.CodePreview,{code:b})}let f=`function App() {
  return (
    <div className="flex gap-4 flex-wrap">
      <TButton status="primary" onlyIcon><IconHomeLine /></TButton>
      <TButton status="primary">Go <IconArrowRightLine className="ml-2" /></TButton>
    </div>
  );
}`;function x(){return(0,t.jsx)(s.CodePreview,{code:f})}let m=`
function App() {
  return (
    <div className="flex flex-wrap gap-4 max-w-[440px]">
      <TButton disabled status="primary">Primary</TButton>
      <TButton disabled status="warning">Warning</TButton>
      <TButton disabled status="error">Error</TButton>
      <TButton disabled status="success">Success</TButton>
      <TButton disabled status="default">Default</TButton>
      <TButton disabled status="primary" type="outline">Primary</TButton>
      <TButton disabled status="warning" type="outline">Warning</TButton>
      <TButton disabled status="error" type="outline">Error</TButton>
      <TButton disabled status="success" type="outline">Success</TButton>
      <TButton disabled status="default" type="outline">Default</TButton>
    </div>
  );
}
`;function y(){return(0,t.jsx)(s.CodePreview,{code:m})}e.i(57655);var v=e.i(93824);e.i(44612);var j=e.i(91967),B=e.i(68745);let C=`
import  { type PropsWithChildren } from 'react';

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
`,T=`
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
}`,k=`
export const baseBtnStyle =
  'inline-flex relative items-center justify-center outline-none pl-3.5 pr-3.5 h-8 text-sm appearance-none select-none cursor-pointer whitespace-nowrap transition-all duration-200 ease-linear box-border rounded border border-transparent';
`,w=[{content:(0,t.jsx)(j.CollapseSubMenu,{children:"Button 代码"}),items:[{content:(0,t.jsx)("div",{className:"overflow-auto max-h-125",style:{maxHeight:"440px"},children:(0,t.jsx)(v.JsPreview,{code:C,readOnly:!0})})}]},{content:(0,t.jsx)(j.CollapseSubMenu,{children:"CS 函数代码"}),items:[{content:(0,t.jsx)("div",{className:"overflow-auto max-h-125",style:{maxHeight:"440px"},children:(0,t.jsx)(v.JsPreview,{code:T,readOnly:!0})})}]},{content:(0,t.jsx)(j.CollapseSubMenu,{children:"BaseBtnStyle 代码"}),items:[{content:(0,t.jsx)("div",{className:"overflow-auto max-h-125",style:{maxHeight:"440px"},children:(0,t.jsx)(v.JsPreview,{code:k,readOnly:!0})})}]}];function P(){return(0,t.jsx)(B.CollapseMenu,{data:w,subMenuClassName:"bg-color-100 rounded-md"})}function L(e){return(0,t.jsxs)(t.Fragment,{children:["\n",(0,t.jsx)(n.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["按钮分为",(0,t.jsx)(a.Code,{children:"品牌色按钮"}),"、",(0,t.jsx)(a.Code,{children:"线形按钮"})," 等等按钮"]}),children:"基本用法"}),"\n",(0,t.jsx)(o,{}),"\n","\n",(0,t.jsx)(n.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.Code,{children:"Button"}),"可以嵌入图标，在只设置图标而没有 children 时，按钮的高宽相等"]}),children:"图标按钮"}),"\n",(0,t.jsx)(x,{}),"\n","\n",(0,t.jsx)(n.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["通过设置",(0,t.jsx)(a.Code,{children:"Loading"}),"可以让一个按钮处于加载中状态。处于加载中状态的按钮不会触发点击事件"]}),children:"按钮状态"}),"\n",(0,t.jsx)(h,{}),"\n","\n",(0,t.jsx)(n.H3Sub,{sub:(0,t.jsx)(t.Fragment,{children:"按钮的禁用状态"}),children:"禁用按钮"}),"\n",(0,t.jsx)(y,{}),"\n","\n",(0,t.jsx)(n.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["通过设置",(0,t.jsx)(a.Code,{children:"Loading"}),"可以让一个按钮处于加载中状态。处于加载中状态的按钮不会触发点击事件"]}),children:"Loading 按钮"}),"\n",(0,t.jsx)(u,{}),"\n","\n",(0,t.jsx)(n.H3Sub,{sub:(0,t.jsx)(t.Fragment,{children:"可用在同级多项操作，以按钮组合方式出现"}),children:"不同按钮尺寸"}),"\n",(0,t.jsx)(g,{}),"\n","\n",(0,t.jsx)(n.H3Sub,{sub:(0,t.jsx)(t.Fragment,{children:"可用在同级多项操作，以按钮组合方式出现"}),children:"组合按钮"}),"\n",(0,t.jsx)(c,{}),"\n","\n",(0,t.jsx)(n.H3Sub,{children:"组件源码"}),"\n",(0,t.jsx)(P,{})]})}function N(e={}){let{wrapper:n}={...(0,r.useMDXComponents)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(L,{...e})}):L(e)}function S(){return(0,t.jsx)(N,{})}e.s(["TraditionalExample",()=>S],13724)}]);