(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1521,(e,r,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"warnOnce",{enumerable:!0,get:function(){return t}});let t=e=>{}},79537,e=>{e.v({AElig:"Æ",AMP:"&",Aacute:"Á",Acirc:"Â",Agrave:"À",Aring:"Å",Atilde:"Ã",Auml:"Ä",COPY:"©",Ccedil:"Ç",ETH:"Ð",Eacute:"É",Ecirc:"Ê",Egrave:"È",Euml:"Ë",GT:">",Iacute:"Í",Icirc:"Î",Igrave:"Ì",Iuml:"Ï",LT:"<",Ntilde:"Ñ",Oacute:"Ó",Ocirc:"Ô",Ograve:"Ò",Oslash:"Ø",Otilde:"Õ",Ouml:"Ö",QUOT:'"',REG:"®",THORN:"Þ",Uacute:"Ú",Ucirc:"Û",Ugrave:"Ù",Uuml:"Ü",Yacute:"Ý",aacute:"á",acirc:"â",acute:"´",aelig:"æ",agrave:"à",amp:"&",aring:"å",atilde:"ã",auml:"ä",brvbar:"¦",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",ecirc:"ê",egrave:"è",eth:"ð",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",iacute:"í",icirc:"î",iexcl:"¡",igrave:"ì",iquest:"¿",iuml:"ï",laquo:"«",lt:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",oacute:"ó",ocirc:"ô",ograve:"ò",ordf:"ª",ordm:"º",oslash:"ø",otilde:"õ",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',raquo:"»",reg:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",times:"×",uacute:"ú",ucirc:"û",ugrave:"ù",uml:"¨",uuml:"ü",yacute:"ý",yen:"¥",yuml:"ÿ"})},27208,e=>{e.v({0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"})},73850,e=>{"use strict";var r=e.i(45100);let o=(0,e.i(51849).createIcon)({iconProps:{useFillCurrentColor:!0},viewBox:"0 0 156 94",paths:(0,r.jsx)("path",{d:"M0,31.18h31.18v62.56H0V31.18Zm155.46,5.67v56.89h-31.18V45.36c0-7.83-6.34-14.18-14.17-14.18h-17.01c.29,1.85,.44,3.74,.44,5.67v56.89h-31.18V45.36c0-7.83-6.35-14.18-14.17-14.18H31.18V0h25.51c13.15,0,24.69,6.89,31.21,17.25,2.62,4.15,4.43,8.86,5.2,13.92V0h25.51c20.35,0,36.85,16.5,36.85,36.85Z"})});e.s(["IconMLogo",0,o])},7823,e=>{"use strict";function r(e,r){if(null==e)return{};var o={};for(var t in e)if(({}).hasOwnProperty.call(e,t)){if(-1!==r.indexOf(t))continue;o[t]=e[t]}return o}e.s(["default",()=>r])},37215,e=>{"use strict";function r(){return(r=Object.assign.bind()).apply(null,arguments)}e.s(["default",()=>r])},22480,e=>{"use strict";let r=(0,e.i(64334).createContext)({currentId:"",onLinkClick:()=>{},linkMap:{current:new Map}});e.s(["AnchorContext",0,r])},98319,e=>{"use strict";var r=e.i(64334);function o(...e){return(0,r.useCallback)(r=>{e.forEach(e=>{"function"==typeof e?e(r):null!=e&&(e.current=r)})},e)}e.s(["useComposedRefs",()=>o])},88036,e=>{"use strict";var r=e.i(45100),o=e.i(64334),t=e.i(22480);function c(e){let r=(0,o.useRef)(null);return r.current=e,(0,o.useCallback)((...e)=>r.current?.(...e),[])}var n=e.i(96224);function i(e,r){try{return e.querySelector(r)}catch(e){return null}}function s({scrollContainer:e,targetId:r,offset:o,isScrolling:t}){var c,s;if(!r)return;let a=i(document,`#${CSS.escape(r)}`);if(!a)return;let l=e.current,d=((void 0===(c=l)&&(c=window),c)&&(c===window?Math.ceil(window.pageYOffset):c.scrollTop)||0)+((e,r)=>{if(!e.getClientRects().length)return 0;let o=e.getBoundingClientRect();return o.width||o.height?r&&r!==window?o.top-r.getBoundingClientRect().top:(r=e.ownerDocument.documentElement,o.top-r.clientTop):o.top})(a,l)+o;(t.current=!0,(0,n.isWindow)(l))?l.scrollTo((void 0===(s=l)&&(s=window),s)&&(s===window?Math.ceil(window.pageXOffset||window.scrollX):s.scrollLeft)||0,d):l.scrollTop=d}function a({targetId:e,linkMap:r,wrapperRef:o,currentId:t,setCurrentId:c,onChange:n}){e&&o.current&&r.current.get(e)&&e!==t&&c(e).then(()=>{n?.(e,t)})}var l=e.i(98319);let d=(0,o.forwardRef)((e,d)=>{let{scrollContainer:u,offset:h=0,children:x,onChange:p,queryKey:b="anchor-id",isCloseInitAnchor:f,...m}=e,{currentId:k,onLinkClick:j,wrapperRef:g,linkMap:v}=function({propScrollContainer:e,onChange:r,offset:t,queryKey:l,isCloseInitAnchor:d}){var u;let h,x,p=(0,o.useRef)(null),b=(0,o.useRef)(null),f=(0,o.useRef)(new Map),m=(0,o.useRef)(!1),[k,j]=function(e){let[r,t]=(0,o.useState)({value:"",resolve:e=>{}});return(0,o.useEffect)(()=>{r.resolve(r.value)},[r]),[r.value,e=>new Promise(r=>{t(o=>{let t=e;return"function"==typeof e&&(t=e(o.value)),{value:t,resolve:r}})})]}(0),g=c(()=>{if(m.current)return;let e=function({linkMap:e,scrollContainer:r}){let o=r.current,t=((0,n.isWindow)(o)?document.documentElement||document.body:o).getBoundingClientRect(),c=Array.from(e.current.keys()),s=[];for(let e of c){let r=i(document,"#"+CSS.escape(e));if(r){let{top:e}=r.getBoundingClientRect(),c=(0,n.isWindow)(o)?e:e-t.top;c>=0&&s.push({element:r,top:c})}}return 0===s.length?null:s.reduce((e,r)=>e.top<=r.top?e:r).element}({linkMap:f,scrollContainer:b});e?.id&&a({targetId:e.id,linkMap:f,wrapperRef:p,currentId:k,setCurrentId:j,onChange:r})}),v=c((u=()=>{g(),m.current=!1},h=null,(x=(...e)=>{h||(h=setTimeout(()=>{h=null,u(...e)},30))}).cancel=()=>{h&&(clearTimeout(h),h=null)},x));return(0,o.useEffect)(()=>(b.current=(0,n.isString)(e)?i(document,e):e||window,b.current?.addEventListener("scroll",v),()=>{b.current?.removeEventListener("scroll",v)}),[v,e]),(0,o.useEffect)(()=>{if(!d)return void v();let e=new URLSearchParams(new URL(window.location.href).search).get(l);e&&(a({targetId:e,linkMap:f,wrapperRef:p,currentId:k,setCurrentId:j,onChange:r}),s({scrollContainer:b,targetId:e,offset:t,isScrolling:m}))},[]),{onScroll:v,currentId:k,onLinkClick:function(e,o){e.preventDefault(),a({targetId:o,linkMap:f,wrapperRef:p,currentId:k,setCurrentId:j,onChange:r}),s({scrollContainer:b,targetId:o,offset:t,isScrolling:m})},wrapperRef:p,scrollContainer:b,linkMap:f}}({propScrollContainer:u,onChange:p,offset:h,queryKey:b,isCloseInitAnchor:f});return(0,r.jsx)(t.AnchorContext.Provider,{value:{currentId:k,linkMap:v,onLinkClick:j},children:(0,r.jsx)("div",{...m,ref:(0,l.useComposedRefs)(g,d),children:x})})});e.s(["Anchor",0,d],88036)},69438,e=>{"use strict";var r=e.i(45100),o=e.i(64334),t=e.i(22480),c=e.i(98319);let n=(0,o.forwardRef)((e,n)=>{let{onLinkClick:i,linkMap:s,currentId:a}=(0,o.useContext)(t.AnchorContext),{onClick:l,targetId:d,children:u,className:h,activeClassName:x,...p}=e,b=(0,o.useRef)(null);return(0,o.useEffect)(()=>{var e;return e=b.current,d&&s.current.set(d,e),()=>{s.current.delete(d)}},[d,s]),(0,r.jsx)("div",{ref:(0,c.useComposedRefs)(n,b),...p,onClick:e=>{e.stopPropagation(),l?.(e),i?.(e,d)},"data-target-id":d,className:a===d?x:h,children:u})});e.s(["AnchorLink",0,n],69438)},93562,e=>{"use strict";var r=e.i(88036),o=e.i(69438),t=e.i(22480);let c={Root:r.Anchor,Link:o.AnchorLink,Context:t.AnchorContext};e.s(["Anchor",()=>c])},70939,70910,e=>{"use strict";var r=e.i(45100);e.i(82928);var o=e.i(93612),t=e.i(89546);function c(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(t.Paragraph,{children:["如果什么项目能覆盖常见的开发中的核心技术，那莫过于这套 从 0 到 1 打造的 ",(0,r.jsx)(o.Code,{children:"企业级"})," 前端组件库的项目了。"]}),(0,r.jsxs)(t.Paragraph,{children:["如果还在发愁建立有什么亮点项目能让面试官眼前一亮，让你在其它面试者中 ",(0,r.jsx)(o.Code,{children:"脱颖而出"}),"，那这个项目就是你需要的。"]}),(0,r.jsxs)(t.Paragraph,{children:["可以根据你的需要，",(0,r.jsx)(o.Code,{children:"定制化"})," 地帮你我来帮你写出符合你需求的项目。这个项目水平如何，效果可见，源码可见，无需多言。"]}),(0,r.jsxs)(t.Paragraph,{children:["掌握这套体系，你将全面提升前端架构能力与工程思维，让你的简历多一个能打的 ",(0,r.jsx)(o.Code,{children:"「专家级项目」"}),"。"]})]})}e.s(["Promote",()=>c],70910),e.s([],70939)},90507,e=>{"use strict";var r=e.i(45100),o=e.i(18694);e.i(82928);var t=e.i(72304),c=e.i(2697),n=e.i(47445),i=e.i(69389);e.i(70939);var s=e.i(70910);function a(e){let a={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.useMDXComponents)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.H1,{children:"简单封装 Checkbox 组件"}),"\n",(0,r.jsx)(c.AvatarM,{}),"\n",(0,r.jsx)(t.ImageTypography,{src:"/checkbox/checkbox.webp",fill:!0,alt:"checkbox"}),"\n",(0,r.jsxs)(a.p,{children:["注：以下样式使用的是 ",(0,r.jsx)(a.code,{children:"tailwindcss"})," 类名。你可以完全使用 ",(0,r.jsx)(a.code,{children:"css"})," 类名来代替，我们也会写对应的 ",(0,r.jsx)(a.code,{children:"css"})," 样式。样式都很简单。"]}),"\n",(0,r.jsx)(a.h2,{children:"1、去掉浏览器默认样式"}),"\n",(0,r.jsxs)(a.p,{children:["我们要自定义 ",(0,r.jsx)(a.code,{children:"checkbox"})," 样式的第一步，自然是去掉浏览器默认 ",(0,r.jsx)(a.code,{children:"checkbox"})," 样式。"]}),"\n",(0,r.jsx)(n.CodeBlock,{code:`import { Checkbox, CheckboxProps } from '@t-headless-ui/react';
import { cs } from '@/_utils';

export const TCheckbox = ({ children, className, ...rest }: CheckboxProps) => {
return (
  <Checkbox.Root
    className={cs(
      'checkbox-wrapper relative',
      '[&_>input[type="checkbox"]]:absolute [&_>input[type="checkbox"]]:left-0 [&_>input[type="checkbox"]]:top-0 [&_>input[type="checkbox"]]:opacity-0, [&_>input[type="checkbox"]]:w-0 [&_>input[type="checkbox"]]:h-0',
      className,
    )}
    {...rest}
  >
    <Indicator />
    <div className="ml-2">{children}</div>
  </Checkbox.Root>
);
}`,language:"jsx"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"Checkbox.Root"})," 其实就是 ",(0,r.jsx)(a.code,{children:"<label>"})," 元素。"]}),"\n",(0,r.jsxs)(a.p,{children:["上面的逻辑非常简单，就是将 ",(0,r.jsx)(a.code,{children:"input"}),"元素的宽高都设置为 ",(0,r.jsx)(a.code,{children:"0"}),"，并将其透明度设置为 ",(0,r.jsx)(a.code,{children:"0"}),"，这样就隐藏了默认的 ",(0,r.jsx)(a.code,{children:"checkbox"})," 样式。\n并且我们为了 ",(0,r.jsx)(a.code,{children:"input"})," 元素限制在 ",(0,r.jsx)(a.code,{children:"Checkbox.Root"})," 元素内，所以我们将 ",(0,r.jsx)(a.code,{children:"input"})," 元素的 ",(0,r.jsx)(a.code,{children:"position"})," 设置为 ",(0,r.jsx)(a.code,{children:"absolute"}),"。"]}),"\n",(0,r.jsx)(n.CodeBlock,{code:`/* 父元素 */
.checkbox-wrapper {
  position: relative;
}

/* 选择直接子元素 input[type="checkbox"] */
.checkbox-wrapper > input[type="checkbox"] {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  width: 0;
  height: 0;
}`,language:"css"}),"\n",(0,r.jsxs)(a.p,{children:["然后，我们需要为了布局方便，设置一些 ",(0,r.jsx)(a.code,{children:"flex"})," 居中相关样式"]}),"\n",(0,r.jsx)(n.CodeBlock,{code:`import { Checkbox, CheckboxProps } from '@t-headless-ui/react';
import { cs } from '@/_utils';

export const TCheckbox = ({ children, className, ...rest }: CheckboxProps) => {
return (
  <Checkbox.Root
    className={cs(
      'relative flex cursor-pointer items-center text-base group',
      '[&_>input[type="checkbox"]]:absolute [&_>input[type="checkbox"]]:left-0 [&_>input[type="checkbox"]]:top-0 [&_>input[type="checkbox"]]:opacity-0, [&_>input[type="checkbox"]]:w-0 [&_>input[type="checkbox"]]:h-0',
      className,
    )}
    {...rest}
  >
    <Indicator />
    <div className="ml-2">{children}</div>
  </Checkbox.Root>
);
};`,language:"jsx"}),"\n",(0,r.jsxs)(a.p,{children:["我们写出对应的 ",(0,r.jsx)(a.code,{children:"css"})," 样式"]}),"\n",(0,r.jsx)(n.CodeBlock,{code:`/* 父元素 */
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
}`,language:"css"}),"\n",(0,r.jsx)(a.h2,{children:"2、结合状态"}),"\n",(0,r.jsxs)(a.p,{children:["因为 ",(0,r.jsx)(a.code,{children:"Checkbox"})," 组件包含很多状态，不同的状态往往对应不同的 ",(0,r.jsx)(a.code,{children:"ui"}),", 所以我们需要根据不同的状态来设置不同的样式。"]}),"\n",(0,r.jsxs)(a.p,{children:["我们的 ",(0,r.jsx)(a.code,{children:"Checkbox.Root"})," 帮我们内置了一些 ",(0,r.jsx)(a.code,{children:"css"})," 类名，我们可以直接使用这些类名来设置不同的状态样式。"]}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:'[&[aria-disabled="true"]]:cursor-not-allowed [&[aria-disabled="true"]]:text-color-400'}),"：禁用状态"]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:'[&[aria-readonly="true"]]:cursor-default'}),"：只读状态"]}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:["对应 ",(0,r.jsx)(a.code,{children:"css"})," 样式："]}),"\n",(0,r.jsx)(n.CodeBlock,{code:`/* 父元素 */
.checkbox-wrapper {
position: relative;
display: flex;
cursor: pointer;
align-items: center;
font-size: 1rem; /* text-base */
}

/* 子 checkbox 隐藏并覆盖在左上 */
.checkbox-wrapper > input[type="checkbox"] {
position: absolute;
left: 0;
top: 0;
opacity: 0;
width: 0;
height: 0;
}

/* 禁用状态（aria-disabled="true"） */
.checkbox-wrapper[aria-disabled="true"] {
cursor: not-allowed;
color: var(--color-400); /* 对应 text-color-400 */
}

/* 只读状态（aria-readonly="true"） */
.checkbox-wrapper[aria-readonly="true"] {
cursor: default;
}`,language:"css"}),"\n",(0,r.jsx)(a.p,{children:"代码为："}),"\n",(0,r.jsx)(n.CodeBlock,{code:`import { Checkbox, CheckboxProps } from '@t-headless-ui/react';
import { cs } from '@/_utils';

const TCheckbox = ({ children, className, ...rest }: CheckboxProps) => {
return (
  <Checkbox.Root
    className={cs(
      'relative flex cursor-pointer items-center text-base group',
      '[&_>input[type="checkbox"]]:absolute [&_>input[type="checkbox"]]:left-0 [&_>input[type="checkbox"]]:top-0 [&_>input[type="checkbox"]]:opacity-0, [&_>input[type="checkbox"]]:w-0 [&_>input[type="checkbox"]]:h-0',
      '[&[aria-disabled="true"]]:cursor-not-allowed [&[aria-disabled="true"]]:text-color-400',
      '[&[aria-readonly="true"]]:cursor-default',
      className,
    )}
    {...rest}
  >
    <Indicator />
    <div className="ml-2">{children}</div>
  </Checkbox.Root>
);
};`,language:"jsx"}),"\n",(0,r.jsx)(a.h2,{children:"3、自定义样式"}),"\n",(0,r.jsxs)(a.p,{children:["我们单独写一个组件，来实现自定义 ",(0,r.jsx)(a.code,{children:"radio"})," 样式, 我们取名为 ",(0,r.jsx)(a.code,{children:"Indicator"}),"。"]}),"\n",(0,r.jsx)(n.CodeBlock,{code:`import { Radio, RadioProps } from '@t-headless-ui/react';
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
); }`,language:"jsx"}),"\n",(0,r.jsx)(a.p,{children:"首先说明一下："}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"useContext(Checkbox.CheckboxContext)"})," 用来获取 ",(0,r.jsx)(a.code,{children:"checkbox"})," 组件的状态，比如 ",(0,r.jsx)(a.code,{children:"checked"}),", ",(0,r.jsx)(a.code,{children:"disabled"}),", ",(0,r.jsx)(a.code,{children:"readonly"}),", ",(0,r.jsx)(a.code,{children:"indeterminate"})," 等等。"]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"cs"})," 是一个 ",(0,r.jsx)(a.code,{children:"classnames"})," 库的函数，用来合并 ",(0,r.jsx)(a.code,{children:"class"})," 名。"]}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:["因为我们在之前说过，",(0,r.jsx)(a.code,{children:"Checkbox"})," 组件的本质就是切换 ",(0,r.jsx)(a.code,{children:"checked"})," 状态而已，所以我们通过 ",(0,r.jsx)(a.code,{children:"context"})," api 来共享这些状态。"]}),"\n",(0,r.jsxs)(a.p,{children:["css 样式如下, 组件库内置提供了 ",(0,r.jsx)(a.code,{children:"Checkbox.IconCheck"})," 组件，本质就是一个 ",(0,r.jsx)(a.code,{children:"svg"})," 图标，显示一个对号（✅）。"]}),"\n",(0,r.jsxs)(a.p,{children:["当然注意 ",(0,r.jsx)(a.code,{children:"disabled"}),", ",(0,r.jsx)(a.code,{children:"readonly"})," 状态下的样式。"]}),"\n",(0,r.jsxs)(a.p,{children:["以下是 ",(0,r.jsx)(a.code,{children:"tailwindcss"})," 对应的样式："]}),"\n",(0,r.jsx)(n.CodeBlock,{code:`function Indicator() {
const { checked, disabled, readonly, indeterminate } = useContext(Checkbox.CheckboxContext);

return (
  <div
    className={cs(
      'indicator relative border border-color border-solid rounded-md w-4 h-4 transition-all duration-300 shadow-sm after:transition-all after:duration-300 flex justify-center items-center',
      'after:content-[""] after:absolute after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:h-[16px] after:w-[16px] after:rounded-md after:bg-none',
      'before:content-[""] before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:h-[3px] before:w-[8px] before:rounded-[1px] before:bg-none',
      {
        'after:bg-color-reverse': checked && !disabled,
        'after:bg-color-100': checked && disabled,
        'before:bg-color-reverse': indeterminate && !disabled,
        'before:bg-zinc-300': indeterminate && disabled,
        'cursor-not-allowed': disabled,
        'hover:border-color-100 group-hover:border-color-100': !disabled && !readonly,
        'cursor-default': readonly,
      },
    )}
  >
    <Checkbox.IconCheck
      className={cs('text-transparent relative scale-90 origin-center transition-all duration-300 w-3 h-3 z-[1]', {
        'text-color-reverse': checked && !disabled,
        'text-zinc-300': checked && disabled,
      })}
    />
  </div>
);
}`,language:"css"}),"\n",(0,r.jsx)(a.p,{children:"转化为对应的 css 样式如下:"}),"\n",(0,r.jsx)(n.CodeBlock,{code:`.indicator {
position: relative;
border: 1px solid var(--color); /* border-color */
border-radius: 0.375rem; /* rounded-md */
width: 1rem;  /* w-4 */
height: 1rem; /* h-4 */
transition: all 0.3s;
box-shadow: 0 1px 2px rgb(0 0 0 / 0.05); /* shadow-sm */
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
}

