(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1521,(e,n,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"warnOnce",{enumerable:!0,get:function(){return t}});let t=e=>{}},79537,e=>{e.v({AElig:"Æ",AMP:"&",Aacute:"Á",Acirc:"Â",Agrave:"À",Aring:"Å",Atilde:"Ã",Auml:"Ä",COPY:"©",Ccedil:"Ç",ETH:"Ð",Eacute:"É",Ecirc:"Ê",Egrave:"È",Euml:"Ë",GT:">",Iacute:"Í",Icirc:"Î",Igrave:"Ì",Iuml:"Ï",LT:"<",Ntilde:"Ñ",Oacute:"Ó",Ocirc:"Ô",Ograve:"Ò",Oslash:"Ø",Otilde:"Õ",Ouml:"Ö",QUOT:'"',REG:"®",THORN:"Þ",Uacute:"Ú",Ucirc:"Û",Ugrave:"Ù",Uuml:"Ü",Yacute:"Ý",aacute:"á",acirc:"â",acute:"´",aelig:"æ",agrave:"à",amp:"&",aring:"å",atilde:"ã",auml:"ä",brvbar:"¦",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",ecirc:"ê",egrave:"è",eth:"ð",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",iacute:"í",icirc:"î",iexcl:"¡",igrave:"ì",iquest:"¿",iuml:"ï",laquo:"«",lt:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",oacute:"ó",ocirc:"ô",ograve:"ò",ordf:"ª",ordm:"º",oslash:"ø",otilde:"õ",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',raquo:"»",reg:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",times:"×",uacute:"ú",ucirc:"û",ugrave:"ù",uml:"¨",uuml:"ü",yacute:"ý",yen:"¥",yuml:"ÿ"})},27208,e=>{e.v({0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"})},73850,e=>{"use strict";var n=e.i(45100);let o=(0,e.i(51849).createIcon)({iconProps:{useFillCurrentColor:!0},viewBox:"0 0 156 94",paths:(0,n.jsx)("path",{d:"M0,31.18h31.18v62.56H0V31.18Zm155.46,5.67v56.89h-31.18V45.36c0-7.83-6.34-14.18-14.17-14.18h-17.01c.29,1.85,.44,3.74,.44,5.67v56.89h-31.18V45.36c0-7.83-6.35-14.18-14.17-14.18H31.18V0h25.51c13.15,0,24.69,6.89,31.21,17.25,2.62,4.15,4.43,8.86,5.2,13.92V0h25.51c20.35,0,36.85,16.5,36.85,36.85Z"})});e.s(["IconMLogo",0,o])},7823,e=>{"use strict";function n(e,n){if(null==e)return{};var o={};for(var t in e)if(({}).hasOwnProperty.call(e,t)){if(-1!==n.indexOf(t))continue;o[t]=e[t]}return o}e.s(["default",()=>n])},37215,e=>{"use strict";function n(){return(n=Object.assign.bind()).apply(null,arguments)}e.s(["default",()=>n])},22480,e=>{"use strict";let n=(0,e.i(64334).createContext)({currentId:"",onLinkClick:()=>{},linkMap:{current:new Map}});e.s(["AnchorContext",0,n])},98319,e=>{"use strict";var n=e.i(64334);function o(...e){return(0,n.useCallback)(n=>{e.forEach(e=>{"function"==typeof e?e(n):null!=e&&(e.current=n)})},e)}e.s(["useComposedRefs",()=>o])},88036,59013,e=>{"use strict";var n=e.i(45100),o=e.i(64334),t=e.i(22480);function c(e){let n=(0,o.useRef)(null);return n.current=e,(0,o.useCallback)((...e)=>n.current?.(...e),[])}e.s(["useEvent",()=>c],59013);var r=e.i(96224);function l(e,n){try{return e.querySelector(n)}catch(e){return null}}function s({scrollContainer:e,targetId:n,offset:o,isScrolling:t}){var c,s;if(!n)return;let i=l(document,`#${CSS.escape(n)}`);if(!i)return;let d=e.current,a=((void 0===(c=d)&&(c=window),c)&&(c===window?Math.ceil(window.pageYOffset):c.scrollTop)||0)+((e,n)=>{if(!e.getClientRects().length)return 0;let o=e.getBoundingClientRect();return o.width||o.height?n&&n!==window?o.top-n.getBoundingClientRect().top:(n=e.ownerDocument.documentElement,o.top-n.clientTop):o.top})(i,d)+o;(t.current=!0,(0,r.isWindow)(d))?d.scrollTo((void 0===(s=d)&&(s=window),s)&&(s===window?Math.ceil(window.pageXOffset||window.scrollX):s.scrollLeft)||0,a):d.scrollTop=a}function i({targetId:e,linkMap:n,wrapperRef:o,currentId:t,setCurrentId:c,onChange:r}){e&&o.current&&n.current.get(e)&&e!==t&&c(e).then(()=>{r?.(e,t)})}var d=e.i(98319);let a=(0,o.forwardRef)((e,a)=>{let{scrollContainer:u,offset:h=0,children:m,onChange:x,queryKey:j="anchor-id",isCloseInitAnchor:f,...p}=e,{currentId:C,onLinkClick:g,wrapperRef:v,linkMap:w}=function({propScrollContainer:e,onChange:n,offset:t,queryKey:d,isCloseInitAnchor:a}){var u;let h,m,x=(0,o.useRef)(null),j=(0,o.useRef)(null),f=(0,o.useRef)(new Map),p=(0,o.useRef)(!1),[C,g]=function(e){let[n,t]=(0,o.useState)({value:"",resolve:e=>{}});return(0,o.useEffect)(()=>{n.resolve(n.value)},[n]),[n.value,e=>new Promise(n=>{t(o=>{let t=e;return"function"==typeof e&&(t=e(o.value)),{value:t,resolve:n}})})]}(0),v=c(()=>{if(p.current)return;let e=function({linkMap:e,scrollContainer:n}){let o=n.current,t=((0,r.isWindow)(o)?document.documentElement||document.body:o).getBoundingClientRect(),c=Array.from(e.current.keys()),s=[];for(let e of c){let n=l(document,"#"+CSS.escape(e));if(n){let{top:e}=n.getBoundingClientRect(),c=(0,r.isWindow)(o)?e:e-t.top;c>=0&&s.push({element:n,top:c})}}return 0===s.length?null:s.reduce((e,n)=>e.top<=n.top?e:n).element}({linkMap:f,scrollContainer:j});e?.id&&i({targetId:e.id,linkMap:f,wrapperRef:x,currentId:C,setCurrentId:g,onChange:n})}),w=c((u=()=>{v(),p.current=!1},h=null,(m=(...e)=>{h||(h=setTimeout(()=>{h=null,u(...e)},30))}).cancel=()=>{h&&(clearTimeout(h),h=null)},m));return(0,o.useEffect)(()=>(j.current=(0,r.isString)(e)?l(document,e):e||window,j.current?.addEventListener("scroll",w),()=>{j.current?.removeEventListener("scroll",w)}),[w,e]),(0,o.useEffect)(()=>{if(!a)return void w();let e=new URLSearchParams(new URL(window.location.href).search).get(d);e&&(i({targetId:e,linkMap:f,wrapperRef:x,currentId:C,setCurrentId:g,onChange:n}),s({scrollContainer:j,targetId:e,offset:t,isScrolling:p}))},[]),{onScroll:w,currentId:C,onLinkClick:function(e,o){e.preventDefault(),i({targetId:o,linkMap:f,wrapperRef:x,currentId:C,setCurrentId:g,onChange:n}),s({scrollContainer:j,targetId:o,offset:t,isScrolling:p})},wrapperRef:x,scrollContainer:j,linkMap:f}}({propScrollContainer:u,onChange:x,offset:h,queryKey:j,isCloseInitAnchor:f});return(0,n.jsx)(t.AnchorContext.Provider,{value:{currentId:C,linkMap:w,onLinkClick:g},children:(0,n.jsx)("div",{...p,ref:(0,d.useComposedRefs)(v,a),children:m})})});e.s(["Anchor",0,a],88036)},69438,e=>{"use strict";var n=e.i(45100),o=e.i(64334),t=e.i(22480),c=e.i(98319);let r=(0,o.forwardRef)((e,r)=>{let{onLinkClick:l,linkMap:s,currentId:i}=(0,o.useContext)(t.AnchorContext),{onClick:d,targetId:a,children:u,className:h,activeClassName:m,...x}=e,j=(0,o.useRef)(null);return(0,o.useEffect)(()=>{var e;return e=j.current,a&&s.current.set(a,e),()=>{s.current.delete(a)}},[a,s]),(0,n.jsx)("div",{ref:(0,c.useComposedRefs)(r,j),...x,onClick:e=>{e.stopPropagation(),d?.(e),l?.(e,a)},"data-target-id":a,className:i===a?m:h,children:u})});e.s(["AnchorLink",0,r],69438)},93562,e=>{"use strict";var n=e.i(88036),o=e.i(69438),t=e.i(22480);let c={Root:n.Anchor,Link:o.AnchorLink,Context:t.AnchorContext};e.s(["Anchor",()=>c])},52221,e=>{"use strict";var n=e.i(45100),o=e.i(18694);e.i(82928);var t=e.i(72304),c=e.i(2697),r=e.i(47445),l=e.i(69389),s=e.i(93612),i=e.i(89546);function d(){return(0,n.jsxs)("div",{children:[(0,n.jsxs)(i.Paragraph,{children:["如果什么项目能覆盖常见的开发中的核心技术，那莫过于这套 从 0 到 1 打造的",(0,n.jsx)(s.Code,{children:"企业级"}),"前端组件库的项目了。"]}),(0,n.jsxs)(i.Paragraph,{children:["如果还在发愁建立有什么亮点项目能让面试官眼前一亮，让你在其它面试者中",(0,n.jsx)(s.Code,{children:"脱颖而出"}),"，那这个项目就是你需要的。"]}),(0,n.jsxs)(i.Paragraph,{children:["可以根据你的需要，",(0,n.jsx)(s.Code,{children:"定制化"}),"地帮你我来帮你写出符合你需求的项目。这个项目水平如何，效果可见，源码可见，无需多言。"]}),(0,n.jsxs)(i.Paragraph,{children:["掌握这套体系，你将全面提升前端架构能力与工程思维，让你的简历多一个能打的",(0,n.jsx)(s.Code,{children:"「专家级项目」"}),"。"]}),(0,n.jsxs)(i.Paragraph,{children:[(0,n.jsx)(s.Code,{children:"vue"})," 版本正在开发中，敬请期待！"]})]})}function a(e){let s={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.useMDXComponents)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.H1,{children:"简单封装 Modal 组件"}),"\n",(0,n.jsx)(c.AvatarM,{}),"\n",(0,n.jsx)(t.ImageTypography,{src:"/modal/modal.webp",fill:!0,alt:"modal"}),"\n",(0,n.jsxs)(s.p,{children:["首先建议阅读必读指南中，附录关于如何创建 ",(0,n.jsx)(s.code,{children:"modalStore"})," 的说明。简单来说 ",(0,n.jsx)(s.code,{children:"modalStore"})," 是用来管理 ",(0,n.jsx)(s.code,{children:"modal"})," 组件的状态的。"]}),"\n",(0,n.jsxs)(s.p,{children:["注：以下样式使用的是 ",(0,n.jsx)(s.code,{children:"tailwindcss"})," 类名。你可以完全使用 ",(0,n.jsx)(s.code,{children:"css"})," 类名来代替。样式都很简单。"]}),"\n",(0,n.jsx)(s.h2,{children:"1、增加 modal"}),"\n",(0,n.jsxs)(s.p,{children:["以下使用了 ",(0,n.jsx)(s.code,{children:"modalStore.add"})," 方法来增加一个 ",(0,n.jsx)(s.code,{children:"modal"})," 组件。详细解释请看后面。"]}),"\n",(0,n.jsx)(r.CodeBlock,{code:`import { modalStore } from '@/layout';
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
};`,language:"jsx"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["首先我们固定了背景黑色蒙版的样式，也就是 ",(0,n.jsx)(s.code,{children:"maskCls"}),"。这里使用了 ",(0,n.jsx)(s.code,{children:"position: fixed"})," 来覆盖整个页面。"]}),"\n",(0,n.jsxs)(s.li,{children:["然后设置了 ",(0,n.jsx)(s.code,{children:"modal"})," 在容器中的位置，使用 ",(0,n.jsx)(s.code,{children:"containerClassName"})," 来设置，可以看到下面是居中显示的，并且默认因为挂载\n到 ",(0,n.jsx)(s.code,{children:"document.body"})," 上。所以使用了 ",(0,n.jsx)(s.code,{children:"position: fixed"})," 来居中到屏幕上。"]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["当然还可以自己传入 ",(0,n.jsx)(s.code,{children:"attach"})," 参数，自定义需要挂载的元素上，传入的是一个字符串，内部会用 ",(0,n.jsx)(s.code,{children:"document.querySelector"})," 来查询元素。\n这里为什么不直接传入 ",(0,n.jsx)(s.code,{children:"dom"})," 元素，而是传入一个字符串，是因为我们希望可以在 ",(0,n.jsx)(s.code,{children:"服务端渲染"})," 时，直接使用 ",(0,n.jsx)(s.code,{children:"document"})," 或者 ",(0,n.jsx)(s.code,{children:"window"})," 是不允许的。\n所以干脆就传入字符串，在组件内部的 ",(0,n.jsx)(s.code,{children:"useEffect"})," 中，使用 ",(0,n.jsx)(s.code,{children:"document.querySelector"})," 来查询元素。"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"initialFocusEl"})," 表示是否需要将焦点锁定到第一个可聚焦的元素上。这是一个函数，里面一般都是用 ",(0,n.jsx)(s.code,{children:"ref"})," 获取到该元素，然后调用 ",(0,n.jsx)(s.code,{children:"focus"})," 方法来获取焦点。"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"onCancel"})," 表示点击取消按钮时的回调函数，一般会用来关闭 ",(0,n.jsx)(s.code,{children:"modal"})," 组件。"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"content"})," 表示 ",(0,n.jsx)(s.code,{children:"modal"})," 组件的内容，一般是一个 ",(0,n.jsx)(s.code,{children:"ReactNode"})," 类型的元素。这里我们使用了 ",(0,n.jsx)(s.code,{children:"Alert"})," 章节自定义的 ·",(0,n.jsx)(s.code,{children:"Modal"})," 组件来包裹内容。你也完全可以定义自己的 ",(0,n.jsx)(s.code,{children:"modal"})," 组件。从而达到函数调用的方式传入参数的效果。"]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["在 ",(0,n.jsx)(s.code,{children:"TModalBox"})," 中，我们默认把关闭功能添加进来，使用 ",(0,n.jsx)(s.code,{children:"modalStore.remove(id);"})," 来实现关闭弹框。接收的 ",(0,n.jsx)(s.code,{children:"id"})," 正是 ",(0,n.jsx)(s.code,{children:"add"})," 方法返回的 ",(0,n.jsx)(s.code,{children:"id"}),"。表示我们要操作哪个弹窗。"]}),"\n",(0,n.jsxs)(s.p,{children:["其中注意的是， ",(0,n.jsx)(s.code,{children:"TModalBox"})," 中的确定按钮，有时候我们需要异步关闭，比如将表单数据发送给后端成功后关闭弹窗。此时一般会有一个 ",(0,n.jsx)(s.code,{children:"loading"})," 参数传入到 ",(0,n.jsx)(s.code,{children:"TModalBox"})," 中的确定按钮，有时候我们需要异步关闭，比如将表单数据发送给后端成功后关闭弹窗。此时一般会有一个\n",(0,n.jsx)(s.code,{children:"loading"})," 参数传给这个确定按钮，用来表示是否正在等待后端返回数据中。"]}),"\n",(0,n.jsxs)(s.p,{children:["如何给 ",(0,n.jsx)(s.code,{children:"TModalBox"})," 更新参数呢？可以使用 ",(0,n.jsx)(s.code,{children:"modalStore.update(id, { contentProps: { loading: true } });"})," 方法来更新 ",(0,n.jsx)(s.code,{children:"modal"})," 组件的参数。"]}),"\n",(0,n.jsxs)(s.p,{children:["其中 ",(0,n.jsx)(s.code,{children:"id"})," 是 ",(0,n.jsx)(s.code,{children:"add"})," 方法返回的 ",(0,n.jsx)(s.code,{children:"id"}),"，表示我们要操作哪个弹窗。 ",(0,n.jsx)(s.code,{children:"contentProps"})," 是专门给 ",(0,n.jsx)(s.code,{children:"content"})," 传入的组件的参数。"]}),"\n",(0,n.jsxs)(s.p,{children:["其中还有一个 ",(0,n.jsx)(s.code,{children:"cs"})," 方法，实际上就是 ",(0,n.jsx)(s.code,{children:"classnames"})," 库的 ",(0,n.jsx)(s.code,{children:"cs"})," 方法，用来合并类名的。当然因为 ",(0,n.jsx)(s.code,{children:"tailwindcss"})," 合并类名还需要 ",(0,n.jsx)(s.code,{children:"tailwind-merge"})," 库协助，所以这个 ",(0,n.jsx)(s.code,{children:"cs"})," 方法是结合了两者。"]}),"\n",(0,n.jsx)(s.h2,{children:"2、删除 modal"}),"\n",(0,n.jsxs)(s.p,{children:["上面液体提到删除 ",(0,n.jsx)(s.code,{children:"modal"})," 的方式，我们补充一个 ",(0,n.jsx)(s.code,{children:"remove"})," 方法，用来手动删除 ",(0,n.jsx)(s.code,{children:"modal"})," 组件。"]}),"\n",(0,n.jsx)(r.CodeBlock,{code:`import { modalStore } from '@/layout';
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
};`,language:"jsx"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"id"})," 是 ",(0,n.jsx)(s.code,{children:"add"})," 方法返回的 ",(0,n.jsx)(s.code,{children:"id"}),"，表示我们要操作哪个弹窗。其实也支持在 ",(0,n.jsx)(s.code,{children:"add"})," 方式自定义 ",(0,n.jsx)(s.code,{children:"id"}),"，但是一般情况下用内部会自动生成，免去传入的麻烦。"]}),"\n",(0,n.jsx)(s.h2,{children:"3、更新 modal"}),"\n",(0,n.jsxs)(s.p,{children:["更新 ",(0,n.jsx)(s.code,{children:"modal"})," 也很简单，直接使用 ",(0,n.jsx)(s.code,{children:"update"})," 方法即可。"]}),"\n",(0,n.jsx)(r.CodeBlock,{code:`import { modalStore } from '@/layout';
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
};`,language:"jsx"}),"\n",(0,n.jsx)(s.h2,{children:"欢迎加入简历亮点交流群"}),"\n",(0,n.jsx)(d,{})]})}function u(e={}){let{wrapper:t}={...(0,o.useMDXComponents)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}function h(){return(0,n.jsx)(u,{})}e.s(["HowMakeCssToast",()=>h],52221)}]);