(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1521,(e,n,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},79537,e=>{e.v({AElig:"Æ",AMP:"&",Aacute:"Á",Acirc:"Â",Agrave:"À",Aring:"Å",Atilde:"Ã",Auml:"Ä",COPY:"©",Ccedil:"Ç",ETH:"Ð",Eacute:"É",Ecirc:"Ê",Egrave:"È",Euml:"Ë",GT:">",Iacute:"Í",Icirc:"Î",Igrave:"Ì",Iuml:"Ï",LT:"<",Ntilde:"Ñ",Oacute:"Ó",Ocirc:"Ô",Ograve:"Ò",Oslash:"Ø",Otilde:"Õ",Ouml:"Ö",QUOT:'"',REG:"®",THORN:"Þ",Uacute:"Ú",Ucirc:"Û",Ugrave:"Ù",Uuml:"Ü",Yacute:"Ý",aacute:"á",acirc:"â",acute:"´",aelig:"æ",agrave:"à",amp:"&",aring:"å",atilde:"ã",auml:"ä",brvbar:"¦",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",ecirc:"ê",egrave:"è",eth:"ð",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",iacute:"í",icirc:"î",iexcl:"¡",igrave:"ì",iquest:"¿",iuml:"ï",laquo:"«",lt:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",oacute:"ó",ocirc:"ô",ograve:"ò",ordf:"ª",ordm:"º",oslash:"ø",otilde:"õ",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',raquo:"»",reg:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",times:"×",uacute:"ú",ucirc:"û",ugrave:"ù",uml:"¨",uuml:"ü",yacute:"ý",yen:"¥",yuml:"ÿ"})},27208,e=>{e.v({0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"})},73850,e=>{"use strict";var n=e.i(45100);let t=(0,e.i(51849).createIcon)({iconProps:{useFillCurrentColor:!0},viewBox:"0 0 156 94",paths:(0,n.jsx)("path",{d:"M0,31.18h31.18v62.56H0V31.18Zm155.46,5.67v56.89h-31.18V45.36c0-7.83-6.34-14.18-14.17-14.18h-17.01c.29,1.85,.44,3.74,.44,5.67v56.89h-31.18V45.36c0-7.83-6.35-14.18-14.17-14.18H31.18V0h25.51c13.15,0,24.69,6.89,31.21,17.25,2.62,4.15,4.43,8.86,5.2,13.92V0h25.51c20.35,0,36.85,16.5,36.85,36.85Z"})});e.s(["IconMLogo",0,t])},7823,e=>{"use strict";function n(e,n){if(null==e)return{};var t={};for(var i in e)if(({}).hasOwnProperty.call(e,i)){if(-1!==n.indexOf(i))continue;t[i]=e[i]}return t}e.s(["default",()=>n])},37215,e=>{"use strict";function n(){return(n=Object.assign.bind()).apply(null,arguments)}e.s(["default",()=>n])},22480,e=>{"use strict";let n=(0,e.i(64334).createContext)({currentId:"",onLinkClick:()=>{},linkMap:{current:new Map}});e.s(["AnchorContext",0,n])},98319,e=>{"use strict";var n=e.i(64334);function t(...e){return(0,n.useCallback)(n=>{e.forEach(e=>{"function"==typeof e?e(n):null!=e&&(e.current=n)})},e)}e.s(["useComposedRefs",()=>t])},88036,59013,e=>{"use strict";var n=e.i(45100),t=e.i(64334),i=e.i(22480);function o(e){let n=(0,t.useRef)(null);return n.current=e,(0,t.useCallback)((...e)=>n.current?.(...e),[])}e.s(["useEvent",()=>o],59013);var r=e.i(96224);function l(e,n){try{return e.querySelector(n)}catch(e){return null}}function c({scrollContainer:e,targetId:n,offset:t,isScrolling:i}){var o,c;if(!n)return;let s=l(document,`#${CSS.escape(n)}`);if(!s)return;let d=e.current,a=((void 0===(o=d)&&(o=window),o)&&(o===window?Math.ceil(window.pageYOffset):o.scrollTop)||0)+((e,n)=>{if(!e.getClientRects().length)return 0;let t=e.getBoundingClientRect();return t.width||t.height?n&&n!==window?t.top-n.getBoundingClientRect().top:(n=e.ownerDocument.documentElement,t.top-n.clientTop):t.top})(s,d)+t;(i.current=!0,(0,r.isWindow)(d))?d.scrollTo((void 0===(c=d)&&(c=window),c)&&(c===window?Math.ceil(window.pageXOffset||window.scrollX):c.scrollLeft)||0,a):d.scrollTop=a}function s({targetId:e,linkMap:n,wrapperRef:t,currentId:i,setCurrentId:o,onChange:r}){e&&t.current&&n.current.get(e)&&e!==i&&o(e).then(()=>{r?.(e,i)})}var d=e.i(98319);let a=(0,t.forwardRef)((e,a)=>{let{scrollContainer:u,offset:h=0,children:p,onChange:b,queryKey:x="anchor-id",isCloseInitAnchor:f,...g}=e,{currentId:m,onLinkClick:v,wrapperRef:j,linkMap:C}=function({propScrollContainer:e,onChange:n,offset:i,queryKey:d,isCloseInitAnchor:a}){var u;let h,p,b=(0,t.useRef)(null),x=(0,t.useRef)(null),f=(0,t.useRef)(new Map),g=(0,t.useRef)(!1),[m,v]=function(e){let[n,i]=(0,t.useState)({value:"",resolve:e=>{}});return(0,t.useEffect)(()=>{n.resolve(n.value)},[n]),[n.value,e=>new Promise(n=>{i(t=>{let i=e;return"function"==typeof e&&(i=e(t.value)),{value:i,resolve:n}})})]}(0),j=o(()=>{if(g.current)return;let e=function({linkMap:e,scrollContainer:n}){let t=n.current,i=((0,r.isWindow)(t)?document.documentElement||document.body:t).getBoundingClientRect(),o=Array.from(e.current.keys()),c=[];for(let e of o){let n=l(document,"#"+CSS.escape(e));if(n){let{top:e}=n.getBoundingClientRect(),o=(0,r.isWindow)(t)?e:e-i.top;o>=0&&c.push({element:n,top:o})}}return 0===c.length?null:c.reduce((e,n)=>e.top<=n.top?e:n).element}({linkMap:f,scrollContainer:x});e?.id&&s({targetId:e.id,linkMap:f,wrapperRef:b,currentId:m,setCurrentId:v,onChange:n})}),C=o((u=()=>{j(),g.current=!1},h=null,(p=(...e)=>{h||(h=setTimeout(()=>{h=null,u(...e)},30))}).cancel=()=>{h&&(clearTimeout(h),h=null)},p));return(0,t.useEffect)(()=>(x.current=(0,r.isString)(e)?l(document,e):e||window,x.current?.addEventListener("scroll",C),()=>{x.current?.removeEventListener("scroll",C)}),[C,e]),(0,t.useEffect)(()=>{if(!a)return void C();let e=new URLSearchParams(new URL(window.location.href).search).get(d);e&&(s({targetId:e,linkMap:f,wrapperRef:b,currentId:m,setCurrentId:v,onChange:n}),c({scrollContainer:x,targetId:e,offset:i,isScrolling:g}))},[]),{onScroll:C,currentId:m,onLinkClick:function(e,t){e.preventDefault(),s({targetId:t,linkMap:f,wrapperRef:b,currentId:m,setCurrentId:v,onChange:n}),c({scrollContainer:x,targetId:t,offset:i,isScrolling:g})},wrapperRef:b,scrollContainer:x,linkMap:f}}({propScrollContainer:u,onChange:b,offset:h,queryKey:x,isCloseInitAnchor:f});return(0,n.jsx)(i.AnchorContext.Provider,{value:{currentId:m,linkMap:C,onLinkClick:v},children:(0,n.jsx)("div",{...g,ref:(0,d.useComposedRefs)(j,a),children:p})})});e.s(["Anchor",0,a],88036)},69438,e=>{"use strict";var n=e.i(45100),t=e.i(64334),i=e.i(22480),o=e.i(98319);let r=(0,t.forwardRef)((e,r)=>{let{onLinkClick:l,linkMap:c,currentId:s}=(0,t.useContext)(i.AnchorContext),{onClick:d,targetId:a,children:u,className:h,activeClassName:p,...b}=e,x=(0,t.useRef)(null);return(0,t.useEffect)(()=>{var e;return e=x.current,a&&c.current.set(a,e),()=>{c.current.delete(a)}},[a,c]),(0,n.jsx)("div",{ref:(0,o.useComposedRefs)(r,x),...b,onClick:e=>{e.stopPropagation(),d?.(e),l?.(e,a)},"data-target-id":a,className:s===a?p:h,children:u})});e.s(["AnchorLink",0,r],69438)},93562,e=>{"use strict";var n=e.i(88036),t=e.i(69438),i=e.i(22480);let o={Root:n.Anchor,Link:t.AnchorLink,Context:i.AnchorContext};e.s(["Anchor",()=>o])},59715,60326,42210,72932,47169,e=>{"use strict";var n=e.i(45100);e.i(73869);var t=e.i(84435);let i=`import { Button } from '@t-headless-ui/react';

function App() {
  return (
    <Button
      disabled
      loading={true}
      onClick={() => {
        console.log('onClick 不触发');
      }}
    >
      Button
    </Button>
  );
}`;function o(){return(0,n.jsx)(t.CodePreview,{code:i})}e.s(["BasicExample",()=>o],60326);let r=`import { Button } from '@t-headless-ui/react';

function App() {
  return (
    <div className="flex gap-x-4">
      <Button
        onClick={() => {
          console.log('onClick 触发');
        }}
        type="button"
        className="inline-block rounded-sm bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition [&:not(:disabled):hover]:scale-110 [&:not(:disabled):hover]:shadow-xl [&:disabled]:cursor-not-allowed focus:ring-3 focus:outline-hidden disabled:bg-indigo-400"
      >
        Normal
      </Button>
      <Button
        onClick={() => {
          console.log('onClick 不触发');
        }}
        type="button"
        disabled
        className="inline-block rounded-sm bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition [&:not(:disabled):hover]:scale-110 [&:not(:disabled):hover]:shadow-xl [&:disabled]:cursor-not-allowed focus:ring-3 focus:outline-hidden disabled:bg-indigo-400"
      >
        Disabled
      </Button>
    </div>
  );
}`;function l(){return(0,n.jsx)(t.CodePreview,{code:r})}e.s(["TailwindBasicExample",()=>l],42210);let c=`import { Button } from '@t-headless-ui/react';

function App() {
  return (
    <div className="flex gap-x-4">
      <Button
        type="button"
        className="normal-btn btn-primary-fill"
        onClick={() => {
          console.log('onClick 触发');
        }}
      >
        Normal
      </Button>
      <Button
        type="button"
        disabled
        className="normal-btn btn-primary-fill"
        onClick={() => {
          console.log('onClick 不触发');
        }}
      >
        Disabled
      </Button>
    </div>
  );
}`,s=`.btn-primary-fill {
  --btn-padding: 0 14px;
  --btn-height: 36px;
  --btn-font-size: 14px;
  --transition-timing-function-standard: cubic-bezier(0.34, 0.69, 0.1, 1);
  --btn-lineHeight: 1.5715;
  --btn-radius: 4px;
  --btn-primary-bg-color: #2563eb;
  --btn-primary-bg-disabled-color: #93c5fd;
  --btn-primary-text-color: #fff;
}
.normal-btn {
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  outline: none;
  padding: var(--btn-padding);
  height: var(--btn-height);
  font-size: var(--btn-font-size);
  appearance: none;
  user-select: none;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s var(--transition-timing-function-standard);
  box-sizing: border-box;
  line-height: var(--btn-lineHeight);
  border-radius: var(--btn-radius);
}
.btn-primary-fill:disabled {
  background-color: var(--btn-primary-bg-disabled-color);
  color: var(--btn-primary-text-color);
  border: 1px solid transparent;
  cursor: not-allowed;
}
.btn-primary-fill:not(:disabled) {
  background-color: var(--btn-primary-bg-color);
  color: var(--btn-primary-text-color);
  border: 1px solid transparent;
}`;function d(){return(0,n.jsx)(t.CodePreview,{code:c,cssCode:s})}e.s(["CssBasicExample",()=>d],72932);let a=`import { Button } from '@t-headless-ui/react';

function App() {
  return (
    <div className="flex gap-x-4">
      <Button
        type="button"
        className="normal-btn btn-success-fill"
        onClick={() => {
          console.log('onClick 触发');
        }}
      >
        Normal
      </Button>
      <Button
        type="button"
        disabled
        className="normal-btn btn-success-fill"
        onClick={() => {
          console.log('onClick 不触发');
        }}
      >
        Disabled
      </Button>
    </div>
  );
}`,u=`.btn-success-fill {
  --btn-padding: 0 14px;
  --btn-height: 36px;
  --btn-font-size: 14px;
  --transition-timing-function-standard: cubic-bezier(0.34, 0.69, 0.1, 1);
  --btn-lineHeight: 1.5715;
  --btn-radius: 4px;
  --btn-bg-color: #2ba471;
  --btn-bg-disabled-color: #92dab2;
  --btn-text-color: #fff;
}
.normal-btn {
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  outline: none;
  padding: var(--btn-padding);
  height: var(--btn-height);
  font-size: var(--btn-font-size);
  appearance: none;
  user-select: none;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s var(--transition-timing-function-standard);
  box-sizing: border-box;
  line-height: var(--btn-lineHeight);
  border-radius: var(--btn-radius);
}
.btn-success-fill:disabled {
  background-color: var(--btn-bg-disabled-color);
  color: var(--btn-text-color);
  border: 1px solid transparent;
  cursor: not-allowed;
}
.btn-success-fill:not(:disabled) {
  background-color: var(--btn-bg-color);
  color: var(--btn-text-color);
  border: 1px solid transparent;
}`;function h(){return(0,n.jsx)(t.CodePreview,{code:a,cssCode:u})}e.s(["CssSuccessBasicExample",()=>h],47169),e.s([],59715)},37854,e=>{"use strict";var n=e.i(45100),t=e.i(18694);e.i(82928);var i=e.i(72304),o=e.i(47445),r=e.i(69389);e.i(59715);var l=e.i(60326),c=e.i(42210),s=e.i(72932);function d(e){let d={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,t.useMDXComponents)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.H1,{subheading:"功能说明",children:"Button 基础"}),"\n",(0,n.jsx)(i.ImageTypography,{src:"/button/button.webp",fill:!0,alt:"button"}),"\n",(0,n.jsx)(d.h2,{children:"基础使用"}),"\n",(0,n.jsxs)(d.p,{children:["T-UI 的 Button 只封装了 ",(0,n.jsx)(d.code,{children:"onClick"})," 事件，即在 Button 是 ",(0,n.jsx)(d.code,{children:"disabled"})," 或者 ",(0,n.jsx)(d.code,{children:"loading"})," 状态时，不会触发传入 Button 的 ",(0,n.jsx)(d.code,{children:"onClick"})," 事件。\n如下，可以看到 T-UI 的组件对于 Button 都不添加任何 ",(0,n.jsx)(d.code,{children:"CSS"}),"， 也就是它支持跟任何 CSS 框架配合使用，例如 ",(0,n.jsx)(d.code,{children:"Less / Sass"}),", ",(0,n.jsx)(d.code,{children:"Tailwindcss"})," 等等。\n下面分别会有配合 ",(0,n.jsx)(d.code,{children:"Css"})," 和 ",(0,n.jsx)(d.code,{children:"Tailwind CSS"})," 版本的 Button 组件 Demo。在后续章节中，也会详细介绍如何自定义自己组件库的生产环境可用的 Button 组件。"]}),"\n",(0,n.jsxs)(d.p,{children:["注：以下 Button 除了没有任何样式，还传入了 ",(0,n.jsx)(d.code,{children:"disabled"})," 和 ",(0,n.jsx)(d.code,{children:"loading"})," 状态（loading 需要配合一个 loading icon 来展示 Button 正在等待的感觉，这里并没有封装此功能，后续【如何自定义 Button】章节会补充）。然后，\n点击 Button 控制台并不会打印任何内容，因为 ",(0,n.jsx)(d.code,{children:"disabled"})," 和 ",(0,n.jsx)(d.code,{children:"loading"})," 状态下，不会触发传入的 ",(0,n.jsx)(d.code,{children:"onClick"})," 事件。"]}),"\n",(0,n.jsx)(l.BasicExample,{}),"\n",(0,n.jsxs)(d.p,{children:["T-UI Button 可以传入所有 ",(0,n.jsx)(d.code,{children:"button"})," 标签支持的属性，比如 ",(0,n.jsx)(d.code,{children:"type"}),"、",(0,n.jsx)(d.code,{children:"autofocus"})," 等。这也是 headless 组件的一种设计思想，就是在保留\n",(0,n.jsx)(d.code,{children:"button"}),"、",(0,n.jsx)(d.code,{children:"div"}),"、",(0,n.jsx)(d.code,{children:"form"})," 等原生标签基本功能的基础上，丰富更多的功能。有兴趣的同学可以看一下文章 《如何实现一个 headless》组件（",(0,n.jsx)(d.code,{children:"headless"})," 可以理解为无样式组件）。"]}),"\n",(0,n.jsxs)(d.p,{children:["这也是我为什么放弃之前 ",(0,n.jsx)(d.code,{children:"@mx-design/react"})," 的开发，专向新的 ",(0,n.jsx)(d.code,{children:"ui"})," 库开发，因为类似 ",(0,n.jsx)(d.code,{children:"ant-design"}),"， ",(0,n.jsx)(d.code,{children:"material-ui"})," 这类大而全的组件库，我相信绝大多数在复杂场景，尤其是商业项目的使用中，都会有自己的 UI 规范，\n在更改新 UI 时，首先修改样式极其痛苦，可维护性低。同时拓展 ",(0,n.jsx)(d.code,{children:"javascript"})," 功能也很困难，因为需要操作的一些 ",(0,n.jsx)(d.code,{children:"dom"})," 被封装了起来，外部很难直接访问。这促使了类似 ",(0,n.jsx)(d.code,{children:"shadcn/ui"})," 这类的 headless 组件库流行，他们对于自定义 ",(0,n.jsx)(d.code,{children:"css"}),", 拓展 ",(0,n.jsx)(d.code,{children:"javascript"})," 功能也很容易。"]}),"\n",(0,n.jsx)(d.p,{children:"接下来我们实现一个简单版 Button 组件，主要是为了让大家入门如何使用 T-UI 的 Button:"}),"\n",(0,n.jsx)(d.h3,{children:"Tailwind CSS 版本"}),"\n",(0,n.jsxs)(d.p,{children:["注1：我借助 ",(0,n.jsx)(d.code,{children:"Tailwind CSS"})," 的色彩体系，配置出自己的亮色和暗色皮肤，所以一些 ",(0,n.jsx)(d.code,{children:"CSS"})," 类名可能会和你使用的 ",(0,n.jsx)(d.code,{children:"Tailwind CSS"})," 颜色名字不一致，你需要打开开发者工具查看具体颜色，如果你想更深入的了解 T-UI 的换肤方案，欢迎阅读《组件库架构设计 - 换肤方案篇》。"]}),"\n",(0,n.jsx)(d.p,{children:"注2：以下的 Button 只是非常简单的封装了一下，还有诸多状态没有考虑，会在后续自定义 Button 篇章详细介绍。"}),"\n",(0,n.jsx)(c.TailwindBasicExample,{}),"\n",(0,n.jsxs)(d.p,{children:["需要注意的是，你分别点击以上案例的两个按钮，当点击第一个按钮时，你可以在开发者工具的控制台看到打印日志，\n而点击第二个 ",(0,n.jsx)(d.code,{children:"disabled"})," 状态的按钮是不会触发 ",(0,n.jsx)(d.code,{children:"onClick"})," 事件的。"]}),"\n",(0,n.jsx)(d.h3,{children:"非 Tailwind CSS 版本"}),"\n",(0,n.jsxs)(d.p,{children:["以下使用普通 ",(0,n.jsx)(d.code,{children:"CSS"})," 来实现 Button 组件。",(0,n.jsx)(d.code,{children:"Less / Sass"})," 同理。为了外部可以控制 Button 的样式，我们使用 ",(0,n.jsx)(d.code,{children:"CSS"})," 变量来定义部分的关键 Button 的样式。这也是你再使用非原子 ",(0,n.jsx)(d.code,{children:"CSS"})," 时，推荐写组件的方法，使你的样式拓展性更强。"]}),"\n",(0,n.jsx)(s.CssBasicExample,{}),"\n",(0,n.jsx)(d.h2,{children:"进阶封装"}),"\n",(0,n.jsxs)(d.p,{children:["实际上，上面的直接使用 T-UI 的 Button 组件，是远远无法覆盖 ",(0,n.jsx)(d.code,{children:"material-ui"}),"、",(0,n.jsx)(d.code,{children:"ant-design"})," 等组件库的 Button 的所有功能的。\n在查看这些知名的组件库 Button 文档，我列举了还需要实现的功能，如下（也列举了可以轻易用 CSS 实现的功能）："]}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsx)(d.li,{children:"group 按钮【轻易用 CSS 实现】"}),"\n",(0,n.jsx)(d.li,{children:"单个图标的 Button【轻易用 CSS 实现】"}),"\n",(0,n.jsx)(d.li,{children:"loading 状态出现 loading 图标"}),"\n",(0,n.jsx)(d.li,{children:"按钮尺寸【轻易用 CSS 实现】"}),"\n",(0,n.jsx)(d.li,{children:"边框按钮、纯文字按钮【轻易用 CSS 实现】"}),"\n",(0,n.jsx)(d.li,{children:"按钮状态，例如成功状态按钮【轻易用 CSS 实现，但需要结合组件库换肤方案一起实现】"}),"\n"]}),"\n",(0,n.jsx)(d.p,{children:"以上功能我们在接下来【如何自定义 Button】章节实现。"}),"\n",(0,n.jsx)(d.h2,{children:"附录"}),"\n",(0,n.jsx)(d.h3,{children:"安装 button"}),"\n",(0,n.jsx)(o.CodeBlock,{code:`npm i @t-headless-ui/react
yarn i @t-headless-ui/react
pnpm i @t-headless-ui/react`,language:"bash"}),"\n",(0,n.jsx)(d.h3,{children:"引入 button"}),"\n",(0,n.jsx)(o.CodeBlock,{code:"import { Button, ButtonGroup } from '@t-headless-ui/react';",language:"tsx"})]})}function a(e={}){let{wrapper:i}={...(0,t.useMDXComponents)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}function u(){return(0,n.jsx)(a,{})}e.s(["MustRead",()=>u],37854)}]);