/* ::after —— 外层方块 */
.indicator::after {
content: "";
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
height: 16px;
width: 16px;
border-radius: 0.375rem;
background: none;
transition: all 0.3s;
}

/* ::before —— 中间横线（indeterminate） */
.indicator::before {
content: "";
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
height: 3px;
width: 8px;
border-radius: 1px;
background: none;
}

/* 状态类：checked & !disabled */
.indicator.checked::after {
background: var(--color-reverse);
}

/* checked & disabled */
.indicator.checked-disabled::after {
background: var(--color-100);
}

/* indeterminate & !disabled */
.indicator.indeterminate::before {
background: var(--color-reverse);
}

/* indeterminate & disabled */
.indicator.indeterminate-disabled::before {
background: rgb(212, 212, 216); /* zinc-300 */
}

/* disabled */
.indicator.disabled {
cursor: not-allowed;
}

/* hover 可用时 */
.indicator.hoverable:hover,
.indicator.hoverable.group-hover {
border-color: var(--color-100);
}

/* readonly */
.indicator.readonly {
cursor: default;
}`,language:"css"}),"\n",(0,r.jsx)(a.h2,{children:"4、小结"}),"\n",(0,r.jsx)(a.p,{children:"我们贴上完整代码："}),"\n",(0,r.jsx)(n.CodeBlock,{code:`import React, { useContext } from 'react';
import { Radio, RadioProps } from '@t-headless-ui/react';
import { cs } from '@/_utils';

