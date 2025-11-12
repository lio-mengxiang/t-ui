(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1521,(e,t,s)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},79537,e=>{e.v({AElig:"Æ",AMP:"&",Aacute:"Á",Acirc:"Â",Agrave:"À",Aring:"Å",Atilde:"Ã",Auml:"Ä",COPY:"©",Ccedil:"Ç",ETH:"Ð",Eacute:"É",Ecirc:"Ê",Egrave:"È",Euml:"Ë",GT:">",Iacute:"Í",Icirc:"Î",Igrave:"Ì",Iuml:"Ï",LT:"<",Ntilde:"Ñ",Oacute:"Ó",Ocirc:"Ô",Ograve:"Ò",Oslash:"Ø",Otilde:"Õ",Ouml:"Ö",QUOT:'"',REG:"®",THORN:"Þ",Uacute:"Ú",Ucirc:"Û",Ugrave:"Ù",Uuml:"Ü",Yacute:"Ý",aacute:"á",acirc:"â",acute:"´",aelig:"æ",agrave:"à",amp:"&",aring:"å",atilde:"ã",auml:"ä",brvbar:"¦",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",ecirc:"ê",egrave:"è",eth:"ð",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",iacute:"í",icirc:"î",iexcl:"¡",igrave:"ì",iquest:"¿",iuml:"ï",laquo:"«",lt:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",oacute:"ó",ocirc:"ô",ograve:"ò",ordf:"ª",ordm:"º",oslash:"ø",otilde:"õ",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',raquo:"»",reg:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",times:"×",uacute:"ú",ucirc:"û",ugrave:"ù",uml:"¨",uuml:"ü",yacute:"ý",yen:"¥",yuml:"ÿ"})},27208,e=>{e.v({0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"})},73850,e=>{"use strict";var t=e.i(45100);let s=(0,e.i(51849).createIcon)({iconProps:{useFillCurrentColor:!0},viewBox:"0 0 156 94",paths:(0,t.jsx)("path",{d:"M0,31.18h31.18v62.56H0V31.18Zm155.46,5.67v56.89h-31.18V45.36c0-7.83-6.34-14.18-14.17-14.18h-17.01c.29,1.85,.44,3.74,.44,5.67v56.89h-31.18V45.36c0-7.83-6.35-14.18-14.17-14.18H31.18V0h25.51c13.15,0,24.69,6.89,31.21,17.25,2.62,4.15,4.43,8.86,5.2,13.92V0h25.51c20.35,0,36.85,16.5,36.85,36.85Z"})});e.s(["IconMLogo",0,s])},7823,e=>{"use strict";function t(e,t){if(null==e)return{};var s={};for(var n in e)if(({}).hasOwnProperty.call(e,n)){if(-1!==t.indexOf(n))continue;s[n]=e[n]}return s}e.s(["default",()=>t])},37215,e=>{"use strict";function t(){return(t=Object.assign.bind()).apply(null,arguments)}e.s(["default",()=>t])},22480,e=>{"use strict";let t=(0,e.i(64334).createContext)({currentId:"",onLinkClick:()=>{},linkMap:{current:new Map}});e.s(["AnchorContext",0,t])},98319,e=>{"use strict";var t=e.i(64334);function s(...e){return(0,t.useCallback)(t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})},e)}e.s(["useComposedRefs",()=>s])},88036,59013,e=>{"use strict";var t=e.i(45100),s=e.i(64334),n=e.i(22480);function r(e){let t=(0,s.useRef)(null);return t.current=e,(0,s.useCallback)((...e)=>t.current?.(...e),[])}e.s(["useEvent",()=>r],59013);var c=e.i(96224);function o(e,t){try{return e.querySelector(t)}catch(e){return null}}function i({scrollContainer:e,targetId:t,offset:s,isScrolling:n}){var r,i;if(!t)return;let d=o(document,`#${CSS.escape(t)}`);if(!d)return;let l=e.current,a=((void 0===(r=l)&&(r=window),r)&&(r===window?Math.ceil(window.pageYOffset):r.scrollTop)||0)+((e,t)=>{if(!e.getClientRects().length)return 0;let s=e.getBoundingClientRect();return s.width||s.height?t&&t!==window?s.top-t.getBoundingClientRect().top:(t=e.ownerDocument.documentElement,s.top-t.clientTop):s.top})(d,l)+s;(n.current=!0,(0,c.isWindow)(l))?l.scrollTo((void 0===(i=l)&&(i=window),i)&&(i===window?Math.ceil(window.pageXOffset||window.scrollX):i.scrollLeft)||0,a):l.scrollTop=a}function d({targetId:e,linkMap:t,wrapperRef:s,currentId:n,setCurrentId:r,onChange:c}){e&&s.current&&t.current.get(e)&&e!==n&&r(e).then(()=>{c?.(e,n)})}var l=e.i(98319);let a=(0,s.forwardRef)((e,a)=>{let{scrollContainer:x,offset:h=0,children:u,onChange:j,queryKey:p="anchor-id",isCloseInitAnchor:g,...m}=e,{currentId:f,onLinkClick:v,wrapperRef:T,linkMap:S}=function({propScrollContainer:e,onChange:t,offset:n,queryKey:l,isCloseInitAnchor:a}){var x;let h,u,j=(0,s.useRef)(null),p=(0,s.useRef)(null),g=(0,s.useRef)(new Map),m=(0,s.useRef)(!1),[f,v]=function(e){let[t,n]=(0,s.useState)({value:"",resolve:e=>{}});return(0,s.useEffect)(()=>{t.resolve(t.value)},[t]),[t.value,e=>new Promise(t=>{n(s=>{let n=e;return"function"==typeof e&&(n=e(s.value)),{value:n,resolve:t}})})]}(0),T=r(()=>{if(m.current)return;let e=function({linkMap:e,scrollContainer:t}){let s=t.current,n=((0,c.isWindow)(s)?document.documentElement||document.body:s).getBoundingClientRect(),r=Array.from(e.current.keys()),i=[];for(let e of r){let t=o(document,"#"+CSS.escape(e));if(t){let{top:e}=t.getBoundingClientRect(),r=(0,c.isWindow)(s)?e:e-n.top;r>=0&&i.push({element:t,top:r})}}return 0===i.length?null:i.reduce((e,t)=>e.top<=t.top?e:t).element}({linkMap:g,scrollContainer:p});e?.id&&d({targetId:e.id,linkMap:g,wrapperRef:j,currentId:f,setCurrentId:v,onChange:t})}),S=r((x=()=>{T(),m.current=!1},h=null,(u=(...e)=>{h||(h=setTimeout(()=>{h=null,x(...e)},30))}).cancel=()=>{h&&(clearTimeout(h),h=null)},u));return(0,s.useEffect)(()=>(p.current=(0,c.isString)(e)?o(document,e):e||window,p.current?.addEventListener("scroll",S),()=>{p.current?.removeEventListener("scroll",S)}),[S,e]),(0,s.useEffect)(()=>{if(!a)return void S();let e=new URLSearchParams(new URL(window.location.href).search).get(l);e&&(d({targetId:e,linkMap:g,wrapperRef:j,currentId:f,setCurrentId:v,onChange:t}),i({scrollContainer:p,targetId:e,offset:n,isScrolling:m}))},[]),{onScroll:S,currentId:f,onLinkClick:function(e,s){e.preventDefault(),d({targetId:s,linkMap:g,wrapperRef:j,currentId:f,setCurrentId:v,onChange:t}),i({scrollContainer:p,targetId:s,offset:n,isScrolling:m})},wrapperRef:j,scrollContainer:p,linkMap:g}}({propScrollContainer:x,onChange:j,offset:h,queryKey:p,isCloseInitAnchor:g});return(0,t.jsx)(n.AnchorContext.Provider,{value:{currentId:f,linkMap:S,onLinkClick:v},children:(0,t.jsx)("div",{...m,ref:(0,l.useComposedRefs)(T,a),children:u})})});e.s(["Anchor",0,a],88036)},69438,e=>{"use strict";var t=e.i(45100),s=e.i(64334),n=e.i(22480),r=e.i(98319);let c=(0,s.forwardRef)((e,c)=>{let{onLinkClick:o,linkMap:i,currentId:d}=(0,s.useContext)(n.AnchorContext),{onClick:l,targetId:a,children:x,className:h,activeClassName:u,...j}=e,p=(0,s.useRef)(null);return(0,s.useEffect)(()=>{var e;return e=p.current,a&&i.current.set(a,e),()=>{i.current.delete(a)}},[a,i]),(0,t.jsx)("div",{ref:(0,r.useComposedRefs)(c,p),...j,onClick:e=>{e.stopPropagation(),l?.(e),o?.(e,a)},"data-target-id":a,className:d===a?u:h,children:x})});e.s(["AnchorLink",0,c],69438)},93562,e=>{"use strict";var t=e.i(88036),s=e.i(69438),n=e.i(22480);let r={Root:t.Anchor,Link:s.AnchorLink,Context:n.AnchorContext};e.s(["Anchor",()=>r])},53827,56245,e=>{"use strict";var t=e.i(45100),s=e.i(93562),n=e.i(37812);function r({items:e,...r}){return(0,t.jsx)(s.Anchor.Root,{...r,className:"sticky top-[90px] overflow-y-auto h-[calc(100vh-100px)]",children:function e(r){return Array.isArray(r)?r.map((r,c)=>(0,t.jsxs)(s.Anchor.Link,{targetId:r.text,children:[(0,t.jsx)(n.LinkItem,{item:r}),e(r.items)]},r.text||c)):null}(e)})}e.s(["Catalog",()=>r],56245),e.s([],53827)},16548,e=>{"use strict";var t=e.i(45100),s=e.i(18694);e.i(82928);var n=e.i(72304),r=e.i(47445),c=e.i(69389);function o(e){let o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.useMDXComponents)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.H1,{subheading:"拿 Message 组件举例",children:"如何在代码质量上超过大多数 React UI 组件库"}),"\n",(0,t.jsx)(n.ImageTypography,{src:"/toast/toast.webp",fill:!0,alt:"button"}),"\n",(0,t.jsx)(o.h2,{children:"前言"}),"\n",(0,t.jsxs)(o.p,{children:["注：以下 ",(0,t.jsx)(o.code,{children:"toast"})," 这个名称在国外很常见，对应国内的组件是 ",(0,t.jsx)(o.code,{children:"message"})," 和 ",(0,t.jsx)(o.code,{children:"notification"})," 组件。"]}),"\n",(0,t.jsxs)(o.p,{children:["我的组件大多数是参考了很多国内外知名组件库，所以质量上一般都不会有问题（有些同学会问，为什么不自己从 ",(0,t.jsx)(o.code,{children:"0"})," 到 ",(0,t.jsx)(o.code,{children:"1"})," 自己实现组件库，其实很简单，我就是敢写，你也不敢用呀，哈哈）。\n所以知道这些成熟的，经历过大项目考验的组件库的实现思路，才能有更强的实用性， 让组件库切切实实的可以用在实际项目中，或者在王炸的项目经历，让自己在面试中脱颖而出。"]}),"\n",(0,t.jsxs)(o.p,{children:["但在这个过程中，我发现大厂，写 ",(0,t.jsx)(o.code,{children:"UI"})," 组件的时候基本上是不分层的? 最基础的业务组件分层，分为："]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["视图层：",(0,t.jsx)(o.code,{children:"react"})," 或者 ",(0,t.jsx)(o.code,{children:"vue"})," 作为纯视图渲染"]}),"\n",(0,t.jsx)(o.li,{children:"数据层：聚合了业务数据和业务数据的处理，在做技术方案的时候，其实大多数情况下是对数据层的数据流向变化做梳理"}),"\n",(0,t.jsx)(o.li,{children:"异步管理层：主要请求后端数据和解决一些复杂的异步管理问题"}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:"而且如果你要做开源的项目的话，逻辑分的细一些，对于测试是非常友好的（做过单元测的朋友都懂，哈哈）。\n具体案例后面会讲，我们先看看为什么分层之后你的代码质量会更高。"}),"\n",(0,t.jsxs)(o.p,{children:["我们拿一家国内算是 ",(0,t.jsx)(o.code,{children:"Top3"})," 的大厂的 ",(0,t.jsx)(o.code,{children:"Message"})," 组件的代码来看看我们的 ",(0,t.jsx)(o.code,{children:"Toast"}),"（消息通知） 组件为什么分层之后比它的代码质量好很多。"]}),"\n",(0,t.jsx)(r.CodeBlock,{code:`const MessageContainer: React.FC<MessageContainerProps> = (props) => {
  // xxx代码省略
  useEffect(() => {
  // xxx
  }, []);
  return (
    xxx
  );
};
function createContainer({ attach, zIndex, placement = 'top' }: MessageOptions): Promise<Element> {
  // xxx
}
async function renderElement(theme, config: MessageOptions): Promise<MessageInstance> {
  // xxx
}
function isConfig(content: MessageOptions | React.ReactNode): content is MessageOptions {
  // xxx
}
const messageMethod: MessageMethod = (theme: MessageThemeList, content, duration?: number) => {
  // xxx
};
// 创建
export const MessagePlugin: MessagePlugin = (theme, message, duration) => messageMethod(theme, message, duration);

MessagePlugin.info = xx
MessagePlugin.error =  xx
MessagePlugin.warning = xx
MessagePlugin.success = xx
MessagePlugin.question = xx
MessagePlugin.loading = xx
MessagePlugin.config = xx
MessagePlugin.close = (messageInstance) => {
  // xx
};
MessagePlugin.closeAll = (): MessageCloseAllMethod => {
  // xx
};

export default MessageComponent;`,language:"javascript"}),"\n",(0,t.jsx)(o.p,{children:"这里最大的疑惑，例如"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["上面的 ",(0,t.jsx)(o.code,{children:"function isConfig"})," 这个函数属于工具函数，是否应该单独提到一个文件中，然后引入呢？"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"createContainer"})," 和 ",(0,t.jsx)(o.code,{children:"MessageContainer"})," 都属于跟创建容器相关的，是否应该放到一个文件中呢？"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"renderElement"})," 这个函数属于渲染元素的函数，是否应该放到一个文件中呢？"]}),"\n",(0,t.jsx)(o.li,{children:"...等等"}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:["这里并不是为了 ",(0,t.jsx)(o.code,{children:"踩一捧一"}),"，而是很多会迷信大厂的代码，觉得自己实力不够不敢去面试，我想告诉你，并不是大厂的程序员\n都是你想象的那样优秀，只是想激励这些对于面试大厂有些胆怯的朋友。"]}),"\n",(0,t.jsx)(o.h2,{children:"分层设计"}),"\n",(0,t.jsx)(o.p,{children:"再来看看经过简单的分层设计后，我们的代码的基本框架是什么："}),"\n",(0,t.jsx)(r.CodeBlock,{code:`-- /toast
  -- /hooks 存放 hooks 相关的代码的文件夹
  -- /utils 存放工具函数相关的代码的文件夹
  -- index.ts 入口文件
  -- interface.ts 存放接口相关的代码
  -- store.tsx 数据层
  -- toast-container.tsx 创建单个 message 的组件
  -- toast-provider.tsx 连接数据层（store）和视图层（ToastContainer）
`,language:"javascript"}),"\n",(0,t.jsxs)(o.p,{children:["我们拿其中的数据层 ",(0,t.jsx)(o.code,{children:"store.tsx"})," 来看看我的数据层设计，我个人觉得是十分清晰的。"]}),"\n",(0,t.jsx)(r.CodeBlock,{code:`function createToastStore() {
  const [state, setState] = useState([]);

  return {
    state, // 当前的 toast/message 列表
    add: (noticeProps: MessageProps) => {
      // 增加 toast/message
    },

    update: (id: number, options: MessageProps) => {
      // 更新 toast/message
    },

    clearAll: () => {
      // 清除所有 toast/message
    },

    remove: (id: number) => {
      // 清除某个 toast/message
    },
  };
}

export default useStore;`,language:"javascript"}),"\n",(0,t.jsx)(o.p,{children:"是不是看到我们的核心数据都在state中，然后对于数据的操作包含："}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"add"})," 方法,增加 ",(0,t.jsx)(o.code,{children:"Message"})]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"update"})," 方法，更新 ",(0,t.jsx)(o.code,{children:"Message"})]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"clearAll"})," 方法，清除所有 ",(0,t.jsx)(o.code,{children:"Message"})]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"remove"})," 方法，清除某个 ",(0,t.jsx)(o.code,{children:"Message"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(o.h2,{children:"实现框架无关的数据层"}),"\n",(0,t.jsxs)(o.p,{children:["我们知道 ",(0,t.jsx)(o.code,{children:"react"})," 有一些独立的数据层设计库，例如 ",(0,t.jsx)(o.code,{children:"zustand"}),"，",(0,t.jsx)(o.code,{children:"redux"})," 等， ",(0,t.jsx)(o.code,{children:"vue"})," 中有例如 ",(0,t.jsx)(o.code,{children:"pinia"}),", ",(0,t.jsx)(o.code,{children:"Vuex"})," 等等。"]}),"\n",(0,t.jsxs)(o.p,{children:["其实本质就是一个数据集合，可以增删改查，然后通知订阅了这个数据集合的组件，再试用 ",(0,t.jsx)(o.code,{children:"react"})," 或者 ",(0,t.jsx)(o.code,{children:"vue"})," 中更新 ",(0,t.jsx)(o.code,{children:"DOM"})," 的 ",(0,t.jsx)(o.code,{children:"API"})," 进行更新。"]}),"\n",(0,t.jsxs)(o.p,{children:["例如以下代码后面会结合 ",(0,t.jsx)(o.code,{children:"react"})," 的 ",(0,t.jsx)(o.code,{children:"useSyncExternalStore"})," 来实现数据的订阅和更新。"]}),"\n",(0,t.jsxs)(o.p,{children:["具体代码如下，有兴趣的可以看一下（看不懂没关系，如果想了解 ",(0,t.jsx)(o.code,{children:"headless"})," 的 ",(0,t.jsx)(o.code,{children:"Toast"})," 组件如何实现，欢迎加入到我们的技术社区）："]}),"\n",(0,t.jsx)(r.CodeBlock,{code:`import { DIRECTION } from './constants';
import { getId, findToast, getToastDirection } from './utils';
// types
import type { ToastStates, ToastProps } from './interface';

// state
export function createToastStore() {
let state: ToastStates = [];
const listeners = new Set<() => void>();

const setState = (setStateFn: (values: ToastStates) => ToastStates) => {
  state = setStateFn(state);
  listeners.forEach((l) => l());
};

return {
  getState: () => state,

  subscribe: (listener) => {
    listeners.add(listener);
    return () => {
      setState(() => []);
      listeners.delete(listener);
    };
  },

  add: (noticeProps: ToastProps) => {
    const id: number = getId(noticeProps);
    setState((preState: ToastStates) => {
      if (noticeProps?.id) {
        const isExist = getToastDirection(preState, noticeProps.id);
        if (isExist) return preState;
      }
      const direction = noticeProps.direction || DIRECTION.TOP_TO_BOTTOM;
      const isBottom = direction === DIRECTION.BOTTOM_TO_TOP;
      const toasts = isBottom
        ? [...(preState ?? []), { ...noticeProps, id, direction }]
        : [{ ...noticeProps, id, direction }, ...(preState ?? [])];

      return toasts;
    });
    return noticeProps?.id ? noticeProps?.id : id;
  },

  update: (id: ToastProps['id'], options: ToastProps) => {
    if (!id) return;

    setState((preState) => {
      const nextState = { ...preState };
      const { index } = findToast(nextState, id);

      if (index !== -1) {
        nextState[index] = {
          ...nextState[index],
          ...options,
        };
      }
      return nextState;
    });
  },

  clearAll: () => {
    setState(() => []);
  },

  remove: (id: number) => {
    setState((prevState) => {
      const isExist = getToastDirection(prevState, id);

      if (!isExist) return prevState;
      return prevState.filter((notice) => notice.id !== id);
    });
  },
};
}`,language:"javascript"}),"\n",(0,t.jsxs)(o.p,{children:["其实上面代码，有仅仅使用了一个简单的 ",(0,t.jsx)(o.code,{children:"发布订阅模式"}),", 实现了一个小的数据流管理器，可以看到是没有耦合任何框架的。"]}),"\n",(0,t.jsxs)(o.p,{children:["这样的好处很显而易见，如果我需要做单元测试，那么我仅仅测试 ",(0,t.jsx)(o.code,{children:"javascript"})," 代码就可以直接对管理 ",(0,t.jsx)(o.code,{children:"toast"})," 或者说 ",(0,t.jsx)(o.code,{children:"message"})," 组件的代码来看看我们的\n核心数据流管理器进行测试，甚至都可以在没有测试组件之前，就能发现问题。"]}),"\n",(0,t.jsxs)(o.p,{children:["当然，如果用 ",(0,t.jsx)(o.code,{children:"hooks"})," 管理数据层也是完全没有问题的，也相当于把数据层单独管理了。"]}),"\n",(0,t.jsx)(o.h2,{children:"函数调用的方式使用"}),"\n",(0,t.jsxs)(o.p,{children:["消息提示类组件，一些组件库会使用类似 ",(0,t.jsx)(o.code,{children:"useMessage"})," 或者 ",(0,t.jsx)(o.code,{children:"useToast"})," 的 ",(0,t.jsx)(o.code,{children:"hooks"})," 的方式使用。"]}),"\n",(0,t.jsxs)(o.p,{children:["但是我是非常不推荐这样用的，一是麻烦，二是前端有非常多的这样的场景，例如使用 ",(0,t.jsx)(o.code,{children:"axios"})," 或者一些更新的 ",(0,t.jsx)(o.code,{children:"fetch"})," 为基础封装请求库。"]}),"\n",(0,t.jsxs)(o.p,{children:["然后我们会在请求失败的时候做一层统一拦截，当后端返回错误的时候，我们就用 ",(0,t.jsx)(o.code,{children:"message"})," 或者 ",(0,t.jsx)(o.code,{children:"toast"})," 组件显示到前端页面。"]}),"\n",(0,t.jsxs)(o.p,{children:["此时很可能调用 ",(0,t.jsx)(o.code,{children:"message"})," 或者 ",(0,t.jsx)(o.code,{children:"toast"})," 组件的位置，并不在 ",(0,t.jsx)(o.code,{children:"react"})," 或者 ",(0,t.jsx)(o.code,{children:"vue"})," 文件中，而是在 ",(0,t.jsx)(o.code,{children:"axios"})," 或者 ",(0,t.jsx)(o.code,{children:"fetch"})," 封装的 ",(0,t.jsx)(o.code,{children:".js"})," 或者 ",(0,t.jsx)(o.code,{children:".ts"})," 结尾的文件中。例如:\n什么意思呢？"]}),"\n",(0,t.jsxs)(o.p,{children:["这些文件是纯 ",(0,t.jsx)(o.code,{children:"js"})," 或者 ",(0,t.jsx)(o.code,{children:"ts"})," 文件。所以 ",(0,t.jsx)(o.code,{children:"API"})," 设计的时候，一定要支持类似用法："]}),"\n",(0,t.jsx)(r.CodeBlock,{code:`import { createToastStore } from '@t-headless-ui/react';
const toastStore = createToastStore();

const App = () => {
return (
  <Button
    onClick={() => {
      toastStore.add(xxx参数);
    }}
    type='primary'
  >
    Open Message
  </Button>
);
};`,language:"jsx"}),"\n",(0,t.jsxs)(o.p,{children:["当然这里不建议大家直接这样使用，因为 ",(0,t.jsx)(o.code,{children:"@t-headless-ui/react"})," 是一个 ",(0,t.jsx)(o.code,{children:"headless"})," 组件库，所以我们的 ",(0,t.jsx)(o.code,{children:"toast"})," 组件是没有样式的，需要单独封装。"]}),"\n",(0,t.jsxs)(o.p,{children:["我们会单独封装一份业务上可以用的 ",(0,t.jsx)(o.code,{children:"message"})," 组件和 ",(0,t.jsx)(o.code,{children:"notification"})," 组件。"]}),"\n",(0,t.jsx)(o.h2,{children:"其它技术细节"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["如何在此基础上增加 ",(0,t.jsx)(o.code,{children:"limit"})," 限制 toast 组件的数量"]}),"\n",(0,t.jsxs)(o.li,{children:["如何在 ",(0,t.jsx)(o.code,{children:"hover"})," 的时候，暂停 ",(0,t.jsx)(o.code,{children:"toast"})," 组件的自动关闭功能"]}),"\n",(0,t.jsxs)(o.li,{children:["如何在 ",(0,t.jsx)(o.code,{children:"toast"})," 组件的 ",(0,t.jsx)(o.code,{children:"close"})," 按钮被点击的时候，立即关闭 ",(0,t.jsx)(o.code,{children:"toast"})]}),"\n",(0,t.jsxs)(o.li,{children:["如何设计更多有趣的 ",(0,t.jsx)(o.code,{children:"toast"})," 组件的展示动画"]}),"\n",(0,t.jsx)(o.li,{children:"...等等"}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:["欢迎大家加入我的国内首个 ",(0,t.jsx)(o.code,{children:"组件库技术社区"})," 一起讨论。同时也提供手把手帮你打造一个自己的组件库相关项目服务，并成为你面试 ",(0,t.jsx)(o.code,{children:"亮点项目"}),"，在面试中 ",(0,t.jsx)(o.code,{children:"脱颖而出"}),"。"]}),"\n",(0,t.jsx)(o.h2,{children:"附录"}),"\n",(0,t.jsx)(o.h3,{children:"安装 toast"}),"\n",(0,t.jsx)(r.CodeBlock,{code:`npm i @t-headless-ui/react
yarn i @t-headless-ui/react
pnpm i @t-headless-ui/react`,language:"bash"}),"\n",(0,t.jsx)(o.h3,{children:"引入和使用 toast"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"toast"})," 组件跟别的组件不太一样，首先需要你调用创建一个 ",(0,t.jsx)(o.code,{children:"store"})," 实例："]}),"\n",(0,t.jsx)(r.CodeBlock,{code:`import { createToastStore } from '@t-headless-ui/react';
const toastStore = createToastStore()
`,language:"tsx"}),"\n",(0,t.jsxs)(o.p,{children:["目的是用这个 ",(0,t.jsx)(o.code,{children:"store"})," 来管理 ",(0,t.jsx)(o.code,{children:"toast"})," 组件的状态，例如添加、删除、更新 ",(0,t.jsx)(o.code,{children:"toast"})," 组件的状态。"]}),"\n",(0,t.jsx)(o.p,{children:"其中支持传入两个参数"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["maxCount: 默认是 6，也就是最多同时展示 6 个 ",(0,t.jsx)(o.code,{children:"toast"})," / ",(0,t.jsx)(o.code,{children:"message"})," 组件"]}),"\n",(0,t.jsxs)(o.li,{children:["direction: 默认是 ",(0,t.jsx)(o.code,{children:"top-to-bottom"}),"，表示卡片是从上到下堆叠，还是从下到上堆叠，主要是在 ",(0,t.jsx)(o.code,{children:"stack"})," 模式有用（后续会讲）"]}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:["然后引入 ",(0,t.jsx)(o.code,{children:"ToastProvider"})," 组件，将 ",(0,t.jsx)(o.code,{children:"store"})," 实例作为 ",(0,t.jsx)(o.code,{children:"prop"})," 传递给 ",(0,t.jsx)(o.code,{children:"ToastProvider"})," 组件。",(0,t.jsx)(o.code,{children:"ToastProvider"})," 组件一般放在你的项目的入口文件中，\n例如 ",(0,t.jsx)(o.code,{children:"App.tsx"})," 或者 ",(0,t.jsx)(o.code,{children:"App.jsx"})," 文件。目的是初始化 ",(0,t.jsx)(o.code,{children:"Toast"})," 组件（其背后默认会在 ",(0,t.jsx)(o.code,{children:"document.body"})," 创建一个可以出现 ",(0,t.jsx)(o.code,{children:"toast"})," 信息框），当然我们也支持自定义插入\n到某个 ",(0,t.jsx)(o.code,{children:"dom"})," 元素中，一般情况使用默认的即可。"]}),"\n",(0,t.jsx)(r.CodeBlock,{code:`import { ToastProvider } from '@t-headless-ui/react';
// 以下的 TOAST_Z_INDEX 代表是的 z-[2000]，也就是 z-index 是 2000 (popover 组件设计的 z-index 是 1000)
// 其实 z-index 管理是一个比较复杂的问题，可以在全局方案设计看 z-index 管理问题
<ToastProvider
  store={toastStore}
  containerProps={{
  className: cs('w-full fixed top-8 flex flex-col items-center pointer-events-none', \`\${TOAST_Z_INDEX}\`)}}
  // stack 是否开启堆叠模式，默认是 false
/>`,language:"tsx"}),"\n",(0,t.jsxs)(o.p,{children:["注意，上面有个 ",(0,t.jsx)(o.code,{children:"containerProps"})," 参数，其中我们传入了 ",(0,t.jsx)(o.code,{children:"className"})," 属性，目的是用来定义这个 ",(0,t.jsx)(o.code,{children:"toast"})," 组件在哪个位置弹出，这里我们使用的是 ",(0,t.jsx)(o.code,{children:"top-8"}),"（可以理解为 ",(0,t.jsx)(o.code,{children:"top: 30px"}),"）,并且 ",(0,t.jsx)(o.code,{children:"fixed"})," 定位。"]}),"\n",(0,t.jsxs)(o.p,{children:["所以，你可以定位到任何位置，甚至在某个容器中，这个容易的定位设为 ",(0,t.jsx)(o.code,{children:"relative"}),", 我们 ",(0,t.jsx)(o.code,{children:"toast"})," 的定位设置为 ",(0,t.jsx)(o.code,{children:"absolute"}),"，这样就相当于某个容器定位了。"]}),"\n",(0,t.jsxs)(o.p,{children:["上面注释谈到 ",(0,t.jsx)(o.code,{children:"z-index"})," 管理问题，这个问题实际上在多个弹框出现时，是很容易产生问题的，问题本身和解决思路，可以查看在我们的全局方管理方案系列文章。"]}),"\n",(0,t.jsxs)(o.p,{children:["然后之前的 ",(0,t.jsx)(o.code,{children:"toastStore"})," 你可以通过 ",(0,t.jsx)(o.code,{children:"react"})," 的 ",(0,t.jsx)(o.code,{children:"Provider"})," 共享给 ",(0,t.jsx)(o.code,{children:"react"})," 组件树中的所有组件，或者直接 ",(0,t.jsx)(o.code,{children:"export"})," 直接导出，这样等页面渲染完毕，"]}),"\n",(0,t.jsxs)(o.p,{children:["如此的话，无论是在 ",(0,t.jsx)(o.code,{children:"react"})," 组件内部，还是直接在 ",(0,t.jsx)(o.code,{children:"js"})," 或者 ",(0,t.jsx)(o.code,{children:"ts"})," 文件中调用 ",(0,t.jsx)(o.code,{children:"toastStore.add"})," 方法，都可以添加一个 ",(0,t.jsx)(o.code,{children:"toast"})," 组件了。"]}),"\n",(0,t.jsxs)(o.p,{children:["以下是通过 ",(0,t.jsx)(o.code,{children:"toastStore.add"})," 方法来添加一个 ",(0,t.jsx)(o.code,{children:"toast"})," 组件的案例，我们直接使用了 ",(0,t.jsx)(o.code,{children:"Alert"})," 组件充当 ",(0,t.jsx)(o.code,{children:"toast"})," 的内容。"]}),"\n",(0,t.jsx)(r.CodeBlock,{code:`<button
onClick={() =>
  toastStore.add({
    component: <TAlert message="这是一条通知" title="Alter" containerClassName="pb-2" />,
  })
}
>
点击我显示通知
</button>`,language:"tsx"}),"\n",(0,t.jsxs)(o.p,{children:["因为我们的 ",(0,t.jsx)(o.code,{children:"toast"})," 组件是一个 ",(0,t.jsx)(o.code,{children:"headless"})," 组件，所以弹出的内容完全是自定义的，后面，我们会再次封装，使用便捷性上会更上一层楼。"]})]})}function i(e={}){let{wrapper:n}={...(0,s.useMDXComponents)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}function d(){return(0,t.jsx)(i,{})}let l=[{level:2,text:"前言"},{level:2,text:"分层设计"},{level:2,text:"实现框架无关的数据层"},{level:2,text:"函数调用的方式使用"},{level:2,text:"其它技术细节"},{level:2,text:"附录",items:[{level:3,text:"安装 toast"},{level:3,text:"引入和使用 toast"}]}];e.i(53827);var a=e.i(56245);function x(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"grow shrink basis-0 overflow-hidden mx-16 mt-8 mb-12",children:(0,t.jsx)(d,{})}),(0,t.jsx)("div",{className:"hidden z-10 xl:flex xl:w-48 mt-8 pl-0 shrink-0",children:(0,t.jsx)(a.Catalog,{items:l,offset:-90})})]})}e.s(["default",()=>x],16548)}]);