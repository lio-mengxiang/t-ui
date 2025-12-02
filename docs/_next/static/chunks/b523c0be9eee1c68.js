(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1521,(e,r,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"warnOnce",{enumerable:!0,get:function(){return t}});let t=e=>{}},79537,e=>{e.v({AElig:"Æ",AMP:"&",Aacute:"Á",Acirc:"Â",Agrave:"À",Aring:"Å",Atilde:"Ã",Auml:"Ä",COPY:"©",Ccedil:"Ç",ETH:"Ð",Eacute:"É",Ecirc:"Ê",Egrave:"È",Euml:"Ë",GT:">",Iacute:"Í",Icirc:"Î",Igrave:"Ì",Iuml:"Ï",LT:"<",Ntilde:"Ñ",Oacute:"Ó",Ocirc:"Ô",Ograve:"Ò",Oslash:"Ø",Otilde:"Õ",Ouml:"Ö",QUOT:'"',REG:"®",THORN:"Þ",Uacute:"Ú",Ucirc:"Û",Ugrave:"Ù",Uuml:"Ü",Yacute:"Ý",aacute:"á",acirc:"â",acute:"´",aelig:"æ",agrave:"à",amp:"&",aring:"å",atilde:"ã",auml:"ä",brvbar:"¦",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",ecirc:"ê",egrave:"è",eth:"ð",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",iacute:"í",icirc:"î",iexcl:"¡",igrave:"ì",iquest:"¿",iuml:"ï",laquo:"«",lt:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",oacute:"ó",ocirc:"ô",ograve:"ò",ordf:"ª",ordm:"º",oslash:"ø",otilde:"õ",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',raquo:"»",reg:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",times:"×",uacute:"ú",ucirc:"û",ugrave:"ù",uml:"¨",uuml:"ü",yacute:"ý",yen:"¥",yuml:"ÿ"})},27208,e=>{e.v({0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"})},73850,e=>{"use strict";var r=e.i(45100);let o=(0,e.i(51849).createIcon)({iconProps:{useFillCurrentColor:!0},viewBox:"0 0 156 94",paths:(0,r.jsx)("path",{d:"M0,31.18h31.18v62.56H0V31.18Zm155.46,5.67v56.89h-31.18V45.36c0-7.83-6.34-14.18-14.17-14.18h-17.01c.29,1.85,.44,3.74,.44,5.67v56.89h-31.18V45.36c0-7.83-6.35-14.18-14.17-14.18H31.18V0h25.51c13.15,0,24.69,6.89,31.21,17.25,2.62,4.15,4.43,8.86,5.2,13.92V0h25.51c20.35,0,36.85,16.5,36.85,36.85Z"})});e.s(["IconMLogo",0,o])},7823,e=>{"use strict";function r(e,r){if(null==e)return{};var o={};for(var t in e)if(({}).hasOwnProperty.call(e,t)){if(-1!==r.indexOf(t))continue;o[t]=e[t]}return o}e.s(["default",()=>r])},37215,e=>{"use strict";function r(){return(r=Object.assign.bind()).apply(null,arguments)}e.s(["default",()=>r])},22480,e=>{"use strict";let r=(0,e.i(64334).createContext)({currentId:"",onLinkClick:()=>{},linkMap:{current:new Map}});e.s(["AnchorContext",0,r])},98319,e=>{"use strict";var r=e.i(64334);function o(...e){return(0,r.useCallback)(r=>{e.forEach(e=>{"function"==typeof e?e(r):null!=e&&(e.current=r)})},e)}e.s(["useComposedRefs",()=>o])},88036,e=>{"use strict";var r=e.i(45100),o=e.i(64334),t=e.i(22480);function i(e){let r=(0,o.useRef)(null);return r.current=e,(0,o.useCallback)((...e)=>r.current?.(...e),[])}var n=e.i(96224);function a(e,r){try{return e.querySelector(r)}catch(e){return null}}function c({scrollContainer:e,targetId:r,offset:o,isScrolling:t}){var i,c;if(!r)return;let d=a(document,`#${CSS.escape(r)}`);if(!d)return;let s=e.current,l=((void 0===(i=s)&&(i=window),i)&&(i===window?Math.ceil(window.pageYOffset):i.scrollTop)||0)+((e,r)=>{if(!e.getClientRects().length)return 0;let o=e.getBoundingClientRect();return o.width||o.height?r&&r!==window?o.top-r.getBoundingClientRect().top:(r=e.ownerDocument.documentElement,o.top-r.clientTop):o.top})(d,s)+o;(t.current=!0,(0,n.isWindow)(s))?s.scrollTo((void 0===(c=s)&&(c=window),c)&&(c===window?Math.ceil(window.pageXOffset||window.scrollX):c.scrollLeft)||0,l):s.scrollTop=l}function d({targetId:e,linkMap:r,wrapperRef:o,currentId:t,setCurrentId:i,onChange:n}){e&&o.current&&r.current.get(e)&&e!==t&&i(e).then(()=>{n?.(e,t)})}var s=e.i(98319);let l=(0,o.forwardRef)((e,l)=>{let{scrollContainer:u,offset:p=0,children:h,onChange:f,queryKey:x="anchor-id",isCloseInitAnchor:j,...m}=e,{currentId:g,onLinkClick:v,wrapperRef:b,linkMap:w}=function({propScrollContainer:e,onChange:r,offset:t,queryKey:s,isCloseInitAnchor:l}){var u;let p,h,f=(0,o.useRef)(null),x=(0,o.useRef)(null),j=(0,o.useRef)(new Map),m=(0,o.useRef)(!1),[g,v]=function(e){let[r,t]=(0,o.useState)({value:"",resolve:e=>{}});return(0,o.useEffect)(()=>{r.resolve(r.value)},[r]),[r.value,e=>new Promise(r=>{t(o=>{let t=e;return"function"==typeof e&&(t=e(o.value)),{value:t,resolve:r}})})]}(0),b=i(()=>{if(m.current)return;let e=function({linkMap:e,scrollContainer:r}){let o=r.current,t=((0,n.isWindow)(o)?document.documentElement||document.body:o).getBoundingClientRect(),i=Array.from(e.current.keys()),c=[];for(let e of i){let r=a(document,"#"+CSS.escape(e));if(r){let{top:e}=r.getBoundingClientRect(),i=(0,n.isWindow)(o)?e:e-t.top;i>=0&&c.push({element:r,top:i})}}return 0===c.length?null:c.reduce((e,r)=>e.top<=r.top?e:r).element}({linkMap:j,scrollContainer:x});e?.id&&d({targetId:e.id,linkMap:j,wrapperRef:f,currentId:g,setCurrentId:v,onChange:r})}),w=i((u=()=>{b(),m.current=!1},p=null,(h=(...e)=>{p||(p=setTimeout(()=>{p=null,u(...e)},30))}).cancel=()=>{p&&(clearTimeout(p),p=null)},h));return(0,o.useEffect)(()=>(x.current=(0,n.isString)(e)?a(document,e):e||window,x.current?.addEventListener("scroll",w),()=>{x.current?.removeEventListener("scroll",w)}),[w,e]),(0,o.useEffect)(()=>{if(!l)return void w();let e=new URLSearchParams(new URL(window.location.href).search).get(s);e&&(d({targetId:e,linkMap:j,wrapperRef:f,currentId:g,setCurrentId:v,onChange:r}),c({scrollContainer:x,targetId:e,offset:t,isScrolling:m}))},[]),{onScroll:w,currentId:g,onLinkClick:function(e,o){e.preventDefault(),d({targetId:o,linkMap:j,wrapperRef:f,currentId:g,setCurrentId:v,onChange:r}),c({scrollContainer:x,targetId:o,offset:t,isScrolling:m})},wrapperRef:f,scrollContainer:x,linkMap:j}}({propScrollContainer:u,onChange:f,offset:p,queryKey:x,isCloseInitAnchor:j});return(0,r.jsx)(t.AnchorContext.Provider,{value:{currentId:g,linkMap:w,onLinkClick:v},children:(0,r.jsx)("div",{...m,ref:(0,s.useComposedRefs)(b,l),children:h})})});e.s(["Anchor",0,l],88036)},69438,e=>{"use strict";var r=e.i(45100),o=e.i(64334),t=e.i(22480),i=e.i(98319);let n=(0,o.forwardRef)((e,n)=>{let{onLinkClick:a,linkMap:c,currentId:d}=(0,o.useContext)(t.AnchorContext),{onClick:s,targetId:l,children:u,className:p,activeClassName:h,...f}=e,x=(0,o.useRef)(null);return(0,o.useEffect)(()=>{var e;return e=x.current,l&&c.current.set(l,e),()=>{c.current.delete(l)}},[l,c]),(0,r.jsx)("div",{ref:(0,i.useComposedRefs)(n,x),...f,onClick:e=>{e.stopPropagation(),s?.(e),a?.(e,l)},"data-target-id":l,className:d===l?h:p,children:u})});e.s(["AnchorLink",0,n],69438)},93562,e=>{"use strict";var r=e.i(88036),o=e.i(69438),t=e.i(22480);let i={Root:r.Anchor,Link:o.AnchorLink,Context:t.AnchorContext};e.s(["Anchor",()=>i])},70939,70910,e=>{"use strict";var r=e.i(45100);e.i(82928);var o=e.i(93612),t=e.i(89546);function i(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(t.Paragraph,{children:["如果什么项目能覆盖常见的开发中的核心技术，那莫过于这套 从 0 到 1 打造的 ",(0,r.jsx)(o.Code,{children:"企业级"})," 前端组件库的项目了。"]}),(0,r.jsxs)(t.Paragraph,{children:["如果还在发愁建立有什么亮点项目能让面试官眼前一亮，让你在其它面试者中 ",(0,r.jsx)(o.Code,{children:"脱颖而出"}),"，那这个项目就是你需要的。"]}),(0,r.jsxs)(t.Paragraph,{children:["可以根据你的需要，",(0,r.jsx)(o.Code,{children:"定制化"})," 地帮你我来帮你写出符合你需求的项目。这个项目水平如何，效果可见，源码可见，无需多言。"]}),(0,r.jsxs)(t.Paragraph,{children:["掌握这套体系，你将全面提升前端架构能力与工程思维，让你的简历多一个能打的 ",(0,r.jsx)(o.Code,{children:"「专家级项目」"}),"。"]})]})}e.s(["Promote",()=>i],70910),e.s([],70939)},5535,e=>{"use strict";var r=e.i(45100),o=e.i(18694);e.i(82928);var t=e.i(72304),i=e.i(2697),n=e.i(47445),a=e.i(69389);e.i(70939);var c=e.i(70910);function d(e){let d={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.useMDXComponents)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.H1,{children:"简单封装 Radio 组件"}),"\n",(0,r.jsx)(i.AvatarM,{}),"\n",(0,r.jsx)(t.ImageTypography,{src:"/radio/radio.webp",fill:!0,alt:"radio"}),"\n",(0,r.jsxs)(d.p,{children:["注：以下样式使用的是 ",(0,r.jsx)(d.code,{children:"tailwindcss"})," 类名。你可以完全使用 ",(0,r.jsx)(d.code,{children:"css"})," 类名来代替，我们也会写对应的 ",(0,r.jsx)(d.code,{children:"css"})," 样式。样式都很简单。"]}),"\n",(0,r.jsx)(d.h2,{children:"1、去掉浏览器默认样式"}),"\n",(0,r.jsxs)(d.p,{children:["我们要自定义 ",(0,r.jsx)(d.code,{children:"radio"})," 样式的第一步，自然是去掉浏览器默认 ",(0,r.jsx)(d.code,{children:"radio"})," 样式。"]}),"\n",(0,r.jsx)(n.CodeBlock,{code:`import { Radio, RadioProps } from '@t-headless-ui/react';
import { cs } from '@/_utils';

export const TRadio = ({ children, className, ...rest }: RadioProps) => {
return (
  <Radio.Root
    className={cs(
      'radio-wrapper relative',
      '[&_>input[type="radio"]]:absolute [&_>input[type="radio"]]:left-0 [&_>input[type="radio"]]:top-0 [&_>input[type="radio"]]:opacity-0, [&_>input[type="radio"]]:w-0 [&_>input[type="radio"]]:h-0',
      className,
    )}
    {...rest}
  >
    {children}
  </Radio.Root>
);
};`,language:"jsx"}),"\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.code,{children:"Radio.Root"})," 其实就是 ",(0,r.jsx)(d.code,{children:"<label>"})," 元素。"]}),"\n",(0,r.jsxs)(d.p,{children:["上面的逻辑非常简单，就是将 ",(0,r.jsx)(d.code,{children:"input"}),"元素的宽高都设置为 ",(0,r.jsx)(d.code,{children:"0"}),"，并将其透明度设置为 ",(0,r.jsx)(d.code,{children:"0"}),"，这样就隐藏了默认的 ",(0,r.jsx)(d.code,{children:"radio"})," 样式。\n并且我们为了 ",(0,r.jsx)(d.code,{children:"input"})," 元素限制在 ",(0,r.jsx)(d.code,{children:"Radio.Root"})," 元素内，所以我们将 ",(0,r.jsx)(d.code,{children:"input"})," 元素的 ",(0,r.jsx)(d.code,{children:"position"})," 设置为 ",(0,r.jsx)(d.code,{children:"absolute"}),"。"]}),"\n",(0,r.jsx)(n.CodeBlock,{code:`/* 父元素 */
.radio-wrapper {
  position: relative;
}

/* 选择直接子元素 input[type="radio"] */
.radio-wrapper > input[type="radio"] {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  width: 0;
  height: 0;
}`,language:"css"}),"\n",(0,r.jsxs)(d.p,{children:["然后，我们需要为了布局方便，设置一些 ",(0,r.jsx)(d.code,{children:"flex"})," 居中相关样式"]}),"\n",(0,r.jsx)(n.CodeBlock,{code:`import { Radio, RadioProps } from '@t-headless-ui/react';
import { cs } from '@/_utils';

export const TRadio = ({ children, className, ...rest }: RadioProps) => {
return (
  <Radio.Root
    className={cs(
      'radio-wrapper relative flex cursor-pointer items-center text-base group',
      '[&_>input[type="radio"]]:absolute [&_>input[type="radio"]]:left-0 [&_>input[type="radio"]]:top-0 [&_>input[type="radio"]]:opacity-0, [&_>input[type="radio"]]:w-0 [&_>input[type="radio"]]:h-0',
      className,
    )}
    {...rest}
  >
    {children}
  </Radio.Root>
);
};`,language:"jsx"}),"\n",(0,r.jsxs)(d.p,{children:["我们写出对应的 ",(0,r.jsx)(d.code,{children:"css"})," 样式"]}),"\n",(0,r.jsx)(n.CodeBlock,{code:`/* 父元素 */
.radio-wrapper {
position: relative;
display: flex;
cursor: pointer;
align-items: center;
font-size: 1rem; /* text-base */
}

/* 直接子元素 input[type="radio"] */
.radio-wrapper > input[type="radio"] {
position: absolute;
left: 0;
top: 0;
opacity: 0;
width: 0;
height: 0;
}`,language:"css"}),"\n",(0,r.jsx)(d.h2,{children:"2、结合状态"}),"\n",(0,r.jsxs)(d.p,{children:["因为 ",(0,r.jsx)(d.code,{children:"radio"})," 组件包含很多状态，不同的状态往往对应不同的 ",(0,r.jsx)(d.code,{children:"ui"}),", 所以我们需要根据不同的状态来设置不同的样式。"]}),"\n",(0,r.jsxs)(d.p,{children:["我们的 ",(0,r.jsx)(d.code,{children:"Radio.Root"})," 帮我们内置了一些 ",(0,r.jsx)(d.code,{children:"css"})," 类名，我们可以直接使用这些类名来设置不同的状态样式。"]}),"\n",(0,r.jsxs)(d.ul,{children:["\n",(0,r.jsxs)(d.li,{children:[(0,r.jsx)(d.code,{children:'[&[aria-disabled="true"]]:cursor-not-allowed [&[aria-disabled="true"]]:text-color-400'}),"：禁用状态"]}),"\n",(0,r.jsxs)(d.li,{children:[(0,r.jsx)(d.code,{children:'[&[aria-readonly="true"]]:cursor-default'}),"：只读状态"]}),"\n"]}),"\n",(0,r.jsxs)(d.p,{children:["对应 ",(0,r.jsx)(d.code,{children:"css"})," 样式："]}),"\n",(0,r.jsx)(n.CodeBlock,{code:`/* 父元素 */
.radio-wrapper {
position: relative;
display: flex;
cursor: pointer;
align-items: center;
font-size: 1rem; /* text-base */
}

/* 子 radio 隐藏并覆盖在左上 */
.radio-wrapper > input[type="radio"] {
position: absolute;
left: 0;
top: 0;
opacity: 0;
width: 0;
height: 0;
}

/* 禁用状态（aria-disabled="true"） */
.radio-wrapper[aria-disabled="true"] {
cursor: not-allowed;
color: var(--color-400); /* 对应 text-color-400 */
}

/* 只读状态（aria-readonly="true"） */
.radio-wrapper[aria-readonly="true"] {
cursor: default;
}`,language:"css"}),"\n",(0,r.jsx)(d.h2,{children:"3、自定义样式"}),"\n",(0,r.jsxs)(d.p,{children:["我们单独写一个组件，来实现自定义 ",(0,r.jsx)(d.code,{children:"radio"})," 样式, 我们取名为 ",(0,r.jsx)(d.code,{children:"Indicator"}),"。"]}),"\n",(0,r.jsx)(n.CodeBlock,{code:`import { Radio, RadioProps } from '@t-headless-ui/react';
import { cs } from '@/_utils';

function Indicator() {
const { checked, disabled, readonly } = useContext(Radio.RadioContext);

return (

<div
className={cs(
  'radio-icon relative border border-color border-solid rounded-full w-4 h-4 transition-all duration-300 shadow-sm after:transition-all after:duration-300',
  'after:content-[""] after:absolute after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:w-[7px] after:h-[7px] after:rounded-full after:bg-none',
  {
    'after:bg-color-800': checked && !disabled,
    'after:bg-color-200': checked && disabled,
    'cursor-not-allowed': disabled,
    'hover:border-color-100 group-hover:border-color-100': !disabled && !readonly,
    'cursor-default': readonly,
  },
)}
></div>
); }`,language:"jsx"}),"\n",(0,r.jsx)(d.p,{children:"首先说明一下："}),"\n",(0,r.jsxs)(d.ul,{children:["\n",(0,r.jsxs)(d.li,{children:[(0,r.jsx)(d.code,{children:"useContext(Radio.RadioContext)"})," 用来获取 ",(0,r.jsx)(d.code,{children:"radio"})," 组件的状态，比如 ",(0,r.jsx)(d.code,{children:"checked"}),", ",(0,r.jsx)(d.code,{children:"disabled"}),", ",(0,r.jsx)(d.code,{children:"readonly"})," 等等。"]}),"\n",(0,r.jsxs)(d.li,{children:[(0,r.jsx)(d.code,{children:"cs"})," 是一个 ",(0,r.jsx)(d.code,{children:"classnames"})," 库的函数，用来合并 ",(0,r.jsx)(d.code,{children:"class"})," 名。"]}),"\n"]}),"\n",(0,r.jsxs)(d.p,{children:["因为我们在之前说过，",(0,r.jsx)(d.code,{children:"Radio"})," 组件的本质就是切换 ",(0,r.jsx)(d.code,{children:"checked"})," 状态而已，所以我们通过 ",(0,r.jsx)(d.code,{children:"context"})," api 来共享这些状态。"]}),"\n",(0,r.jsxs)(d.p,{children:["然后 ",(0,r.jsx)(d.code,{children:"css"})," 部分如下，说白了就是画了一个圆形的 ",(0,r.jsx)(d.code,{children:"div"}),"，并根据 ",(0,r.jsx)(d.code,{children:"checked"})," 状态来设置不同的样式。当然注意 ",(0,r.jsx)(d.code,{children:"disabled"}),", ",(0,r.jsx)(d.code,{children:"readonly"})," 状态下的样式。"]}),"\n",(0,r.jsx)(n.CodeBlock,{code:`.radio-icon {
position: relative;
width: 1rem; /* w-4 */
height: 1rem; /* h-4 */
border: 1px solid var(--color);
border-radius: 9999px; /* rounded-full */
transition: all 0.3s;
box-shadow: var(--shadow-sm);
}

/* 圆点（选中状态的伪元素） */
.radio-icon::after {
content: "";
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 7px;
height: 7px;
border-radius: 9999px;
background: none;
transition: all 0.3s;
}

/* -------- 状态控制：checked + enabled -------- */

/* checked + !disabled */
.radio-icon.checked:not(.disabled)::after {
background: var(--color-800);
}

/* checked + disabled */
.radio-icon.checked.disabled::after {
background: var(--color-200);
}

/* -------- 禁用状态 -------- */
.radio-icon.disabled {
cursor: not-allowed;
}

/* -------- 悬停状态（可点击且非只读）-------- */
.radio-icon.hoverable:hover,
.radio-icon.hoverable.group-hover {
border-color: var(--color-100);
}

/* -------- 只读状态 -------- */
.radio-icon.readonly {
cursor: default;
}`,language:"css"}),"\n",(0,r.jsx)(d.h2,{children:"4、小结"}),"\n",(0,r.jsx)(d.p,{children:"我们贴上完整代码："}),"\n",(0,r.jsx)(n.CodeBlock,{code:`import React, { useContext } from 'react';
import { Radio, RadioProps } from '@t-headless-ui/react';
import { cs } from '@/_utils';

export const TRadio = ({ children, className, ...rest }: RadioProps) => {
return (
  <Radio.Root
    className={cs(
      'relative flex cursor-pointer items-center text-base group',
      '[&_>input[type="radio"]]:absolute [&_>input[type="radio"]]:left-0 [&_>input[type="radio"]]:top-0 [&_>input[type="radio"]]:opacity-0, [&_>input[type="radio"]]:w-0 [&_>input[type="radio"]]:h-0',
      '[&[aria-disabled="true"]]:cursor-not-allowed [&[aria-disabled="true"]]:text-color-400',
      '[&[aria-readonly="true"]]:cursor-default',
      className,
    )}
    {...rest}
  >
    <Indicator />
    <div className="ml-2">{children}</div>
  </Radio.Root>
);
};

function Indicator() {
const { checked, disabled, readonly } = useContext(Radio.RadioContext);

return (
  <div
    className={cs(
      'relative border border-color border-solid rounded-full w-4 h-4 transition-all duration-300 shadow-sm after:transition-all after:duration-300',
      'after:content-[""] after:absolute after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:w-[7px] after:h-[7px] after:rounded-full after:bg-none',
      {
        'after:bg-color-800': checked && !disabled,
        'after:bg-color-200': checked && disabled,
        'cursor-not-allowed': disabled,
        'hover:border-color-100 group-hover:border-color-100': !disabled && !readonly,
        'cursor-default': readonly,
      },
    )}
  ></div>
);
}`,language:"jsx"}),"\n",(0,r.jsx)(d.h2,{children:"更多内容"}),"\n",(0,r.jsx)(d.p,{children:"如果想讨论更多内容，欢迎加入简历亮点交流群，一起交流。"}),"\n",(0,r.jsx)(d.h2,{children:"欢迎加入简历亮点交流群"}),"\n",(0,r.jsx)(c.Promote,{})]})}function s(e={}){let{wrapper:t}={...(0,o.useMDXComponents)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}function l(){return(0,r.jsx)(s,{})}e.s(["HowMakeCssRadio",()=>l],5535)}]);