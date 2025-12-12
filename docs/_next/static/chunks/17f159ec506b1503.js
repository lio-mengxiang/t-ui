(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1521,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},79537,e=>{e.v({AElig:"Æ",AMP:"&",Aacute:"Á",Acirc:"Â",Agrave:"À",Aring:"Å",Atilde:"Ã",Auml:"Ä",COPY:"©",Ccedil:"Ç",ETH:"Ð",Eacute:"É",Ecirc:"Ê",Egrave:"È",Euml:"Ë",GT:">",Iacute:"Í",Icirc:"Î",Igrave:"Ì",Iuml:"Ï",LT:"<",Ntilde:"Ñ",Oacute:"Ó",Ocirc:"Ô",Ograve:"Ò",Oslash:"Ø",Otilde:"Õ",Ouml:"Ö",QUOT:'"',REG:"®",THORN:"Þ",Uacute:"Ú",Ucirc:"Û",Ugrave:"Ù",Uuml:"Ü",Yacute:"Ý",aacute:"á",acirc:"â",acute:"´",aelig:"æ",agrave:"à",amp:"&",aring:"å",atilde:"ã",auml:"ä",brvbar:"¦",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",ecirc:"ê",egrave:"è",eth:"ð",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",iacute:"í",icirc:"î",iexcl:"¡",igrave:"ì",iquest:"¿",iuml:"ï",laquo:"«",lt:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",oacute:"ó",ocirc:"ô",ograve:"ò",ordf:"ª",ordm:"º",oslash:"ø",otilde:"õ",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',raquo:"»",reg:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",times:"×",uacute:"ú",ucirc:"û",ugrave:"ù",uml:"¨",uuml:"ü",yacute:"ý",yen:"¥",yuml:"ÿ"})},27208,e=>{e.v({0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"})},73850,e=>{"use strict";var t=e.i(45100);let n=(0,e.i(51849).createIcon)({iconProps:{useFillCurrentColor:!0},viewBox:"0 0 156 94",paths:(0,t.jsx)("path",{d:"M0,31.18h31.18v62.56H0V31.18Zm155.46,5.67v56.89h-31.18V45.36c0-7.83-6.34-14.18-14.17-14.18h-17.01c.29,1.85,.44,3.74,.44,5.67v56.89h-31.18V45.36c0-7.83-6.35-14.18-14.17-14.18H31.18V0h25.51c13.15,0,24.69,6.89,31.21,17.25,2.62,4.15,4.43,8.86,5.2,13.92V0h25.51c20.35,0,36.85,16.5,36.85,36.85Z"})});e.s(["IconMLogo",0,n])},7823,e=>{"use strict";function t(e,t){if(null==e)return{};var n={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n}e.s(["default",()=>t])},37215,e=>{"use strict";function t(){return(t=Object.assign.bind()).apply(null,arguments)}e.s(["default",()=>t])},22480,e=>{"use strict";let t=(0,e.i(64334).createContext)({currentId:"",onLinkClick:()=>{},linkMap:{current:new Map}});e.s(["AnchorContext",0,t])},98319,e=>{"use strict";var t=e.i(64334);function n(...e){return(0,t.useCallback)(t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})},e)}e.s(["useComposedRefs",()=>n])},88036,e=>{"use strict";var t=e.i(45100),n=e.i(64334),r=e.i(22480);function i(e){let t=(0,n.useRef)(null);return t.current=e,(0,n.useCallback)((...e)=>t.current?.(...e),[])}var o=e.i(96224);function c(e,t){try{return e.querySelector(t)}catch(e){return null}}function l({scrollContainer:e,targetId:t,offset:n,isScrolling:r}){var i,l;if(!t)return;let s=c(document,`#${CSS.escape(t)}`);if(!s)return;let u=e.current,a=((void 0===(i=u)&&(i=window),i)&&(i===window?Math.ceil(window.pageYOffset):i.scrollTop)||0)+((e,t)=>{if(!e.getClientRects().length)return 0;let n=e.getBoundingClientRect();return n.width||n.height?t&&t!==window?n.top-t.getBoundingClientRect().top:(t=e.ownerDocument.documentElement,n.top-t.clientTop):n.top})(s,u)+n;(r.current=!0,(0,o.isWindow)(u))?u.scrollTo((void 0===(l=u)&&(l=window),l)&&(l===window?Math.ceil(window.pageXOffset||window.scrollX):l.scrollLeft)||0,a):u.scrollTop=a}function s({targetId:e,linkMap:t,wrapperRef:n,currentId:r,setCurrentId:i,onChange:o}){e&&n.current&&t.current.get(e)&&e!==r&&i(e).then(()=>{o?.(e,r)})}var u=e.i(98319);let a=(0,n.forwardRef)((e,a)=>{let{scrollContainer:d,offset:f=0,children:p,onChange:m,queryKey:v="anchor-id",isCloseInitAnchor:h,...g}=e,{currentId:C,onLinkClick:w,wrapperRef:x,linkMap:b}=function({propScrollContainer:e,onChange:t,offset:r,queryKey:u,isCloseInitAnchor:a}){var d;let f,p,m=(0,n.useRef)(null),v=(0,n.useRef)(null),h=(0,n.useRef)(new Map),g=(0,n.useRef)(!1),[C,w]=function(e){let[t,r]=(0,n.useState)({value:"",resolve:e=>{}});return(0,n.useEffect)(()=>{t.resolve(t.value)},[t]),[t.value,e=>new Promise(t=>{r(n=>{let r=e;return"function"==typeof e&&(r=e(n.value)),{value:r,resolve:t}})})]}(0),x=i(()=>{if(g.current)return;let e=function({linkMap:e,scrollContainer:t}){let n=t.current,r=((0,o.isWindow)(n)?document.documentElement||document.body:n).getBoundingClientRect(),i=Array.from(e.current.keys()),l=[];for(let e of i){let t=c(document,"#"+CSS.escape(e));if(t){let{top:e}=t.getBoundingClientRect(),i=(0,o.isWindow)(n)?e:e-r.top;i>=0&&l.push({element:t,top:i})}}return 0===l.length?null:l.reduce((e,t)=>e.top<=t.top?e:t).element}({linkMap:h,scrollContainer:v});e?.id&&s({targetId:e.id,linkMap:h,wrapperRef:m,currentId:C,setCurrentId:w,onChange:t})}),b=i((d=()=>{x(),g.current=!1},f=null,(p=(...e)=>{f||(f=setTimeout(()=>{f=null,d(...e)},30))}).cancel=()=>{f&&(clearTimeout(f),f=null)},p));return(0,n.useEffect)(()=>(v.current=(0,o.isString)(e)?c(document,e):e||window,v.current?.addEventListener("scroll",b),()=>{v.current?.removeEventListener("scroll",b)}),[b,e]),(0,n.useEffect)(()=>{if(!a)return void b();let e=new URLSearchParams(new URL(window.location.href).search).get(u);e&&(s({targetId:e,linkMap:h,wrapperRef:m,currentId:C,setCurrentId:w,onChange:t}),l({scrollContainer:v,targetId:e,offset:r,isScrolling:g}))},[]),{onScroll:b,currentId:C,onLinkClick:function(e,n){e.preventDefault(),s({targetId:n,linkMap:h,wrapperRef:m,currentId:C,setCurrentId:w,onChange:t}),l({scrollContainer:v,targetId:n,offset:r,isScrolling:g})},wrapperRef:m,scrollContainer:v,linkMap:h}}({propScrollContainer:d,onChange:m,offset:f,queryKey:v,isCloseInitAnchor:h});return(0,t.jsx)(r.AnchorContext.Provider,{value:{currentId:C,linkMap:b,onLinkClick:w},children:(0,t.jsx)("div",{...g,ref:(0,u.useComposedRefs)(x,a),children:p})})});e.s(["Anchor",0,a],88036)},69438,e=>{"use strict";var t=e.i(45100),n=e.i(64334),r=e.i(22480),i=e.i(98319);let o=(0,n.forwardRef)((e,o)=>{let{onLinkClick:c,linkMap:l,currentId:s}=(0,n.useContext)(r.AnchorContext),{onClick:u,targetId:a,children:d,className:f,activeClassName:p,...m}=e,v=(0,n.useRef)(null);return(0,n.useEffect)(()=>{var e;return e=v.current,a&&l.current.set(a,e),()=>{l.current.delete(a)}},[a,l]),(0,t.jsx)("div",{ref:(0,i.useComposedRefs)(o,v),...m,onClick:e=>{e.stopPropagation(),u?.(e),c?.(e,a)},"data-target-id":a,className:s===a?p:f,children:d})});e.s(["AnchorLink",0,o],69438)},93562,e=>{"use strict";var t=e.i(88036),n=e.i(69438),r=e.i(22480);let i={Root:t.Anchor,Link:n.AnchorLink,Context:r.AnchorContext};e.s(["Anchor",()=>i])},58712,e=>{"use strict";var t=e.i(45100),n=e.i(18694);e.i(82928);var r=e.i(72304),i=e.i(47445),o=e.i(69389);function c(e){let c={code:"code",h2:"h2",p:"p",...(0,n.useMDXComponents)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.H1,{subheading:"",children:"Tag 组件太简单了"}),"\n",(0,t.jsx)(r.ImageTypography,{src:"/tag/tag.webp",fill:!0,alt:"icon"}),"\n",(0,t.jsx)(c.h2,{children:"前言"}),"\n",(0,t.jsxs)(c.p,{children:["Tag 组件本身没有任何难度，就是一个简单的 ",(0,t.jsx)(c.code,{children:"div"})," 加上一些样式。"]}),"\n",(0,t.jsx)(c.p,{children:"源码如下："}),"\n",(0,t.jsx)(i.CodeBlock,{code:`'use client';

import { cs } from '@/_utils';
import { IconCloseLine, IconLoadingLine, useMergeValue } from '@t-headless-ui/react';
import React, { useState } from 'react';

function isPromiseInstance(value: any): value is Promise<any> {
  return value && value instanceof Promise;
}
export function TTag(props: {
  children: React.ReactNode;
  className?: string;
  onClose?: (e: React.MouseEvent) => Promise<void> | void;
  closable?: boolean;
  visible?: boolean;
}) {
  const { children, className, onClose, closable, visible: visibleProp, ...rest } = props;
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useMergeValue(true, {
    value: visibleProp,
  });

  const handleOnClose = (e: React.MouseEvent) => {
    const ret = onClose?.(e);
    if (ret && isPromiseInstance(ret)) {
      setLoading(true);
      ret
        .then(() => {
          setLoading(false);
          setVisible(false);
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setVisible(false);
    }
  };

  return (
    <div
      className={cs('inline-flex box-border items-center nowrap h-6 px-2 rounded-sm bg-color-100 text-[12px]', className, {
        hidden: !visible,
      })}
      {...rest}
    >
      {children}
      {closable && visible && !loading && (
        <IconCloseLine onClick={handleOnClose} className="ml-1 cursor-pointer hover:text-color-400 duration-200 transition-colors" />
      )}
      {loading && <IconLoadingLine className="ml-1 animate-spin" />}
    </div>
  );
}`,language:"jsx"}),"\n",(0,t.jsx)(c.p,{children:"最后，欢迎加入到我们的组件库交流群中。有什么疑问都可以在群里讨论，并且会有视频直播每个组件的实现。"}),"\n",(0,t.jsx)(c.p,{children:"更重要的是,我可以帮助你增加一些简历中的核心项目，例如我们这个组件库级别的。无论你是面试初级开发还是到前端技术专家，都会帮助你在面试中脱颖而出。"})]})}function l(e={}){let{wrapper:r}={...(0,n.useMDXComponents)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}function s(){return(0,t.jsx)(l,{})}e.s(["MustRead",()=>s],58712)}]);