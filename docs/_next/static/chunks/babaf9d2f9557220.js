(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1521,(e,n,s)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"warnOnce",{enumerable:!0,get:function(){return t}});let t=e=>{}},79537,e=>{e.v({AElig:"Æ",AMP:"&",Aacute:"Á",Acirc:"Â",Agrave:"À",Aring:"Å",Atilde:"Ã",Auml:"Ä",COPY:"©",Ccedil:"Ç",ETH:"Ð",Eacute:"É",Ecirc:"Ê",Egrave:"È",Euml:"Ë",GT:">",Iacute:"Í",Icirc:"Î",Igrave:"Ì",Iuml:"Ï",LT:"<",Ntilde:"Ñ",Oacute:"Ó",Ocirc:"Ô",Ograve:"Ò",Oslash:"Ø",Otilde:"Õ",Ouml:"Ö",QUOT:'"',REG:"®",THORN:"Þ",Uacute:"Ú",Ucirc:"Û",Ugrave:"Ù",Uuml:"Ü",Yacute:"Ý",aacute:"á",acirc:"â",acute:"´",aelig:"æ",agrave:"à",amp:"&",aring:"å",atilde:"ã",auml:"ä",brvbar:"¦",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",ecirc:"ê",egrave:"è",eth:"ð",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",iacute:"í",icirc:"î",iexcl:"¡",igrave:"ì",iquest:"¿",iuml:"ï",laquo:"«",lt:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",oacute:"ó",ocirc:"ô",ograve:"ò",ordf:"ª",ordm:"º",oslash:"ø",otilde:"õ",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',raquo:"»",reg:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",times:"×",uacute:"ú",ucirc:"û",ugrave:"ù",uml:"¨",uuml:"ü",yacute:"ý",yen:"¥",yuml:"ÿ"})},27208,e=>{e.v({0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"})},73850,e=>{"use strict";var n=e.i(45100);let s=(0,e.i(51849).createIcon)({iconProps:{useFillCurrentColor:!0},viewBox:"0 0 156 94",paths:(0,n.jsx)("path",{d:"M0,31.18h31.18v62.56H0V31.18Zm155.46,5.67v56.89h-31.18V45.36c0-7.83-6.34-14.18-14.17-14.18h-17.01c.29,1.85,.44,3.74,.44,5.67v56.89h-31.18V45.36c0-7.83-6.35-14.18-14.17-14.18H31.18V0h25.51c13.15,0,24.69,6.89,31.21,17.25,2.62,4.15,4.43,8.86,5.2,13.92V0h25.51c20.35,0,36.85,16.5,36.85,36.85Z"})});e.s(["IconMLogo",0,s])},7823,e=>{"use strict";function n(e,n){if(null==e)return{};var s={};for(var t in e)if(({}).hasOwnProperty.call(e,t)){if(-1!==n.indexOf(t))continue;s[t]=e[t]}return s}e.s(["default",()=>n])},37215,e=>{"use strict";function n(){return(n=Object.assign.bind()).apply(null,arguments)}e.s(["default",()=>n])},22480,e=>{"use strict";let n=(0,e.i(64334).createContext)({currentId:"",onLinkClick:()=>{},linkMap:{current:new Map}});e.s(["AnchorContext",0,n])},98319,e=>{"use strict";var n=e.i(64334);function s(...e){return(0,n.useCallback)(n=>{e.forEach(e=>{"function"==typeof e?e(n):null!=e&&(e.current=n)})},e)}e.s(["useComposedRefs",()=>s])},88036,59013,e=>{"use strict";var n=e.i(45100),s=e.i(64334),t=e.i(22480);function r(e){let n=(0,s.useRef)(null);return n.current=e,(0,s.useCallback)((...e)=>n.current?.(...e),[])}e.s(["useEvent",()=>r],59013);var o=e.i(96224);function c(e,n){try{return e.querySelector(n)}catch(e){return null}}function i({scrollContainer:e,targetId:n,offset:s,isScrolling:t}){var r,i;if(!n)return;let l=c(document,`#${CSS.escape(n)}`);if(!l)return;let d=e.current,a=((void 0===(r=d)&&(r=window),r)&&(r===window?Math.ceil(window.pageYOffset):r.scrollTop)||0)+((e,n)=>{if(!e.getClientRects().length)return 0;let s=e.getBoundingClientRect();return s.width||s.height?n&&n!==window?s.top-n.getBoundingClientRect().top:(n=e.ownerDocument.documentElement,s.top-n.clientTop):s.top})(l,d)+s;(t.current=!0,(0,o.isWindow)(d))?d.scrollTo((void 0===(i=d)&&(i=window),i)&&(i===window?Math.ceil(window.pageXOffset||window.scrollX):i.scrollLeft)||0,a):d.scrollTop=a}function l({targetId:e,linkMap:n,wrapperRef:s,currentId:t,setCurrentId:r,onChange:o}){e&&s.current&&n.current.get(e)&&e!==t&&r(e).then(()=>{o?.(e,t)})}var d=e.i(98319);let a=(0,s.forwardRef)((e,a)=>{let{scrollContainer:u,offset:h=0,children:x,onChange:p,queryKey:g="anchor-id",isCloseInitAnchor:j,...m}=e,{currentId:f,onLinkClick:v,wrapperRef:C,linkMap:w}=function({propScrollContainer:e,onChange:n,offset:t,queryKey:d,isCloseInitAnchor:a}){var u;let h,x,p=(0,s.useRef)(null),g=(0,s.useRef)(null),j=(0,s.useRef)(new Map),m=(0,s.useRef)(!1),[f,v]=function(e){let[n,t]=(0,s.useState)({value:"",resolve:e=>{}});return(0,s.useEffect)(()=>{n.resolve(n.value)},[n]),[n.value,e=>new Promise(n=>{t(s=>{let t=e;return"function"==typeof e&&(t=e(s.value)),{value:t,resolve:n}})})]}(0),C=r(()=>{if(m.current)return;let e=function({linkMap:e,scrollContainer:n}){let s=n.current,t=((0,o.isWindow)(s)?document.documentElement||document.body:s).getBoundingClientRect(),r=Array.from(e.current.keys()),i=[];for(let e of r){let n=c(document,"#"+CSS.escape(e));if(n){let{top:e}=n.getBoundingClientRect(),r=(0,o.isWindow)(s)?e:e-t.top;r>=0&&i.push({element:n,top:r})}}return 0===i.length?null:i.reduce((e,n)=>e.top<=n.top?e:n).element}({linkMap:j,scrollContainer:g});e?.id&&l({targetId:e.id,linkMap:j,wrapperRef:p,currentId:f,setCurrentId:v,onChange:n})}),w=r((u=()=>{C(),m.current=!1},h=null,(x=(...e)=>{h||(h=setTimeout(()=>{h=null,u(...e)},30))}).cancel=()=>{h&&(clearTimeout(h),h=null)},x));return(0,s.useEffect)(()=>(g.current=(0,o.isString)(e)?c(document,e):e||window,g.current?.addEventListener("scroll",w),()=>{g.current?.removeEventListener("scroll",w)}),[w,e]),(0,s.useEffect)(()=>{if(!a)return void w();let e=new URLSearchParams(new URL(window.location.href).search).get(d);e&&(l({targetId:e,linkMap:j,wrapperRef:p,currentId:f,setCurrentId:v,onChange:n}),i({scrollContainer:g,targetId:e,offset:t,isScrolling:m}))},[]),{onScroll:w,currentId:f,onLinkClick:function(e,s){e.preventDefault(),l({targetId:s,linkMap:j,wrapperRef:p,currentId:f,setCurrentId:v,onChange:n}),i({scrollContainer:g,targetId:s,offset:t,isScrolling:m})},wrapperRef:p,scrollContainer:g,linkMap:j}}({propScrollContainer:u,onChange:p,offset:h,queryKey:g,isCloseInitAnchor:j});return(0,n.jsx)(t.AnchorContext.Provider,{value:{currentId:f,linkMap:w,onLinkClick:v},children:(0,n.jsx)("div",{...m,ref:(0,d.useComposedRefs)(C,a),children:x})})});e.s(["Anchor",0,a],88036)},69438,e=>{"use strict";var n=e.i(45100),s=e.i(64334),t=e.i(22480),r=e.i(98319);let o=(0,s.forwardRef)((e,o)=>{let{onLinkClick:c,linkMap:i,currentId:l}=(0,s.useContext)(t.AnchorContext),{onClick:d,targetId:a,children:u,className:h,activeClassName:x,...p}=e,g=(0,s.useRef)(null);return(0,s.useEffect)(()=>{var e;return e=g.current,a&&i.current.set(a,e),()=>{i.current.delete(a)}},[a,i]),(0,n.jsx)("div",{ref:(0,r.useComposedRefs)(o,g),...p,onClick:e=>{e.stopPropagation(),d?.(e),c?.(e,a)},"data-target-id":a,className:l===a?x:h,children:u})});e.s(["AnchorLink",0,o],69438)},93562,e=>{"use strict";var n=e.i(88036),s=e.i(69438),t=e.i(22480);let r={Root:n.Anchor,Link:s.AnchorLink,Context:t.AnchorContext};e.s(["Anchor",()=>r])},69744,e=>{"use strict";var n=e.i(45100),s=e.i(18694);e.i(82928);var t=e.i(72304),r=e.i(2697),o=e.i(47445),c=e.i(69389);e.i(73869);var i=e.i(84435);let l=`function App() {
 let index = 1;

  return (
    <TButton
        status="primary"
        onClick={() =>
          toastStore.add({
            duration: 4,
            component: <TAlert message={\`这是第\${index++}条通知\`} title="Alter" containerClassName="pb-2" />,
          })
        }
      >
        Open message
    </TButton>
  );
}`;function d(){return(0,n.jsx)(i.CodePreview,{code:l})}let a=`
function App() {
  return (
    <div className="flex gap-x-2">
      <TButton
        status="primary"
        onClick={() => {
          TMessage.info({
            duration: 4,
            message: '这是一条 info message',
          });
        }}
      >
        Info
      </TButton>
      <TButton
        status="warning"
        onClick={() => {
          TMessage.warning({
            duration: 4,
            message: '这是一条 warning message',
          });
        }}
      >
        Warning
      </TButton>
       <TButton
        status="success"
        onClick={() => {
          TMessage.success({
            duration: 4,
            message: '这是一条 success message',
          });
        }}
      >
        Success
      </TButton>
      <TButton
        status="error"
        onClick={() => {
          TMessage.error({
            duration: 4,
            message: '这是一条 error message',
          });
        }}
      >
        Error
      </TButton>
       <TButton
        status="default"
        onClick={() => {
          TMessage.loading({
            duration: 4,
            message: '这是一条 loading message',
          });
        }}
      >
        Loading
      </TButton>
    </div>
  );
}`;function u(){return(0,n.jsx)(i.CodePreview,{code:a})}let h=`
function App() {
  return (
    <div className="flex gap-x-2">
      <TButton
        status="primary"
        onClick={() => {
          TMessage.info({
            duration: null,
            showClose: true,
            message: '这是一条 info message',
          });
        }}
      >
        Close Effect
      </TButton>
    </div>
  );
}`;function x(){return(0,n.jsx)(i.CodePreview,{code:h})}let p=`
function App() {
  return (
    <div className="flex gap-x-2">
      <TButton
        status="primary"
        onClick={() => {
          const id = TMessage.loading({
            duration: null,
            message: '这是一条 info message',
          });
          
          setTimeout(() => {
            TMessage.update(id, {
              type: 'success',
              duration: 4,
              message: '请求成功',
            });
          }, 3000);
        }}
      >
        Update Info
      </TButton>
    </div>
  );
}`;function g(){return(0,n.jsx)(i.CodePreview,{code:p})}function j(e){let i={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.useMDXComponents)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.H1,{children:"封装一个专业的 Toast 组件"}),"\n",(0,n.jsx)(r.AvatarM,{}),"\n",(0,n.jsx)(t.ImageTypography,{src:"/toast/toast.webp",fill:!0,alt:"toast"}),"\n",(0,n.jsxs)(i.p,{children:["注：这篇是讲的使用 ",(0,n.jsx)(i.code,{children:"css"})," 添加样式。如果你对原子类添加样式感兴趣，例如 ",(0,n.jsx)(i.code,{children:"tailwindcss"}),"， 请移步下面的篇文章。"]}),"\n",(0,n.jsx)(i.p,{children:"基础用法和效果如下："}),"\n",(0,n.jsx)(d,{}),"\n",(0,n.jsxs)(i.p,{children:["从上面的可以看出，我们其实可以自定义 ",(0,n.jsx)(i.code,{children:"toast"})," 组件弹出的样式，传递给 ",(0,n.jsx)(i.code,{children:"component"})," 参数即可。"]}),"\n",(0,n.jsxs)(i.p,{children:["注：强烈建议看一下 ",(0,n.jsx)(i.code,{children:"必读指南"})," 中的 ",(0,n.jsx)(i.code,{children:"引入和使用 toast"})," 章节，理解 ",(0,n.jsx)(i.code,{children:"toastStore"})," 是如何来的，以及如何使用。简单来说 ",(0,n.jsx)(i.code,{children:"toastStore"})," 具有如下方法："]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["add: 添加 ",(0,n.jsx)(i.code,{children:"Message"})," 或者 ",(0,n.jsx)(i.code,{children:"Notification"})]}),"\n",(0,n.jsxs)(i.li,{children:["remove: 删除 ",(0,n.jsx)(i.code,{children:"Message"})," 或者 ",(0,n.jsx)(i.code,{children:"Notification"})]}),"\n",(0,n.jsxs)(i.li,{children:["removeAll: 删除所有弹出的 ",(0,n.jsx)(i.code,{children:"Message"})," 或者 ",(0,n.jsx)(i.code,{children:"Notification"})]}),"\n",(0,n.jsxs)(i.li,{children:["update: 更新特定的 ",(0,n.jsx)(i.code,{children:"Message"})," 或者 ",(0,n.jsx)(i.code,{children:"Notification"})," 的内容"]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["好了，为了我们能够更好的使用 ",(0,n.jsx)(i.code,{children:"toast"})," 组件，我们需要封装的更简单一些，主要是增加不同的状态，例如:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"Message.info({ content: '这是一条 info 消息' })"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"Message.success({ content: '这是一条 success 消息' })"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"Message.error({ content: '这是一条 error 消息' })"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"Notification.info({ content: '这是一条 info 消息' })"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"Notification.success({ content: '这是一条 success 消息' })"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"Notification.error({ content: '这是一条 error 消息' })"})}),"\n",(0,n.jsx)(i.li,{children:"...等等"}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["所以我第一步先从封装 ",(0,n.jsx)(i.code,{children:"Message"})," 组件的状态开始。"]}),"\n",(0,n.jsxs)(i.p,{children:["其中 ",(0,n.jsx)(i.code,{children:"Alert"})," 组件的代码，可以在 ",(0,n.jsx)(i.code,{children:"Alert"})," 章节查看，感兴趣的可以通过导航跳转到这个章节。"]}),"\n",(0,n.jsx)(i.h2,{children:"1、Message 基础封装"}),"\n",(0,n.jsxs)(i.p,{children:["以下是一个简单的封装，封装了 ",(0,n.jsx)(i.code,{children:"Message"})," 组件的状态，包括 ",(0,n.jsx)(i.code,{children:"info"}),"、",(0,n.jsx)(i.code,{children:"success"}),"、",(0,n.jsx)(i.code,{children:"error"})," 等状态。"]}),"\n",(0,n.jsx)(o.CodeBlock,{code:`import React from 'react';
// 来自自定义封装的 Alter 组件
import { TAlert } from '@/component/t-alert';
// 来自在 app.js/ts 创建的 toast store 实例
import { toastStore } from '@/app';

interface MessageProps {
message?: string;
title?: string;
// 单位是秒
duration?: number | null;
onClose?: () => void;
icon?: React.ReactNode;
containerClassName?: string;
showClose?: boolean;
type?: 'info' | 'loading' | 'success' | 'warning' | 'error';
showProgress?: boolean;
}

const handleMessage = (options: MessageProps) => {
const {
  message,
  title,
  duration = 3,
  onClose,
  icon,
  containerClassName = 'pb-2',
  showClose = false,
  type = 'info',
  showProgress = false,
} = options;

return toastStore.add({
  duration,
  showProgress,
  component: (
    <TAlert
      message={message}
      title={title}
      showClose={showClose}
      onClose={onClose}
      type={type}
      containerClassName={containerClassName}
      icon={icon}
    />
  ),
});
};

export const TMessage = {
info: (options: MessageProps) => {
  return handleMessage({ ...options, type: 'info' });
},
loading: (options: MessageProps) => {
  return handleMessage({ ...options, type: 'loading' });
},
success: (options: MessageProps) => {
  return handleMessage({ ...options, type: 'success' });
},
warning: (options: MessageProps) => {
  return handleMessage({ ...options, type: 'warning' });
},
error: (options: MessageProps) => {
  return handleMessage({ ...options, type: 'error' });
},
};`,language:"jsx"}),"\n",(0,n.jsxs)(i.p,{children:["以上代码在封装后，我们就实现了可以弹出 ",(0,n.jsx)(i.code,{children:"Message"})," 组件的功能，我们来试一试。"]}),"\n",(0,n.jsx)(u,{}),"\n",(0,n.jsx)(i.h2,{children:"2、hover 暂停特效"}),"\n",(0,n.jsxs)(i.p,{children:["当鼠标移入 ",(0,n.jsx)(i.code,{children:"message"})," 组件时，",(0,n.jsx)(i.code,{children:"message"})," 组件会暂停倒计时，当鼠标移出时，",(0,n.jsx)(i.code,{children:"message"})," 组件会恢复倒计时。"]}),"\n",(0,n.jsxs)(i.p,{children:["这个功能是在 ",(0,n.jsx)(i.code,{children:"headless"})," 组件库中实现的, 即 ",(0,n.jsx)(i.code,{children:"@t-headless-ui/react"}),", 这里为什么提一下，因为整体实现的思路值得大家学习借鉴, 核心代码如下："]}),"\n",(0,n.jsx)(o.CodeBlock,{code:`
const [spentTime, setSpentTime] = useState(0);
const [hovering, setHovering] = useState(false);

useEffect(() => {
  if (!hovering && duration > 0) {
    const start = Date.now() - spentTime;
    const timeout = setTimeout(
      () => {
        store.remove?.(id);
      },
      duration * 1000 - spentTime,
    );

    return () => {
      clearTimeout(timeout);
      setSpentTime(Date.now() - start);
    };
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [duration, mergedHovering]);`,language:"css"}),"\n",(0,n.jsxs)(i.p,{children:["简单介绍一下上面的代码，初始化时，会启动一个 ",(0,n.jsx)(i.code,{children:"setTimeout"})," 定时器，并且记录一个 ",(0,n.jsx)(i.code,{children:"start"})," 时间点，目的是当鼠标 ",(0,n.jsx)(i.code,{children:"hover"})," 上去的时候，就会触发在 ",(0,n.jsx)(i.code,{children:"toast"})," 中注册的 ",(0,n.jsx)(i.code,{children:"onMouseEnter"})," 事件，此时 ",(0,n.jsx)(i.code,{children:"hovering"})," 变量会设为 ",(0,n.jsx)(i.code,{children:"true"})]}),"\n",(0,n.jsxs)(i.p,{children:["这会触发 ",(0,n.jsx)(i.code,{children:"useEffect"})," 注册的 ",(0,n.jsx)(i.code,{children:"return"})," 返回函数。"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:" clearTimeout(timeout)"})," 方法，清除之前的定时器"]}),"\n",(0,n.jsxs)(i.li,{children:["并且使用 ",(0,n.jsx)(i.code,{children:"Date.now() - start"})," 计算出还剩余的时间"]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["当 ",(0,n.jsx)(i.code,{children:"hover"})," 移开时，会触发 ",(0,n.jsx)(i.code,{children:"onMouseLeave"})," 事件，此时 ",(0,n.jsx)(i.code,{children:"hovering"})," 变量会设为 ",(0,n.jsx)(i.code,{children:"false"}),"，这会触发 ",(0,n.jsx)(i.code,{children:"useEffect"})," 注册的 ",(0,n.jsx)(i.code,{children:"return"})," 返回函数。然后更重要的是，定时器重启启动。"]}),"\n",(0,n.jsxs)(i.p,{children:["这里注意，组件支持 ",(0,n.jsx)(i.code,{children:"duration"})," 传值为 ",(0,n.jsx)(i.code,{children:"null"}),"，这样就可以让 ",(0,n.jsx)(i.code,{children:"message"})," 组件一直存在，直到9用户手动关闭它，或者超出在 ",(0,n.jsx)(i.code,{children:"createToastStore"})," 时设置的最大 ",(0,n.jsx)(i.code,{children:"message"})," 组件同时存在的个数，也就是 ",(0,n.jsx)(i.code,{children:"maxCount"})," 范围（默认是 ",(0,n.jsx)(i.code,{children:"6"}),"）。"]}),"\n",(0,n.jsx)(i.h2,{children:"3、增加取消按钮"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"headless"})," 组件库中，我们会透传一个函数名为 ",(0,n.jsx)(i.code,{children:"closeToast"}),"，可以用来关闭 ",(0,n.jsx)(i.code,{children:"message"})," 组件。所以我们可以在 ",(0,n.jsx)(i.code,{children:"Alert"})," 组件中使用。 ",(0,n.jsx)(i.code,{children:"Alert"})," 组件代码如下："]}),"\n",(0,n.jsx)(o.CodeBlock,{code:`{showClose && (
          <div>
            <button
              className="bg-transparent border-none text-[1.1rem] text-gray-400 cursor-pointer p-0 ml-2 hover:text-neutral-500"
              onClick={() => {
                onClose?.();
                closeToast?.();
              }}
            >
              &times;
            </button>
          </div>
        )}`,language:"jsx"}),"\n",(0,n.jsxs)(i.p,{children:["可以看到，只要传入 ",(0,n.jsx)(i.code,{children:"showClose"}),", 就会显示关闭按钮，并且点击后能关闭 ",(0,n.jsx)(i.code,{children:"message"})," 组件, 示例如下："]}),"\n",(0,n.jsx)(x,{}),"\n",(0,n.jsx)(i.h2,{children:"5、更新组件状态"}),"\n",(0,n.jsxs)(i.p,{children:["很常见的一个需求是开始 ",(0,n.jsx)(i.code,{children:"message"})," 组件状态是 ",(0,n.jsx)(i.code,{children:"loading"}),"，然后后端返回数据后，根据数据状态更新 ",(0,n.jsx)(i.code,{children:"message"})," 组件状态。我们举个小例子, 首先，触发 ",(0,n.jsx)(i.code,{children:"loading"})," 状态的 ",(0,n.jsx)(i.code,{children:"message"})," 时，一般要加一个 ",(0,n.jsx)(i.code,{children:"duration: null"}),", 此时 ",(0,n.jsx)(i.code,{children:"message"})," 组件会一直存在，等到后端返回（这里使用 ",(0,n.jsx)(i.code,{children:"setTimeout"})," 模拟），然后使用 ",(0,n.jsx)(i.code,{children:"update"})," 方法更新状态、"]}),"\n",(0,n.jsx)(g,{}),"\n",(0,n.jsx)(i.h2,{children:"6、总结"}),"\n",(0,n.jsx)(i.p,{children:"作为一名合格的前端开发，毫无疑问需要对页面常见功能和组件了解基本原理，如果要向更高级的前端工程师段位进阶，这些组件需要自己实现\n也是必须的。最后，希望文章对你有帮助，有任何疑惑，欢迎加入目前国内最好手写组件库交流群。"}),"\n",(0,n.jsxs)(i.p,{children:["完整代码可以去我的 ",(0,n.jsx)(i.code,{children:"@t-headless-ui/react"})," 组件库中查看。也欢迎报名我的质量超超超高的 ",(0,n.jsx)(i.code,{children:"React"})," 组件库开发教程。"]}),"\n",(0,n.jsx)(i.p,{children:"我也很乐意直接帮助你打造自己的核心项目，放入简历中，让你在面试中脱颖而出。"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"Vue"})," 组件库也在开发中，vue 的同伴也欢迎加群哦。"]})]})}function m(e={}){let{wrapper:t}={...(0,s.useMDXComponents)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}function f(){return(0,n.jsx)(m,{})}e.s(["HowMakeCssToast",()=>f],69744)}]);