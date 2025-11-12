(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1521,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return o}});let o=e=>{}},79537,e=>{e.v({AElig:"Æ",AMP:"&",Aacute:"Á",Acirc:"Â",Agrave:"À",Aring:"Å",Atilde:"Ã",Auml:"Ä",COPY:"©",Ccedil:"Ç",ETH:"Ð",Eacute:"É",Ecirc:"Ê",Egrave:"È",Euml:"Ë",GT:">",Iacute:"Í",Icirc:"Î",Igrave:"Ì",Iuml:"Ï",LT:"<",Ntilde:"Ñ",Oacute:"Ó",Ocirc:"Ô",Ograve:"Ò",Oslash:"Ø",Otilde:"Õ",Ouml:"Ö",QUOT:'"',REG:"®",THORN:"Þ",Uacute:"Ú",Ucirc:"Û",Ugrave:"Ù",Uuml:"Ü",Yacute:"Ý",aacute:"á",acirc:"â",acute:"´",aelig:"æ",agrave:"à",amp:"&",aring:"å",atilde:"ã",auml:"ä",brvbar:"¦",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",ecirc:"ê",egrave:"è",eth:"ð",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",iacute:"í",icirc:"î",iexcl:"¡",igrave:"ì",iquest:"¿",iuml:"ï",laquo:"«",lt:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",oacute:"ó",ocirc:"ô",ograve:"ò",ordf:"ª",ordm:"º",oslash:"ø",otilde:"õ",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',raquo:"»",reg:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",times:"×",uacute:"ú",ucirc:"û",ugrave:"ù",uml:"¨",uuml:"ü",yacute:"ý",yen:"¥",yuml:"ÿ"})},27208,e=>{e.v({0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"})},73850,e=>{"use strict";var t=e.i(45100);let r=(0,e.i(51849).createIcon)({iconProps:{useFillCurrentColor:!0},viewBox:"0 0 156 94",paths:(0,t.jsx)("path",{d:"M0,31.18h31.18v62.56H0V31.18Zm155.46,5.67v56.89h-31.18V45.36c0-7.83-6.34-14.18-14.17-14.18h-17.01c.29,1.85,.44,3.74,.44,5.67v56.89h-31.18V45.36c0-7.83-6.35-14.18-14.17-14.18H31.18V0h25.51c13.15,0,24.69,6.89,31.21,17.25,2.62,4.15,4.43,8.86,5.2,13.92V0h25.51c20.35,0,36.85,16.5,36.85,36.85Z"})});e.s(["IconMLogo",0,r])},7823,e=>{"use strict";function t(e,t){if(null==e)return{};var r={};for(var o in e)if(({}).hasOwnProperty.call(e,o)){if(-1!==t.indexOf(o))continue;r[o]=e[o]}return r}e.s(["default",()=>t])},37215,e=>{"use strict";function t(){return(t=Object.assign.bind()).apply(null,arguments)}e.s(["default",()=>t])},22480,e=>{"use strict";let t=(0,e.i(64334).createContext)({currentId:"",onLinkClick:()=>{},linkMap:{current:new Map}});e.s(["AnchorContext",0,t])},98319,e=>{"use strict";var t=e.i(64334);function r(...e){return(0,t.useCallback)(t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})},e)}e.s(["useComposedRefs",()=>r])},88036,59013,e=>{"use strict";var t=e.i(45100),r=e.i(64334),o=e.i(22480);function n(e){let t=(0,r.useRef)(null);return t.current=e,(0,r.useCallback)((...e)=>t.current?.(...e),[])}e.s(["useEvent",()=>n],59013);var a=e.i(96224);function c(e,t){try{return e.querySelector(t)}catch(e){return null}}function l({scrollContainer:e,targetId:t,offset:r,isScrolling:o}){var n,l;if(!t)return;let d=c(document,`#${CSS.escape(t)}`);if(!d)return;let i=e.current,p=((void 0===(n=i)&&(n=window),n)&&(n===window?Math.ceil(window.pageYOffset):n.scrollTop)||0)+((e,t)=>{if(!e.getClientRects().length)return 0;let r=e.getBoundingClientRect();return r.width||r.height?t&&t!==window?r.top-t.getBoundingClientRect().top:(t=e.ownerDocument.documentElement,r.top-t.clientTop):r.top})(d,i)+r;(o.current=!0,(0,a.isWindow)(i))?i.scrollTo((void 0===(l=i)&&(l=window),l)&&(l===window?Math.ceil(window.pageXOffset||window.scrollX):l.scrollLeft)||0,p):i.scrollTop=p}function d({targetId:e,linkMap:t,wrapperRef:r,currentId:o,setCurrentId:n,onChange:a}){e&&r.current&&t.current.get(e)&&e!==o&&n(e).then(()=>{a?.(e,o)})}var i=e.i(98319);let p=(0,r.forwardRef)((e,p)=>{let{scrollContainer:s,offset:u=0,children:v,onChange:h,queryKey:m="anchor-id",isCloseInitAnchor:f,...b}=e,{currentId:x,onLinkClick:g,wrapperRef:w,linkMap:j}=function({propScrollContainer:e,onChange:t,offset:o,queryKey:i,isCloseInitAnchor:p}){var s;let u,v,h=(0,r.useRef)(null),m=(0,r.useRef)(null),f=(0,r.useRef)(new Map),b=(0,r.useRef)(!1),[x,g]=function(e){let[t,o]=(0,r.useState)({value:"",resolve:e=>{}});return(0,r.useEffect)(()=>{t.resolve(t.value)},[t]),[t.value,e=>new Promise(t=>{o(r=>{let o=e;return"function"==typeof e&&(o=e(r.value)),{value:o,resolve:t}})})]}(0),w=n(()=>{if(b.current)return;let e=function({linkMap:e,scrollContainer:t}){let r=t.current,o=((0,a.isWindow)(r)?document.documentElement||document.body:r).getBoundingClientRect(),n=Array.from(e.current.keys()),l=[];for(let e of n){let t=c(document,"#"+CSS.escape(e));if(t){let{top:e}=t.getBoundingClientRect(),n=(0,a.isWindow)(r)?e:e-o.top;n>=0&&l.push({element:t,top:n})}}return 0===l.length?null:l.reduce((e,t)=>e.top<=t.top?e:t).element}({linkMap:f,scrollContainer:m});e?.id&&d({targetId:e.id,linkMap:f,wrapperRef:h,currentId:x,setCurrentId:g,onChange:t})}),j=n((s=()=>{w(),b.current=!1},u=null,(v=(...e)=>{u||(u=setTimeout(()=>{u=null,s(...e)},30))}).cancel=()=>{u&&(clearTimeout(u),u=null)},v));return(0,r.useEffect)(()=>(m.current=(0,a.isString)(e)?c(document,e):e||window,m.current?.addEventListener("scroll",j),()=>{m.current?.removeEventListener("scroll",j)}),[j,e]),(0,r.useEffect)(()=>{if(!p)return void j();let e=new URLSearchParams(new URL(window.location.href).search).get(i);e&&(d({targetId:e,linkMap:f,wrapperRef:h,currentId:x,setCurrentId:g,onChange:t}),l({scrollContainer:m,targetId:e,offset:o,isScrolling:b}))},[]),{onScroll:j,currentId:x,onLinkClick:function(e,r){e.preventDefault(),d({targetId:r,linkMap:f,wrapperRef:h,currentId:x,setCurrentId:g,onChange:t}),l({scrollContainer:m,targetId:r,offset:o,isScrolling:b})},wrapperRef:h,scrollContainer:m,linkMap:f}}({propScrollContainer:s,onChange:h,offset:u,queryKey:m,isCloseInitAnchor:f});return(0,t.jsx)(o.AnchorContext.Provider,{value:{currentId:x,linkMap:j,onLinkClick:g},children:(0,t.jsx)("div",{...b,ref:(0,i.useComposedRefs)(w,p),children:v})})});e.s(["Anchor",0,p],88036)},69438,e=>{"use strict";var t=e.i(45100),r=e.i(64334),o=e.i(22480),n=e.i(98319);let a=(0,r.forwardRef)((e,a)=>{let{onLinkClick:c,linkMap:l,currentId:d}=(0,r.useContext)(o.AnchorContext),{onClick:i,targetId:p,children:s,className:u,activeClassName:v,...h}=e,m=(0,r.useRef)(null);return(0,r.useEffect)(()=>{var e;return e=m.current,p&&l.current.set(p,e),()=>{l.current.delete(p)}},[p,l]),(0,t.jsx)("div",{ref:(0,n.useComposedRefs)(a,m),...h,onClick:e=>{e.stopPropagation(),i?.(e),c?.(e,p)},"data-target-id":p,className:d===p?v:u,children:s})});e.s(["AnchorLink",0,a],69438)},93562,e=>{"use strict";var t=e.i(88036),r=e.i(69438),o=e.i(22480);let n={Root:t.Anchor,Link:r.AnchorLink,Context:o.AnchorContext};e.s(["Anchor",()=>n])},81296,e=>{"use strict";var t=e.i(45100),r=e.i(18694);e.i(82928);var o=e.i(72304),n=e.i(47445),a=e.i(69389);e.i(73869);var c=e.i(84435);let l=`import { Popover } from '@t-headless-ui/react';

function App() {
  return (
    <Popover.Root placement="top" trigger="click">
      <Popover.Trigger>
        {/* TButton 是在 Button 章节我们封装的 Button 组件 */}
        <TButton status="primary">点击我</TButton>
      </Popover.Trigger>
      <Popover.Content>
        <div style={{
          padding: '4px 10px',
          background: 'var(--bg-color)',
          color: 'var(--text-color)',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          marginBottom: '6px',
          border: '1px solid var(--border-color)',
          borderRadius: '4px',
          fontSize: '14px'
        }}>
          Popover Content
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}`;function d(){return(0,t.jsx)(c.CodePreview,{code:l})}let i=`import { Popover } from '@t-headless-ui/react';

function App() {
  return (
    <Popover.Root placement="top" trigger="click">
      <Popover.Trigger>
        {/* TButton 是在 Button 章节我们封装的 Button 组件 */}
        <TButton status="primary">点击我</TButton>
      </Popover.Trigger>
      <Popover.Content>
        <div className="px-2.5 py-1 bg-[var(--bg-color)] text-[var(--text-color)] shadow-md mb-1.5 border border-[var(--border-color)] rounded text-sm">
          Popover Content
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}`;function p(){return(0,t.jsx)(c.CodePreview,{code:i})}let s=`import { Popover } from '@t-headless-ui/react';

function App() {
  return (
    <Popover.Root placement="top" trigger="click">
      <Popover.Trigger>
        {/* TButton 是在 Button 章节我们封装的 Button 组件 */}
        <TButton status="primary">点击我</TButton>
      </Popover.Trigger>
      <Popover.Content className="p-1 px-2.5 bg-[var(--bg-color)] text-[var(--text-color)] shadow-md border border-[var(--border-color)] rounded text-sm z-[1001] relative [--popover-content-margin:8px] [--popover-arrow-width:8px] [--border-popover-color:var(--border-color)] data-[placement^='top']:mb-[var(--popover-content-margin)] data-[placement^='bottom']:mt-[var(--popover-content-margin)] data-[placement^='left']:mr-[var(--popover-content-margin)] data-[placement^='right']:ml-[var(--popover-content-margin)]">
          Popover Content
      </Popover.Content>
    </Popover.Root>
  );
}`;function u(){return(0,t.jsx)(c.CodePreview,{code:s})}let v=`import { Popover } from '@t-headless-ui/react';

function App({showArrow = true}) {
  return (
    <Popover.Root placement="bottom" trigger="click">
      <Popover.Trigger>
        {/* TButton 是在 Button 章节我们封装的 Button 组件 */}
        <TButton status="primary">点我，来呀！</TButton>
      </Popover.Trigger>
     <Popover.Content className="p-1 px-2.5 bg-[var(--bg-color)] text-[var(--text-color)] shadow-md border border-[var(--border-color)] rounded text-sm z-[1001] relative [--popover-content-margin:8px] [--popover-arrow-width:8px] [--border-popover-color:var(--border-color)] data-[placement^='top']:mb-[var(--popover-content-margin)] data-[placement^='bottom']:mt-[var(--popover-content-margin)] data-[placement^='left']:mr-[var(--popover-content-margin)] data-[placement^='right']:ml-[var(--popover-content-margin)]">
          Popover Content
          {showArrow && (
            <Arrow />
          )}
      </Popover.Content>
    </Popover.Root>
  );
}

function Arrow(){
  const { popperRef, placement } = useContext(Popover.PopoverContext);
  const { state } = popperRef.current;

  return <div
    data-placement={state?.placement || placement}
    className="absolute z-[1] bg-inherit
    before:absolute before:content-[''] before:w-[var(--popover-arrow-width)] before:h-[var(--popover-arrow-width)] before:rotate-45 before:bg-inherit
    data-[placement^='top']:before:rounded-tl-full data-[placement^='top']:before:border-b data-[placement^='top']:before:border-r data-[placement^='top']:before:border-[var(--border-color)]
    data-[placement^='bottom']:before:rounded-br-full data-[placement^='bottom']:before:border-t data-[placement^='bottom']:before:border-l data-[placement^='bottom']:before:border-[var(--border-color)]
    data-[placement^='left']:before:border-t data-[placement^='left']:before:border-r data-[placement^='left']:before:border-[var(--border-color)]
    data-[placement^='right']:before:border-b data-[placement^='right']:before:border-l data-[placement^='right']:before:border-[var(--border-color)]
    data-[placement='top']:left-1/2 data-[placement='top']:ml-[calc(-1*var(--popover-arrow-width)/2)]
    data-[placement='top-start']:left-[var(--popover-arrow-width)]
    data-[placement='top-end']:left-[calc(100%_-_var(--popover-arrow-width)_*_2)]
    data-[placement^='bottom']:-top-[calc(var(--popover-arrow-width)/2+1px)]
    data-[placement='bottom-start']:left-[var(--popover-arrow-width)]
    data-[placement='bottom']:left-1/2 data-[placement='bottom']:ml-[calc(-1*var(--popover-arrow-width)/2)]
    data-[placement='bottom-end']:left-[calc(100%_-_var(--popover-arrow-width)_*_2)]
    data-[placement^='left']:right-[calc(var(--popover-arrow-width)/2)]
    data-[placement='left-start']:top-[var(--popover-arrow-width)]
    data-[placement='left']:top-1/2 data-[placement='left']:mt-[calc(-1*var(--popover-arrow-width)/2)]
    data-[placement='left-end']:top-[calc(100%_-_var(--popover-arrow-width)_*_2)]
    data-[placement^='right']:left-[calc(-1*var(--popover-arrow-width)/2)]
    data-[placement='right-start']:top-[var(--popover-arrow-width)]
    data-[placement='right']:top-1/2 data-[placement='right']:mt-[calc(-1*var(--popover-arrow-width)/2)]
    data-[placement='right-end']:top-[calc(100%_-_var(--popover-arrow-width)_*_2)]
    "
  ></div>
}
`;function h(){return(0,t.jsx)(c.CodePreview,{code:v})}e.i(70977);var m=e.i(21518),f=e.i(41556);function b(){return(0,t.jsx)(f.TPopover,{popoverContent:"Popover Content",showArrow:!0,children:(0,t.jsx)(m.TButton,{status:"success",children:"Hover me!"})})}function x(e){let c={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.useMDXComponents)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.H1,{subheading:"使用 css/less/sass 构建篇",children:"弹框组件自定义样式"}),"\n",(0,t.jsx)(o.ImageTypography,{src:"/popover/popover.webp",fill:!0,alt:"popover"}),"\n",(0,t.jsx)(c.h2,{children:"1、基础封装"}),"\n",(0,t.jsxs)(c.p,{children:["注：这篇是讲的使用 ",(0,t.jsx)(c.code,{children:"tailwindcss"})," 封装弹框组件，其它原子化 ",(0,t.jsx)(c.code,{children:"css"})," 也是类似封装思路，如果想看 ",(0,t.jsx)(c.code,{children:"css"}),"（",(0,t.jsx)(c.code,{children:"less"})," 和 ",(0,t.jsx)(c.code,{children:"sass"})," 原理一致）如何封装弹框组件的，请见上一篇文章。"]}),"\n",(0,t.jsx)(c.p,{children:"我们还是以下方的代码为例，可以发现，其实我们需要封装仅仅是弹出框内容的样式："}),"\n",(0,t.jsx)(d,{}),"\n",(0,t.jsxs)(c.p,{children:["然后我们可以使用 ",(0,t.jsx)(c.code,{children:"tailwindcss"})," 来修改上面的 ",(0,t.jsx)(c.code,{children:"style"})," 样式。"]}),"\n",(0,t.jsx)(p,{}),"\n",(0,t.jsx)(c.p,{children:"上面代码有个一个明显的问题，"}),"\n",(0,t.jsxs)(c.ul,{children:["\n",(0,t.jsxs)(c.li,{children:["\n",(0,t.jsxs)(c.p,{children:["然后 ",(0,t.jsx)(c.code,{children:"tailwindcss"})," 样式设置了一个 ",(0,t.jsx)(c.code,{children:"mb-1.5"}),"(",(0,t.jsx)(c.code,{children:"mb"})," 是 ",(0,t.jsx)(c.code,{children:"margin-bottom"})," 的意思) 来隔开按钮和弹框，但问题在于因为弹框的位置有很多种情况，比如："]}),"\n"]}),"\n",(0,t.jsxs)(c.li,{children:["\n",(0,t.jsx)(c.p,{children:"顶部"}),"\n"]}),"\n",(0,t.jsxs)(c.li,{children:["\n",(0,t.jsx)(c.p,{children:"底部"}),"\n"]}),"\n",(0,t.jsxs)(c.li,{children:["\n",(0,t.jsx)(c.p,{children:"左侧"}),"\n"]}),"\n",(0,t.jsxs)(c.li,{children:["\n",(0,t.jsx)(c.p,{children:"右侧"}),"\n"]}),"\n",(0,t.jsxs)(c.li,{children:["\n",(0,t.jsx)(c.p,{children:"...等等"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(c.p,{children:["所以我们需要动态的设置 ",(0,t.jsx)(c.code,{children:"CSS"}),", 而如何动态的设置呢，我特意在组件库的弹框中留了一个口子，也就是弹出框外层包裹了一个 ",(0,t.jsx)(c.code,{children:"div"})," 元素，这个元素会有如下属性"]}),"\n",(0,t.jsxs)(c.ul,{children:["\n",(0,t.jsxs)(c.li,{children:["data-placement = 弹出框的位置(例如 ",(0,t.jsx)(c.code,{children:"top"}),")"]}),"\n",(0,t.jsx)(c.li,{children:'class="t-popover-content"'}),"\n"]}),"\n",(0,t.jsxs)(c.p,{children:["我们先拿 ",(0,t.jsx)(c.code,{children:"top"})," 位置为例，如何动态设置 ",(0,t.jsx)(c.code,{children:"top"})," 位置："]}),"\n",(0,t.jsx)(n.CodeBlock,{code:`.t-popover-content[data-placement^='top'] .popover-content {
  margin-bottom: 8px;
}`,language:"css"}),"\n",(0,t.jsxs)(c.p,{children:["上面的代码只是一个 ",(0,t.jsx)(c.code,{children:"css"})," 样式示意，下方会使用 ",(0,t.jsx)(c.code,{children:"tailwindcss"})," 来实现。"]}),"\n",(0,t.jsxs)(c.p,{children:["其中 ",(0,t.jsx)(c.code,{children:"t-popover-content"})," 就是 ",(0,t.jsx)(c.code,{children:"<Popover.Content>"})," 组件的 ",(0,t.jsx)(c.code,{children:"class"})," 类名, ",(0,t.jsx)(c.code,{children:"[data-placement^='top']"})," 中 ",(0,t.jsx)(c.code,{children:"data-placement"})," 自定义属性也是在 ",(0,t.jsx)(c.code,{children:"<Popover.Content>"})," 组件上。"]}),"\n",(0,t.jsxs)(c.p,{children:["所以我们通过 ",(0,t.jsx)(c.code,{children:"data-placement"})," 属性来动态的设置不同方向的样式。例如 ",(0,t.jsx)(c.code,{children:"[data-placement^='top']"})," 表示可能弹框的方向是 ",(0,t.jsx)(c.code,{children:"top"}),", ",(0,t.jsx)(c.code,{children:"top-start"}),", ",(0,t.jsx)(c.code,{children:"top-end"}),"。"]}),"\n",(0,t.jsxs)(c.p,{children:["这里只说明了 ",(0,t.jsx)(c.code,{children:"top"})," 方向，其它方向是类似的。"]}),"\n",(0,t.jsx)(c.p,{children:"所以我们可以借助这两个属性来动态的设置按钮和弹框隔开的距离，如下："}),"\n",(0,t.jsx)(u,{}),"\n",(0,t.jsx)(c.h2,{children:"2、箭头样式封装"}),"\n",(0,t.jsx)(c.p,{children:"很多时候，大家需要弹框有一个箭头，这个箭头的位置是根据弹框的位置来确定的，比如："}),"\n",(0,t.jsxs)(c.ul,{children:["\n",(0,t.jsx)(c.li,{children:"顶部箭头指向按钮的底部"}),"\n",(0,t.jsx)(c.li,{children:"底部箭头指向按钮的顶部"}),"\n",(0,t.jsx)(c.li,{children:"左侧箭头指向按钮的右侧"}),"\n",(0,t.jsx)(c.li,{children:"右侧箭头指向按钮的左侧"}),"\n"]}),"\n",(0,t.jsx)(c.p,{children:"首先，我们预想的箭头是这样插入的："}),"\n",(0,t.jsx)(n.CodeBlock,{code:`<Popover.Content className="内容的样式">
      Popover Content
      <div className="箭头的样式"></div>
  </div>
</Popover.Content>`,language:"jsx"}),"\n",(0,t.jsxs)(c.p,{children:["这里我们将 ",(0,t.jsx)(c.code,{children:"Popover.Content"})," 的 ",(0,t.jsx)(c.code,{children:"position"})," 属性设置为 ",(0,t.jsx)(c.code,{children:"relative"}),"， 然后让箭头的样式设置为 ",(0,t.jsx)(c.code,{children:"absolute"}),"， 并根据 ",(0,t.jsx)(c.code,{children:"data-placement"})," 属性来动态设置箭头的位置。"]}),"\n",(0,t.jsx)(h,{}),"\n",(0,t.jsx)(c.h2,{children:"3、更好的封装"}),"\n",(0,t.jsxs)(c.p,{children:["因为 ",(0,t.jsx)(c.code,{children:"@t-headless-ui/react"})," 组件库是一个 ",(0,t.jsx)(c.code,{children:"headless"})," 组件库（没有样式），属于比较低层次的封装，所以使用起来没有 ",(0,t.jsx)(c.code,{children:"ant-design"}),"、",(0,t.jsx)(c.code,{children:"M-UI"})," 这类高度封装的组件库简单，\n但 ",(0,t.jsx)(c.code,{children:"headless"})," 组件库提供了更多的可定制化的空间，我们可以根据自己的需求来定制组件的样式。例如我可以进行如下封装出自己业务需要的弹框组件。"]}),"\n",(0,t.jsx)(n.CodeBlock,{code:`import React, { useContext } from 'react';
import { Popover, PopoverProps, PortalProps } from '@t-headless-ui/react';
import { TButton } from '@/button/tailwind-button';
interface TPopoverProps extends PopoverProps {
  attach?: PortalProps['attach'];
  children: React.ReactNode;
  showArrow?: boolean;
  popoverContent: React.ReactNode;
}
function TPopover({
  placement = 'top',
  trigger = 'hover',
  attach = 'body',
  disabled = false,
  children,
  offsetDistance = 0,
  offsetSkidding = 0,
  strategy = 'absolute',
  visible,
  defaultVisible,
  onVisibleChange,
  showArrow = false,
  popoverContent,
}: TPopoverProps) {
  return (
    <Popover.Root
      placement={placement}
      trigger={trigger}
      disabled={disabled}
      strategy={strategy}
      offsetDistance={offsetDistance}
      offsetSkidding={offsetSkidding}
      visible={visible}
      defaultVisible={defaultVisible}
      onVisibleChange={onVisibleChange}
    >
      <Popover.Trigger>{children}</Popover.Trigger>
      <Popover.Content attach={attach}>
        <div className="t-popup popover-content">
          {popoverContent}
          {showArrow && <Arrow />}
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}
function Arrow() {
  const { popperRef, placement } = useContext(Popover.PopoverContext);
  const { state } = popperRef!.current;
  return (
    <div
      data-placement={state?.placement || placement}
      className="absolute z-[1] bg-inherit
    before:absolute before:content-[''] before:w-[var(--popover-arrow-width)] before:h-[var(--popover-arrow-width)] before:rotate-45 before:bg-inherit
    data-[placement^='top']:before:rounded-tl-full data-[placement^='top']:before:border-b data-[placement^='top']:before:border-r data-[placement^='top']:before:border-[var(--border-color)]
    data-[placement^='bottom']:before:rounded-br-full data-[placement^='bottom']:before:border-t data-[placement^='bottom']:before:border-l data-[placement^='bottom']:before:border-[var(--border-color)]
    data-[placement^='left']:before:border-t data-[placement^='left']:before:border-r data-[placement^='left']:before:border-[var(--border-color)]
    data-[placement^='right']:before:border-b data-[placement^='right']:before:border-l data-[placement^='right']:before:border-[var(--border-color)]
    data-[placement='top']:left-1/2 data-[placement='top']:ml-[calc(-1*var(--popover-arrow-width)/2)]
    data-[placement='top-start']:left-[var(--popover-arrow-width)]
    data-[placement='top-end']:left-[calc(100%_-_var(--popover-arrow-width)_*_2)]
    data-[placement^='bottom']:-top-[calc(var(--popover-arrow-width)/2+1px)]
    data-[placement='bottom-start']:left-[var(--popover-arrow-width)]
    data-[placement='bottom']:left-1/2 data-[placement='bottom']:ml-[calc(-1*var(--popover-arrow-width)/2)]
    data-[placement='bottom-end']:left-[calc(100%_-_var(--popover-arrow-width)_*_2)]
    data-[placement^='left']:right-[calc(var(--popover-arrow-width)/2)]
    data-[placement='left-start']:top-[var(--popover-arrow-width)]
    data-[placement='left']:top-1/2 data-[placement='left']:mt-[calc(-1*var(--popover-arrow-width)/2)]
    data-[placement='left-end']:top-[calc(100%_-_var(--popover-arrow-width)_*_2)]
    data-[placement^='right']:left-[calc(-1*var(--popover-arrow-width)/2)]
    data-[placement='right-start']:top-[var(--popover-arrow-width)]
    data-[placement='right']:top-1/2 data-[placement='right']:mt-[calc(-1*var(--popover-arrow-width)/2)]
    data-[placement='right-end']:top-[calc(100%_-_var(--popover-arrow-width)_*_2)]
    "
    ></div>
  );
}`,language:"jsx"}),"\n",(0,t.jsxs)(c.p,{children:["使用的话就会很简单，如下是一个例子，",(0,t.jsx)(c.code,{children:"<TButton>"})," 组件的封装，可以去看 ",(0,t.jsx)(c.code,{children:"button"})," 篇的内容："]}),"\n",(0,t.jsx)(n.CodeBlock,{code:`<TPopover popoverContent="Popover Content" showArrow>
    <TButton status="success">Hover me!</TButton>
</TPopover>`,language:"jsx"}),"\n",(0,t.jsx)(c.p,{children:"效果如下："}),"\n",(0,t.jsx)(b,{}),"\n",(0,t.jsx)(c.h2,{children:"4、总结"}),"\n",(0,t.jsx)(c.p,{children:"最后，如果你想了解源码实现细节，欢迎加入到组件库交流群，里面会有直播解释源码和实现思路 。"}),"\n",(0,t.jsx)(c.p,{children:"同时如果你想让自己的简历有一些与众不同高难度的项目，也欢迎咨询，例如对于前端组件库项目，在询问你的前端技术栈和意愿的情况下，\n可以帮助到初级前端到资深前端范围的求职者拥有一个亮眼的项目写在简历中，让你在面试时脱颖而出，给面试官一点惊喜😁。"})]})}function g(e={}){let{wrapper:o}={...(0,r.useMDXComponents)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}function w(){return(0,t.jsx)(g,{})}e.s(["HowMakeCssButton",()=>w],81296)}]);