xport const TCheckbox = ({ children, className, ...rest }: CheckboxProps) => {
return (
  <Checkbox.Root
    className={cs(
      'relative flex cursor-pointer items-center text-base group',
      '[&_>input[type="checkbox"]]:absolute [&_>input[type="checkbox"]]:left-0 [&_>input[type="checkbox"]]:top-0 [&_>input[type="checkbox"]]:opacity-0, [&_>input[type="checkbox"]]:w-0 [&_>input[type="checkbox"]]:h-0',
      '[&[aria-disabled="true"]]:cursor-not-allowed [&[aria-disabled="true"]]:text-color-400',
      '[&[aria-readonly="true"]]:cursor-default',
      className,
    )}
    {...rest}
  >
    <Indicator />
    <div className="ml-2">{children}</div>
  </Checkbox.Root>
);
};

function Indicator() {
const { checked, disabled, readonly, indeterminate } = useContext(Checkbox.CheckboxContext);

return (
  <div
    className={cs(
      'relative border border-color border-solid rounded-md w-4 h-4 transition-all duration-300 shadow-sm after:transition-all after:duration-300 flex justify-center items-center',
      'after:content-[""] after:absolute after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:h-[16px] after:w-[16px] after:rounded-md after:bg-none',
      'before:content-[""] before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:h-[3px] before:w-[8px] before:rounded-[1px] before:bg-none',
      {
        'after:bg-color-reverse': checked && !disabled,
        'after:bg-color-100': checked && disabled,
        'before:bg-color-reverse': indeterminate && !disabled,
        'before:bg-zinc-300': indeterminate && disabled,
        'cursor-not-allowed': disabled,
        'hover:border-color-100 group-hover:border-color-100': !disabled && !readonly,
        'cursor-default': readonly,
      },
    )}
  >
    <Checkbox.IconCheck
      className={cs('text-transparent relative scale-90 origin-center transition-all duration-300 w-3 h-3 z-[1]', {
        'text-color-reverse': checked && !disabled,
        'text-zinc-300': checked && disabled,
      })}
    />
  </div>
);
}`,language:"jsx"}),"\n",(0,r.jsx)(a.h2,{children:"更多内容"}),"\n",(0,r.jsx)(a.p,{children:"如果想讨论更多内容，欢迎加入简历亮点交流群，一起交流。"}),"\n",(0,r.jsx)(a.h2,{children:"欢迎加入简历亮点交流群"}),"\n",(0,r.jsx)(s.Promote,{})]})}function l(e={}){let{wrapper:t}={...(0,o.useMDXComponents)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}function d(){return(0,r.jsx)(l,{})}e.s(["HowMakeCssCheckbox",()=>d],90507)}]);