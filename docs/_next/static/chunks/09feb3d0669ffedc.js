(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1521,(e,r,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"warnOnce",{enumerable:!0,get:function(){return t}});let t=e=>{}},79537,e=>{e.v({AElig:"Æ",AMP:"&",Aacute:"Á",Acirc:"Â",Agrave:"À",Aring:"Å",Atilde:"Ã",Auml:"Ä",COPY:"©",Ccedil:"Ç",ETH:"Ð",Eacute:"É",Ecirc:"Ê",Egrave:"È",Euml:"Ë",GT:">",Iacute:"Í",Icirc:"Î",Igrave:"Ì",Iuml:"Ï",LT:"<",Ntilde:"Ñ",Oacute:"Ó",Ocirc:"Ô",Ograve:"Ò",Oslash:"Ø",Otilde:"Õ",Ouml:"Ö",QUOT:'"',REG:"®",THORN:"Þ",Uacute:"Ú",Ucirc:"Û",Ugrave:"Ù",Uuml:"Ü",Yacute:"Ý",aacute:"á",acirc:"â",acute:"´",aelig:"æ",agrave:"à",amp:"&",aring:"å",atilde:"ã",auml:"ä",brvbar:"¦",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",ecirc:"ê",egrave:"è",eth:"ð",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",iacute:"í",icirc:"î",iexcl:"¡",igrave:"ì",iquest:"¿",iuml:"ï",laquo:"«",lt:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",oacute:"ó",ocirc:"ô",ograve:"ò",ordf:"ª",ordm:"º",oslash:"ø",otilde:"õ",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',raquo:"»",reg:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",times:"×",uacute:"ú",ucirc:"û",ugrave:"ù",uml:"¨",uuml:"ü",yacute:"ý",yen:"¥",yuml:"ÿ"})},27208,e=>{e.v({0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"})},73850,e=>{"use strict";var r=e.i(45100);let n=(0,e.i(51849).createIcon)({iconProps:{useFillCurrentColor:!0},viewBox:"0 0 156 94",paths:(0,r.jsx)("path",{d:"M0,31.18h31.18v62.56H0V31.18Zm155.46,5.67v56.89h-31.18V45.36c0-7.83-6.34-14.18-14.17-14.18h-17.01c.29,1.85,.44,3.74,.44,5.67v56.89h-31.18V45.36c0-7.83-6.35-14.18-14.17-14.18H31.18V0h25.51c13.15,0,24.69,6.89,31.21,17.25,2.62,4.15,4.43,8.86,5.2,13.92V0h25.51c20.35,0,36.85,16.5,36.85,36.85Z"})});e.s(["IconMLogo",0,n])},7823,e=>{"use strict";function r(e,r){if(null==e)return{};var n={};for(var t in e)if(({}).hasOwnProperty.call(e,t)){if(-1!==r.indexOf(t))continue;n[t]=e[t]}return n}e.s(["default",()=>r])},37215,e=>{"use strict";function r(){return(r=Object.assign.bind()).apply(null,arguments)}e.s(["default",()=>r])},22480,e=>{"use strict";let r=(0,e.i(64334).createContext)({currentId:"",onLinkClick:()=>{},linkMap:{current:new Map}});e.s(["AnchorContext",0,r])},98319,e=>{"use strict";var r=e.i(64334);function n(...e){return(0,r.useCallback)(r=>{e.forEach(e=>{"function"==typeof e?e(r):null!=e&&(e.current=r)})},e)}e.s(["useComposedRefs",()=>n])},88036,e=>{"use strict";var r=e.i(45100),n=e.i(64334),t=e.i(22480);function o(e){let r=(0,n.useRef)(null);return r.current=e,(0,n.useCallback)((...e)=>r.current?.(...e),[])}var c=e.i(96224);function i(e,r){try{return e.querySelector(r)}catch(e){return null}}function s({scrollContainer:e,targetId:r,offset:n,isScrolling:t}){var o,s;if(!r)return;let d=i(document,`#${CSS.escape(r)}`);if(!d)return;let a=e.current,l=((void 0===(o=a)&&(o=window),o)&&(o===window?Math.ceil(window.pageYOffset):o.scrollTop)||0)+((e,r)=>{if(!e.getClientRects().length)return 0;let n=e.getBoundingClientRect();return n.width||n.height?r&&r!==window?n.top-r.getBoundingClientRect().top:(r=e.ownerDocument.documentElement,n.top-r.clientTop):n.top})(d,a)+n;(t.current=!0,(0,c.isWindow)(a))?a.scrollTo((void 0===(s=a)&&(s=window),s)&&(s===window?Math.ceil(window.pageXOffset||window.scrollX):s.scrollLeft)||0,l):a.scrollTop=l}function d({targetId:e,linkMap:r,wrapperRef:n,currentId:t,setCurrentId:o,onChange:c}){e&&n.current&&r.current.get(e)&&e!==t&&o(e).then(()=>{c?.(e,t)})}var a=e.i(98319);let l=(0,n.forwardRef)((e,l)=>{let{scrollContainer:u,offset:h=0,children:x,onChange:m,queryKey:p="anchor-id",isCloseInitAnchor:j,...w}=e,{currentId:f,onLinkClick:g,wrapperRef:v,linkMap:C}=function({propScrollContainer:e,onChange:r,offset:t,queryKey:a,isCloseInitAnchor:l}){var u;let h,x,m=(0,n.useRef)(null),p=(0,n.useRef)(null),j=(0,n.useRef)(new Map),w=(0,n.useRef)(!1),[f,g]=function(e){let[r,t]=(0,n.useState)({value:"",resolve:e=>{}});return(0,n.useEffect)(()=>{r.resolve(r.value)},[r]),[r.value,e=>new Promise(r=>{t(n=>{let t=e;return"function"==typeof e&&(t=e(n.value)),{value:t,resolve:r}})})]}(0),v=o(()=>{if(w.current)return;let e=function({linkMap:e,scrollContainer:r}){let n=r.current,t=((0,c.isWindow)(n)?document.documentElement||document.body:n).getBoundingClientRect(),o=Array.from(e.current.keys()),s=[];for(let e of o){let r=i(document,"#"+CSS.escape(e));if(r){let{top:e}=r.getBoundingClientRect(),o=(0,c.isWindow)(n)?e:e-t.top;o>=0&&s.push({element:r,top:o})}}return 0===s.length?null:s.reduce((e,r)=>e.top<=r.top?e:r).element}({linkMap:j,scrollContainer:p});e?.id&&d({targetId:e.id,linkMap:j,wrapperRef:m,currentId:f,setCurrentId:g,onChange:r})}),C=o((u=()=>{v(),w.current=!1},h=null,(x=(...e)=>{h||(h=setTimeout(()=>{h=null,u(...e)},30))}).cancel=()=>{h&&(clearTimeout(h),h=null)},x));return(0,n.useEffect)(()=>(p.current=(0,c.isString)(e)?i(document,e):e||window,p.current?.addEventListener("scroll",C),()=>{p.current?.removeEventListener("scroll",C)}),[C,e]),(0,n.useEffect)(()=>{if(!l)return void C();let e=new URLSearchParams(new URL(window.location.href).search).get(a);e&&(d({targetId:e,linkMap:j,wrapperRef:m,currentId:f,setCurrentId:g,onChange:r}),s({scrollContainer:p,targetId:e,offset:t,isScrolling:w}))},[]),{onScroll:C,currentId:f,onLinkClick:function(e,n){e.preventDefault(),d({targetId:n,linkMap:j,wrapperRef:m,currentId:f,setCurrentId:g,onChange:r}),s({scrollContainer:p,targetId:n,offset:t,isScrolling:w})},wrapperRef:m,scrollContainer:p,linkMap:j}}({propScrollContainer:u,onChange:m,offset:h,queryKey:p,isCloseInitAnchor:j});return(0,r.jsx)(t.AnchorContext.Provider,{value:{currentId:f,linkMap:C,onLinkClick:g},children:(0,r.jsx)("div",{...w,ref:(0,a.useComposedRefs)(v,l),children:x})})});e.s(["Anchor",0,l],88036)},69438,e=>{"use strict";var r=e.i(45100),n=e.i(64334),t=e.i(22480),o=e.i(98319);let c=(0,n.forwardRef)((e,c)=>{let{onLinkClick:i,linkMap:s,currentId:d}=(0,n.useContext)(t.AnchorContext),{onClick:a,targetId:l,children:u,className:h,activeClassName:x,...m}=e,p=(0,n.useRef)(null);return(0,n.useEffect)(()=>{var e;return e=p.current,l&&s.current.set(l,e),()=>{s.current.delete(l)}},[l,s]),(0,r.jsx)("div",{ref:(0,o.useComposedRefs)(c,p),...m,onClick:e=>{e.stopPropagation(),a?.(e),i?.(e,l)},"data-target-id":l,className:d===l?x:h,children:u})});e.s(["AnchorLink",0,c],69438)},93562,e=>{"use strict";var r=e.i(88036),n=e.i(69438),t=e.i(22480);let o={Root:r.Anchor,Link:n.AnchorLink,Context:t.AnchorContext};e.s(["Anchor",()=>o])},70939,70910,e=>{"use strict";var r=e.i(45100);e.i(82928);var n=e.i(93612),t=e.i(89546);function o(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(t.Paragraph,{children:["如果什么项目能覆盖常见的开发中的核心技术，那莫过于这套 从 0 到 1 打造的 ",(0,r.jsx)(n.Code,{children:"企业级"})," 前端组件库的项目了。"]}),(0,r.jsxs)(t.Paragraph,{children:["如果还在发愁建立有什么亮点项目能让面试官眼前一亮，让你在其它面试者中 ",(0,r.jsx)(n.Code,{children:"脱颖而出"}),"，那这个项目就是你需要的。"]}),(0,r.jsxs)(t.Paragraph,{children:["可以根据你的需要，",(0,r.jsx)(n.Code,{children:"定制化"})," 地帮你我来帮你写出符合你需求的项目。这个项目水平如何，效果可见，源码可见，无需多言。"]}),(0,r.jsxs)(t.Paragraph,{children:["掌握这套体系，你将全面提升前端架构能力与工程思维，让你的简历多一个能打的 ",(0,r.jsx)(n.Code,{children:"「专家级项目」"}),"。"]})]})}e.s(["Promote",()=>o],70910),e.s([],70939)},73614,e=>{"use strict";var r=e.i(45100),n=e.i(18694);e.i(82928);var t=e.i(72304),o=e.i(2697),c=e.i(47445),i=e.i(69389);e.i(70939);var s=e.i(70910);function d(e){let d={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.useMDXComponents)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.H1,{children:"简单封装 Drawer 组件"}),"\n",(0,r.jsx)(o.AvatarM,{}),"\n",(0,r.jsx)(t.ImageTypography,{src:"/drawer/drawer.webp",fill:!0,alt:"drawer"}),"\n",(0,r.jsxs)(d.p,{children:["首先建议阅读必读指南中，附录关于如何创建 ",(0,r.jsx)(d.code,{children:"drawerStore"})," 的说明。简单来说 ",(0,r.jsx)(d.code,{children:"drawerStore"})," 是用来管理 ",(0,r.jsx)(d.code,{children:"drawer"})," 组件的状态的。"]}),"\n",(0,r.jsxs)(d.p,{children:["注：以下样式使用的是 ",(0,r.jsx)(d.code,{children:"tailwindcss"})," 类名。你可以完全使用 ",(0,r.jsx)(d.code,{children:"css"})," 类名来代替。样式都很简单。\n注: 本篇内容基本跟 ",(0,r.jsx)(d.code,{children:"modal"})," 组件的封装过程是相似的。只是把 ",(0,r.jsx)(d.code,{children:"modal"})," 替换成 ",(0,r.jsx)(d.code,{children:"drawer"})," 即可。（因为我们底层都依赖 ",(0,r.jsx)(d.code,{children:"@t-headless-ui/react"})," 导出的 ",(0,r.jsx)(d.code,{children:"createModalStore"}),", 这也从侧面反映我们封装的比较好。）"]}),"\n",(0,r.jsx)(d.h2,{children:"1、增加 drawer"}),"\n",(0,r.jsxs)(d.p,{children:["以下使用了 ",(0,r.jsx)(d.code,{children:"drawerStore.add"})," 方法来增加一个 ",(0,r.jsx)(d.code,{children:"drawer"})," 组件。详细解释请看后面。"]}),"\n",(0,r.jsx)(c.CodeBlock,{code:`import React from 'react';
import { TDrawerBox } from '@/alert/t-drawer-box';
import { drawerStore } from '@/layout';
import { cs } from '@/_utils';
import { type Variants } from 'motion/react';
// 抽屉组件的动画配置
export const drawAnimation: Variants = {
initial: {
  x: '320px',
  opacity: 0,
},
animate: {
  x: '0px',
  opacity: 1,
  transition: {
    duration: 0.2,
    ease: 'easeInOut',
  },
},
exit: {
  x: '320px',
  opacity: 0,
  transition: {
    duration: 0.2,
    ease: 'easeIn',
  },
},
};

export const TDrawer = {
add({
  title,
  showCloseIcon = true,
  onCancel,
  showFooter = true,
  onOk,
  className,
  style,
  contentClassName,
  containerClassName,
  maskClassName,
  content,
  initialFocusEl,
  attach,
}: {
  title: string;
  showCloseIcon?: boolean;
  onCancel?: () => void;
  showFooter?: boolean;
  onOk?: () => void;
  className?: string;
  style?: React.CSSProperties;
  contentClassName?: string;
  containerClassName?: string;
  maskClassName?: string;
  content: React.ReactNode;
  initialFocusEl?: () => void;
  attach?: string;
}) {
  const id = drawerStore.add({
    attach,
    initialFocusEl,
    animation: drawAnimation as any,
    maskCls: cs('z-drawer fixed inset-0 bg-black/50 w-full h-full overflow-hidden', maskClassName),
    containerClassName: cs('z-drawer fixed top-0 right-0 overflow-hidden', containerClassName),
    content: (
      <TDrawerBox
        title={title}
        showCloseIcon={showCloseIcon}
        showFooter={showFooter}
        className={className}
        contentClassName={contentClassName}
        style={style}
        onCancel={() => {
          onCancel?.();
          drawerStore.remove(id);
        }}
        onOk={() => {
          onOk?.();
        }}
      >
        {content}
      </TDrawerBox>
    ),
    onCancel: () => {
      drawerStore.remove(id);
    },
  });
  return id;
},
};`,language:"jsx"}),"\n",(0,r.jsxs)(d.ul,{children:["\n",(0,r.jsxs)(d.li,{children:["首先我们固定了背景黑色蒙版的样式，也就是 ",(0,r.jsx)(d.code,{children:"maskCls"}),"。这里使用了 ",(0,r.jsx)(d.code,{children:"position: fixed"})," 来覆盖整个页面。"]}),"\n",(0,r.jsxs)(d.li,{children:["然后设置了 ",(0,r.jsx)(d.code,{children:"drawer"})," 在容器中的位置，使用 ",(0,r.jsx)(d.code,{children:"containerClassName"})," 来设置，可以看到下面是居右边显示的（可以自定义位置），并且默认因为挂载\n到 ",(0,r.jsx)(d.code,{children:"document.body"})," 上。所以使用了 ",(0,r.jsx)(d.code,{children:"position: fixed"})," 来居中到屏幕上。"]}),"\n"]}),"\n",(0,r.jsxs)(d.p,{children:["当然还可以自己传入 ",(0,r.jsx)(d.code,{children:"attach"})," 参数，自定义需要挂载的元素上，传入的是一个字符串，内部会用 ",(0,r.jsx)(d.code,{children:"document.querySelector"})," 来查询元素。\n这里为什么不直接传入 ",(0,r.jsx)(d.code,{children:"dom"})," 元素，而是传入一个字符串，是因为我们希望可以在 ",(0,r.jsx)(d.code,{children:"服务端渲染"})," 时，直接使用 ",(0,r.jsx)(d.code,{children:"document"})," 或者 ",(0,r.jsx)(d.code,{children:"window"})," 是不允许的。\n所以干脆就传入字符串，在组件内部的 ",(0,r.jsx)(d.code,{children:"useEffect"})," 中，使用 ",(0,r.jsx)(d.code,{children:"document.querySelector"})," 来查询元素。"]}),"\n",(0,r.jsxs)(d.ul,{children:["\n",(0,r.jsxs)(d.li,{children:[(0,r.jsx)(d.code,{children:"initialFocusEl"})," 表示是否需要将焦点锁定到第一个可聚焦的元素上。这是一个函数，里面一般都是用 ",(0,r.jsx)(d.code,{children:"ref"})," 获取到该元素，然后调用 ",(0,r.jsx)(d.code,{children:"focus"})," 方法来获取焦点。"]}),"\n",(0,r.jsxs)(d.li,{children:[(0,r.jsx)(d.code,{children:"onCancel"})," 表示点击取消按钮时的回调函数，一般会用来关闭 ",(0,r.jsx)(d.code,{children:"drawer"})," 组件。"]}),"\n",(0,r.jsxs)(d.li,{children:[(0,r.jsx)(d.code,{children:"content"})," 表示 ",(0,r.jsx)(d.code,{children:"drawer"})," 组件的内容，一般是一个 ",(0,r.jsx)(d.code,{children:"ReactNode"})," 类型的元素。这里我们使用了 ",(0,r.jsx)(d.code,{children:"Alert"})," 章节自定义的 ·",(0,r.jsx)(d.code,{children:"Drawer"})," 组件来包裹内容。你也完全可以定义自己的 ",(0,r.jsx)(d.code,{children:"drawer"})," 组件。从而达到函数调用的方式传入参数的效果。"]}),"\n"]}),"\n",(0,r.jsxs)(d.p,{children:["在 ",(0,r.jsx)(d.code,{children:"TDrawerBox"})," 中，我们默认把关闭功能添加进来，使用 ",(0,r.jsx)(d.code,{children:"drawerStore.remove(id);"})," 来实现关闭抽屉。接收的 ",(0,r.jsx)(d.code,{children:"id"})," 正是 ",(0,r.jsx)(d.code,{children:"add"})," 方法返回的 ",(0,r.jsx)(d.code,{children:"id"}),"。表示我们要操作哪个抽屉。"]}),"\n",(0,r.jsxs)(d.p,{children:["其中注意的是， ",(0,r.jsx)(d.code,{children:"TDrawerBox"})," 中的确定按钮，有时候我们需要异步关闭，比如将表单数据发送给后端成功后关闭弹窗。此时一般会有一个 ",(0,r.jsx)(d.code,{children:"loading"})," 参数传入到 ",(0,r.jsx)(d.code,{children:"TDrawerBox"})," 中的确定按钮，有时候我们需要异步关闭，比如将表单数据发送给后端成功后关闭弹窗。此时一般会有一个\n",(0,r.jsx)(d.code,{children:"loading"})," 参数传给这个确定按钮，用来表示是否正在等待后端返回数据中。"]}),"\n",(0,r.jsxs)(d.p,{children:["如何给 ",(0,r.jsx)(d.code,{children:"TDrawerBox"})," 更新参数呢？可以使用 ",(0,r.jsx)(d.code,{children:"drawerStore.update(id, { contentProps: { loading: true } });"})," 方法来更新 ",(0,r.jsx)(d.code,{children:"drawer"})," 组件的参数。"]}),"\n",(0,r.jsxs)(d.p,{children:["其中 ",(0,r.jsx)(d.code,{children:"id"})," 是 ",(0,r.jsx)(d.code,{children:"add"})," 方法返回的 ",(0,r.jsx)(d.code,{children:"id"}),"，表示我们要操作哪个抽屉。 ",(0,r.jsx)(d.code,{children:"contentProps"})," 是专门给 ",(0,r.jsx)(d.code,{children:"content"})," 传入的组件的参数。"]}),"\n",(0,r.jsxs)(d.p,{children:["其中还有一个 ",(0,r.jsx)(d.code,{children:"cs"})," 方法，实际上就是 ",(0,r.jsx)(d.code,{children:"classnames"})," 库的 ",(0,r.jsx)(d.code,{children:"cs"})," 方法，用来合并类名的。当然因为 ",(0,r.jsx)(d.code,{children:"tailwindcss"})," 合并类名还需要 ",(0,r.jsx)(d.code,{children:"tailwind-merge"})," 库协助，所以这个 ",(0,r.jsx)(d.code,{children:"cs"})," 方法是结合了两者。"]}),"\n",(0,r.jsx)(d.h2,{children:"2、删除 drawer"}),"\n",(0,r.jsxs)(d.p,{children:["上面液体提到删除 ",(0,r.jsx)(d.code,{children:"drawer"})," 的方式，我们补充一个 ",(0,r.jsx)(d.code,{children:"remove"})," 方法，用来手动删除 ",(0,r.jsx)(d.code,{children:"drawer"})," 组件。"]}),"\n",(0,r.jsx)(c.CodeBlock,{code:`import React from 'react';
import { TDrawerBox } from '@/alert/t-drawer-box';
import { drawerStore } from '@/layout';
import { cs } from '@/_utils';
import { type Variants } from 'motion/react';

export const drawAnimation: Variants = {
initial: {
  x: '320px',
  opacity: 0,
},
animate: {
  x: '0px',
  opacity: 1,
  transition: {
    duration: 0.2,
    ease: 'easeInOut',
  },
},
exit: {
  x: '320px',
  opacity: 0,
  transition: {
    duration: 0.2,
    ease: 'easeIn',
  },
},
};

export const TDrawer = {
add 方法省略....,
remove(id: string) {
  drawerStore.remove(id);
},
}`,language:"jsx"}),"\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.code,{children:"id"})," 是 ",(0,r.jsx)(d.code,{children:"add"})," 方法返回的 ",(0,r.jsx)(d.code,{children:"id"}),"，表示我们要操作哪个弹窗。其实也支持在 ",(0,r.jsx)(d.code,{children:"add"})," 方式自定义 ",(0,r.jsx)(d.code,{children:"id"}),"，但是一般情况下用内部会自动生成，免去传入的麻烦。"]}),"\n",(0,r.jsx)(d.h2,{children:"3、更新 drawer"}),"\n",(0,r.jsxs)(d.p,{children:["更新 ",(0,r.jsx)(d.code,{children:"drawer"})," 也很简单，直接使用 ",(0,r.jsx)(d.code,{children:"update"})," 方法即可。"]}),"\n",(0,r.jsx)(c.CodeBlock,{code:`import React from 'react';
import { TDrawerBox } from '@/alert/t-drawer-box';
import { drawerStore } from '@/layout';
import { cs } from '@/_utils';
import { type Variants } from 'motion/react';

export const drawAnimation: Variants = {
initial: {
  x: '320px',
  opacity: 0,
},
animate: {
  x: '0px',
  opacity: 1,
  transition: {
    duration: 0.2,
    ease: 'easeInOut',
  },
},
exit: {
  x: '320px',
  opacity: 0,
  transition: {
    duration: 0.2,
    ease: 'easeIn',
  },
},
};

export const TDrawer = {
add 方法省略....,

remove(id: string) {
  drawerStore.remove(id);
},
// 增加的 update 方法
update(id: string, data: any) {
  drawerStore.update(id, { contentProps: data });
},
};
`,language:"jsx"}),"\n",(0,r.jsx)(d.h2,{children:"欢迎加入简历亮点交流群"}),"\n",(0,r.jsx)(s.Promote,{})]})}function a(e={}){let{wrapper:t}={...(0,n.useMDXComponents)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}function l(){return(0,r.jsx)(a,{})}e.s(["HowMakeCssDrawerMDX",()=>l],73614)}]);