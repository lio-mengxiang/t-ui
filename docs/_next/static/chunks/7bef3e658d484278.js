(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1521,(e,o,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"warnOnce",{enumerable:!0,get:function(){return t}});let t=e=>{}},79537,e=>{e.v({AElig:"Æ",AMP:"&",Aacute:"Á",Acirc:"Â",Agrave:"À",Aring:"Å",Atilde:"Ã",Auml:"Ä",COPY:"©",Ccedil:"Ç",ETH:"Ð",Eacute:"É",Ecirc:"Ê",Egrave:"È",Euml:"Ë",GT:">",Iacute:"Í",Icirc:"Î",Igrave:"Ì",Iuml:"Ï",LT:"<",Ntilde:"Ñ",Oacute:"Ó",Ocirc:"Ô",Ograve:"Ò",Oslash:"Ø",Otilde:"Õ",Ouml:"Ö",QUOT:'"',REG:"®",THORN:"Þ",Uacute:"Ú",Ucirc:"Û",Ugrave:"Ù",Uuml:"Ü",Yacute:"Ý",aacute:"á",acirc:"â",acute:"´",aelig:"æ",agrave:"à",amp:"&",aring:"å",atilde:"ã",auml:"ä",brvbar:"¦",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",ecirc:"ê",egrave:"è",eth:"ð",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",iacute:"í",icirc:"î",iexcl:"¡",igrave:"ì",iquest:"¿",iuml:"ï",laquo:"«",lt:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",oacute:"ó",ocirc:"ô",ograve:"ò",ordf:"ª",ordm:"º",oslash:"ø",otilde:"õ",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',raquo:"»",reg:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",times:"×",uacute:"ú",ucirc:"û",ugrave:"ù",uml:"¨",uuml:"ü",yacute:"ý",yen:"¥",yuml:"ÿ"})},27208,e=>{e.v({0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"})},73850,e=>{"use strict";var o=e.i(45100);let n=(0,e.i(51849).createIcon)({iconProps:{useFillCurrentColor:!0},viewBox:"0 0 156 94",paths:(0,o.jsx)("path",{d:"M0,31.18h31.18v62.56H0V31.18Zm155.46,5.67v56.89h-31.18V45.36c0-7.83-6.34-14.18-14.17-14.18h-17.01c.29,1.85,.44,3.74,.44,5.67v56.89h-31.18V45.36c0-7.83-6.35-14.18-14.17-14.18H31.18V0h25.51c13.15,0,24.69,6.89,31.21,17.25,2.62,4.15,4.43,8.86,5.2,13.92V0h25.51c20.35,0,36.85,16.5,36.85,36.85Z"})});e.s(["IconMLogo",0,n])},7823,e=>{"use strict";function o(e,o){if(null==e)return{};var n={};for(var t in e)if(({}).hasOwnProperty.call(e,t)){if(-1!==o.indexOf(t))continue;n[t]=e[t]}return n}e.s(["default",()=>o])},37215,e=>{"use strict";function o(){return(o=Object.assign.bind()).apply(null,arguments)}e.s(["default",()=>o])},22480,e=>{"use strict";let o=(0,e.i(64334).createContext)({currentId:"",onLinkClick:()=>{},linkMap:{current:new Map}});e.s(["AnchorContext",0,o])},98319,e=>{"use strict";var o=e.i(64334);function n(...e){return(0,o.useCallback)(o=>{e.forEach(e=>{"function"==typeof e?e(o):null!=e&&(e.current=o)})},e)}e.s(["useComposedRefs",()=>n])},88036,e=>{"use strict";var o=e.i(45100),n=e.i(64334),t=e.i(22480);function c(e){let o=(0,n.useRef)(null);return o.current=e,(0,n.useCallback)((...e)=>o.current?.(...e),[])}var r=e.i(96224);function l(e,o){try{return e.querySelector(o)}catch(e){return null}}function s({scrollContainer:e,targetId:o,offset:n,isScrolling:t}){var c,s;if(!o)return;let i=l(document,`#${CSS.escape(o)}`);if(!i)return;let d=e.current,a=((void 0===(c=d)&&(c=window),c)&&(c===window?Math.ceil(window.pageYOffset):c.scrollTop)||0)+((e,o)=>{if(!e.getClientRects().length)return 0;let n=e.getBoundingClientRect();return n.width||n.height?o&&o!==window?n.top-o.getBoundingClientRect().top:(o=e.ownerDocument.documentElement,n.top-o.clientTop):n.top})(i,d)+n;(t.current=!0,(0,r.isWindow)(d))?d.scrollTo((void 0===(s=d)&&(s=window),s)&&(s===window?Math.ceil(window.pageXOffset||window.scrollX):s.scrollLeft)||0,a):d.scrollTop=a}function i({targetId:e,linkMap:o,wrapperRef:n,currentId:t,setCurrentId:c,onChange:r}){e&&n.current&&o.current.get(e)&&e!==t&&c(e).then(()=>{r?.(e,t)})}var d=e.i(98319);let a=(0,n.forwardRef)((e,a)=>{let{scrollContainer:u,offset:h=0,children:m,onChange:x,queryKey:j="anchor-id",isCloseInitAnchor:f,...p}=e,{currentId:C,onLinkClick:g,wrapperRef:v,linkMap:w}=function({propScrollContainer:e,onChange:o,offset:t,queryKey:d,isCloseInitAnchor:a}){var u;let h,m,x=(0,n.useRef)(null),j=(0,n.useRef)(null),f=(0,n.useRef)(new Map),p=(0,n.useRef)(!1),[C,g]=function(e){let[o,t]=(0,n.useState)({value:"",resolve:e=>{}});return(0,n.useEffect)(()=>{o.resolve(o.value)},[o]),[o.value,e=>new Promise(o=>{t(n=>{let t=e;return"function"==typeof e&&(t=e(n.value)),{value:t,resolve:o}})})]}(0),v=c(()=>{if(p.current)return;let e=function({linkMap:e,scrollContainer:o}){let n=o.current,t=((0,r.isWindow)(n)?document.documentElement||document.body:n).getBoundingClientRect(),c=Array.from(e.current.keys()),s=[];for(let e of c){let o=l(document,"#"+CSS.escape(e));if(o){let{top:e}=o.getBoundingClientRect(),c=(0,r.isWindow)(n)?e:e-t.top;c>=0&&s.push({element:o,top:c})}}return 0===s.length?null:s.reduce((e,o)=>e.top<=o.top?e:o).element}({linkMap:f,scrollContainer:j});e?.id&&i({targetId:e.id,linkMap:f,wrapperRef:x,currentId:C,setCurrentId:g,onChange:o})}),w=c((u=()=>{v(),p.current=!1},h=null,(m=(...e)=>{h||(h=setTimeout(()=>{h=null,u(...e)},30))}).cancel=()=>{h&&(clearTimeout(h),h=null)},m));return(0,n.useEffect)(()=>(j.current=(0,r.isString)(e)?l(document,e):e||window,j.current?.addEventListener("scroll",w),()=>{j.current?.removeEventListener("scroll",w)}),[w,e]),(0,n.useEffect)(()=>{if(!a)return void w();let e=new URLSearchParams(new URL(window.location.href).search).get(d);e&&(i({targetId:e,linkMap:f,wrapperRef:x,currentId:C,setCurrentId:g,onChange:o}),s({scrollContainer:j,targetId:e,offset:t,isScrolling:p}))},[]),{onScroll:w,currentId:C,onLinkClick:function(e,n){e.preventDefault(),i({targetId:n,linkMap:f,wrapperRef:x,currentId:C,setCurrentId:g,onChange:o}),s({scrollContainer:j,targetId:n,offset:t,isScrolling:p})},wrapperRef:x,scrollContainer:j,linkMap:f}}({propScrollContainer:u,onChange:x,offset:h,queryKey:j,isCloseInitAnchor:f});return(0,o.jsx)(t.AnchorContext.Provider,{value:{currentId:C,linkMap:w,onLinkClick:g},children:(0,o.jsx)("div",{...p,ref:(0,d.useComposedRefs)(v,a),children:m})})});e.s(["Anchor",0,a],88036)},69438,e=>{"use strict";var o=e.i(45100),n=e.i(64334),t=e.i(22480),c=e.i(98319);let r=(0,n.forwardRef)((e,r)=>{let{onLinkClick:l,linkMap:s,currentId:i}=(0,n.useContext)(t.AnchorContext),{onClick:d,targetId:a,children:u,className:h,activeClassName:m,...x}=e,j=(0,n.useRef)(null);return(0,n.useEffect)(()=>{var e;return e=j.current,a&&s.current.set(a,e),()=>{s.current.delete(a)}},[a,s]),(0,o.jsx)("div",{ref:(0,c.useComposedRefs)(r,j),...x,onClick:e=>{e.stopPropagation(),d?.(e),l?.(e,a)},"data-target-id":a,className:i===a?m:h,children:u})});e.s(["AnchorLink",0,r],69438)},93562,e=>{"use strict";var o=e.i(88036),n=e.i(69438),t=e.i(22480);let c={Root:o.Anchor,Link:n.AnchorLink,Context:t.AnchorContext};e.s(["Anchor",()=>c])},70939,70910,e=>{"use strict";var o=e.i(45100);e.i(82928);var n=e.i(93612),t=e.i(89546);function c(){return(0,o.jsxs)("div",{children:[(0,o.jsxs)(t.Paragraph,{children:["如果什么项目能覆盖常见的开发中的核心技术，那莫过于这套 从 0 到 1 打造的 ",(0,o.jsx)(n.Code,{children:"企业级"})," 前端组件库的项目了。"]}),(0,o.jsxs)(t.Paragraph,{children:["如果还在发愁建立有什么亮点项目能让面试官眼前一亮，让你在其它面试者中 ",(0,o.jsx)(n.Code,{children:"脱颖而出"}),"，那这个项目就是你需要的。"]}),(0,o.jsxs)(t.Paragraph,{children:["可以根据你的需要，",(0,o.jsx)(n.Code,{children:"定制化"})," 地帮你我来帮你写出符合你需求的项目。这个项目水平如何，效果可见，源码可见，无需多言。"]}),(0,o.jsxs)(t.Paragraph,{children:["掌握这套体系，你将全面提升前端架构能力与工程思维，让你的简历多一个能打的 ",(0,o.jsx)(n.Code,{children:"「专家级项目」"}),"。"]})]})}e.s(["Promote",()=>c],70910),e.s([],70939)},52221,e=>{"use strict";var o=e.i(45100),n=e.i(18694);e.i(82928);var t=e.i(72304),c=e.i(2697),r=e.i(47445),l=e.i(69389);e.i(70939);var s=e.i(70910);function i(e){let i={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.useMDXComponents)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.H1,{children:"简单封装 Modal 组件"}),"\n",(0,o.jsx)(c.AvatarM,{}),"\n",(0,o.jsx)(t.ImageTypography,{src:"/modal/modal.webp",fill:!0,alt:"modal"}),"\n",(0,o.jsxs)(i.p,{children:["首先建议阅读必读指南中，附录关于如何创建 ",(0,o.jsx)(i.code,{children:"modalStore"})," 的说明。简单来说 ",(0,o.jsx)(i.code,{children:"modalStore"})," 是用来管理 ",(0,o.jsx)(i.code,{children:"modal"})," 组件的状态的。"]}),"\n",(0,o.jsxs)(i.p,{children:["注：以下样式使用的是 ",(0,o.jsx)(i.code,{children:"tailwindcss"})," 类名。你可以完全使用 ",(0,o.jsx)(i.code,{children:"css"})," 类名来代替。样式都很简单。"]}),"\n",(0,o.jsx)(i.h2,{children:"1、增加 modal"}),"\n",(0,o.jsxs)(i.p,{children:["以下使用了 ",(0,o.jsx)(i.code,{children:"modalStore.add"})," 方法来增加一个 ",(0,o.jsx)(i.code,{children:"modal"})," 组件。详细解释请看后面。"]}),"\n",(0,o.jsx)(r.CodeBlock,{code:`import { modalStore } from '@/layout';
import { TModalBox } from '@/alert/t-modal-box';

const TModal = {
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
  const id = modalStore.add({
    attach,
    initialFocusEl,
    maskCls: cs('z-modal fixed inset-0 bg-black/50 w-full h-full overflow-hidden', maskClassName),
    containerClassName: cs('z-modal fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden', containerClassName),
    content: (
      <TModalBox
        title={title}
        showCloseIcon={showCloseIcon}
        showFooter={showFooter}
        className={className}
        contentClassName={contentClassName}
        style={style}
        onCancel={() => {
          onCancel?.();
          modalStore.remove(id);
        }}
        onOk={() => {
          onOk?.();
        }}
      >
        {content}
      </TModalBox>
    ),
    onCancel: () => {
      modalStore.remove(id);
    },
  });
  return id;
},
};`,language:"jsx"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["首先我们固定了背景黑色蒙版的样式，也就是 ",(0,o.jsx)(i.code,{children:"maskCls"}),"。这里使用了 ",(0,o.jsx)(i.code,{children:"position: fixed"})," 来覆盖整个页面。"]}),"\n",(0,o.jsxs)(i.li,{children:["然后设置了 ",(0,o.jsx)(i.code,{children:"modal"})," 在容器中的位置，使用 ",(0,o.jsx)(i.code,{children:"containerClassName"})," 来设置，可以看到下面是居中显示的，并且默认因为挂载\n到 ",(0,o.jsx)(i.code,{children:"document.body"})," 上。所以使用了 ",(0,o.jsx)(i.code,{children:"position: fixed"})," 来居中到屏幕上。"]}),"\n"]}),"\n",(0,o.jsxs)(i.p,{children:["当然还可以自己传入 ",(0,o.jsx)(i.code,{children:"attach"})," 参数，自定义需要挂载的元素上，传入的是一个字符串，内部会用 ",(0,o.jsx)(i.code,{children:"document.querySelector"})," 来查询元素。\n这里为什么不直接传入 ",(0,o.jsx)(i.code,{children:"dom"})," 元素，而是传入一个字符串，是因为我们希望可以在 ",(0,o.jsx)(i.code,{children:"服务端渲染"})," 时，直接使用 ",(0,o.jsx)(i.code,{children:"document"})," 或者 ",(0,o.jsx)(i.code,{children:"window"})," 是不允许的。\n所以干脆就传入字符串，在组件内部的 ",(0,o.jsx)(i.code,{children:"useEffect"})," 中，使用 ",(0,o.jsx)(i.code,{children:"document.querySelector"})," 来查询元素。"]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"initialFocusEl"})," 表示是否需要将焦点锁定到第一个可聚焦的元素上。这是一个函数，里面一般都是用 ",(0,o.jsx)(i.code,{children:"ref"})," 获取到该元素，然后调用 ",(0,o.jsx)(i.code,{children:"focus"})," 方法来获取焦点。"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"onCancel"})," 表示点击取消按钮时的回调函数，一般会用来关闭 ",(0,o.jsx)(i.code,{children:"modal"})," 组件。"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"content"})," 表示 ",(0,o.jsx)(i.code,{children:"modal"})," 组件的内容，一般是一个 ",(0,o.jsx)(i.code,{children:"ReactNode"})," 类型的元素。这里我们使用了 ",(0,o.jsx)(i.code,{children:"Alert"})," 章节自定义的 ·",(0,o.jsx)(i.code,{children:"Modal"})," 组件来包裹内容。你也完全可以定义自己的 ",(0,o.jsx)(i.code,{children:"modal"})," 组件。从而达到函数调用的方式传入参数的效果。"]}),"\n"]}),"\n",(0,o.jsxs)(i.p,{children:["在 ",(0,o.jsx)(i.code,{children:"TModalBox"})," 中，我们默认把关闭功能添加进来，使用 ",(0,o.jsx)(i.code,{children:"modalStore.remove(id);"})," 来实现关闭弹框。接收的 ",(0,o.jsx)(i.code,{children:"id"})," 正是 ",(0,o.jsx)(i.code,{children:"add"})," 方法返回的 ",(0,o.jsx)(i.code,{children:"id"}),"。表示我们要操作哪个弹窗。"]}),"\n",(0,o.jsxs)(i.p,{children:["其中注意的是， ",(0,o.jsx)(i.code,{children:"TModalBox"})," 中的确定按钮，有时候我们需要异步关闭，比如将表单数据发送给后端成功后关闭弹窗。此时一般会有一个 ",(0,o.jsx)(i.code,{children:"loading"})," 参数传入到 ",(0,o.jsx)(i.code,{children:"TModalBox"})," 中的确定按钮，有时候我们需要异步关闭，比如将表单数据发送给后端成功后关闭弹窗。此时一般会有一个\n",(0,o.jsx)(i.code,{children:"loading"})," 参数传给这个确定按钮，用来表示是否正在等待后端返回数据中。"]}),"\n",(0,o.jsxs)(i.p,{children:["如何给 ",(0,o.jsx)(i.code,{children:"TModalBox"})," 更新参数呢？可以使用 ",(0,o.jsx)(i.code,{children:"modalStore.update(id, { contentProps: { loading: true } });"})," 方法来更新 ",(0,o.jsx)(i.code,{children:"modal"})," 组件的参数。"]}),"\n",(0,o.jsxs)(i.p,{children:["其中 ",(0,o.jsx)(i.code,{children:"id"})," 是 ",(0,o.jsx)(i.code,{children:"add"})," 方法返回的 ",(0,o.jsx)(i.code,{children:"id"}),"，表示我们要操作哪个弹窗。 ",(0,o.jsx)(i.code,{children:"contentProps"})," 是专门给 ",(0,o.jsx)(i.code,{children:"content"})," 传入的组件的参数。"]}),"\n",(0,o.jsxs)(i.p,{children:["其中还有一个 ",(0,o.jsx)(i.code,{children:"cs"})," 方法，实际上就是 ",(0,o.jsx)(i.code,{children:"classnames"})," 库的 ",(0,o.jsx)(i.code,{children:"cs"})," 方法，用来合并类名的。当然因为 ",(0,o.jsx)(i.code,{children:"tailwindcss"})," 合并类名还需要 ",(0,o.jsx)(i.code,{children:"tailwind-merge"})," 库协助，所以这个 ",(0,o.jsx)(i.code,{children:"cs"})," 方法是结合了两者。"]}),"\n",(0,o.jsx)(i.h2,{children:"2、删除 modal"}),"\n",(0,o.jsxs)(i.p,{children:["上面液体提到删除 ",(0,o.jsx)(i.code,{children:"modal"})," 的方式，我们补充一个 ",(0,o.jsx)(i.code,{children:"remove"})," 方法，用来手动删除 ",(0,o.jsx)(i.code,{children:"modal"})," 组件。"]}),"\n",(0,o.jsx)(r.CodeBlock,{code:`import { modalStore } from '@/layout';
import { TModalBox } from '@/alert/t-modal-box';

const TModal = {
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
  const id = modalStore.add({
    ...xx
  });
  return id;
},

remove(id: string) {
  modalStore.remove(id);
},
};`,language:"jsx"}),"\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.code,{children:"id"})," 是 ",(0,o.jsx)(i.code,{children:"add"})," 方法返回的 ",(0,o.jsx)(i.code,{children:"id"}),"，表示我们要操作哪个弹窗。其实也支持在 ",(0,o.jsx)(i.code,{children:"add"})," 方式自定义 ",(0,o.jsx)(i.code,{children:"id"}),"，但是一般情况下用内部会自动生成，免去传入的麻烦。"]}),"\n",(0,o.jsx)(i.h2,{children:"3、更新 modal"}),"\n",(0,o.jsxs)(i.p,{children:["更新 ",(0,o.jsx)(i.code,{children:"modal"})," 也很简单，直接使用 ",(0,o.jsx)(i.code,{children:"update"})," 方法即可。"]}),"\n",(0,o.jsx)(r.CodeBlock,{code:`import { modalStore } from '@/layout';
import { TModalBox } from '@/alert/t-modal-box';

const TModal = {
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
    const id = modalStore.add({
      ...xx
    });
    return id;
  },

  remove(id: string) {
    modalStore.remove(id);
  },
  update(id: string, data: any) {
    modalStore.update(id, { contentProps: data });
  },
};`,language:"jsx"}),"\n",(0,o.jsx)(i.h2,{children:"欢迎加入简历亮点交流群"}),"\n",(0,o.jsx)(s.Promote,{})]})}function d(e={}){let{wrapper:t}={...(0,n.useMDXComponents)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}function a(){return(0,o.jsx)(d,{})}e.s(["HowMakeCssToast",()=>a],52221)}]);