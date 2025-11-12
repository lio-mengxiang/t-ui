(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1521,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},79537,e=>{e.v({AElig:"Æ",AMP:"&",Aacute:"Á",Acirc:"Â",Agrave:"À",Aring:"Å",Atilde:"Ã",Auml:"Ä",COPY:"©",Ccedil:"Ç",ETH:"Ð",Eacute:"É",Ecirc:"Ê",Egrave:"È",Euml:"Ë",GT:">",Iacute:"Í",Icirc:"Î",Igrave:"Ì",Iuml:"Ï",LT:"<",Ntilde:"Ñ",Oacute:"Ó",Ocirc:"Ô",Ograve:"Ò",Oslash:"Ø",Otilde:"Õ",Ouml:"Ö",QUOT:'"',REG:"®",THORN:"Þ",Uacute:"Ú",Ucirc:"Û",Ugrave:"Ù",Uuml:"Ü",Yacute:"Ý",aacute:"á",acirc:"â",acute:"´",aelig:"æ",agrave:"à",amp:"&",aring:"å",atilde:"ã",auml:"ä",brvbar:"¦",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",ecirc:"ê",egrave:"è",eth:"ð",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",iacute:"í",icirc:"î",iexcl:"¡",igrave:"ì",iquest:"¿",iuml:"ï",laquo:"«",lt:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",oacute:"ó",ocirc:"ô",ograve:"ò",ordf:"ª",ordm:"º",oslash:"ø",otilde:"õ",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',raquo:"»",reg:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",times:"×",uacute:"ú",ucirc:"û",ugrave:"ù",uml:"¨",uuml:"ü",yacute:"ý",yen:"¥",yuml:"ÿ"})},27208,e=>{e.v({0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"})},73850,e=>{"use strict";var t=e.i(45100);let n=(0,e.i(51849).createIcon)({iconProps:{useFillCurrentColor:!0},viewBox:"0 0 156 94",paths:(0,t.jsx)("path",{d:"M0,31.18h31.18v62.56H0V31.18Zm155.46,5.67v56.89h-31.18V45.36c0-7.83-6.34-14.18-14.17-14.18h-17.01c.29,1.85,.44,3.74,.44,5.67v56.89h-31.18V45.36c0-7.83-6.35-14.18-14.17-14.18H31.18V0h25.51c13.15,0,24.69,6.89,31.21,17.25,2.62,4.15,4.43,8.86,5.2,13.92V0h25.51c20.35,0,36.85,16.5,36.85,36.85Z"})});e.s(["IconMLogo",0,n])},7823,e=>{"use strict";function t(e,t){if(null==e)return{};var n={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n}e.s(["default",()=>t])},37215,e=>{"use strict";function t(){return(t=Object.assign.bind()).apply(null,arguments)}e.s(["default",()=>t])},22480,e=>{"use strict";let t=(0,e.i(64334).createContext)({currentId:"",onLinkClick:()=>{},linkMap:{current:new Map}});e.s(["AnchorContext",0,t])},98319,e=>{"use strict";var t=e.i(64334);function n(...e){return(0,t.useCallback)(t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})},e)}e.s(["useComposedRefs",()=>n])},88036,59013,e=>{"use strict";var t=e.i(45100),n=e.i(64334),r=e.i(22480);function s(e){let t=(0,n.useRef)(null);return t.current=e,(0,n.useCallback)((...e)=>t.current?.(...e),[])}e.s(["useEvent",()=>s],59013);var o=e.i(96224);function i(e,t){try{return e.querySelector(t)}catch(e){return null}}function c({scrollContainer:e,targetId:t,offset:n,isScrolling:r}){var s,c;if(!t)return;let u=i(document,`#${CSS.escape(t)}`);if(!u)return;let a=e.current,l=((void 0===(s=a)&&(s=window),s)&&(s===window?Math.ceil(window.pageYOffset):s.scrollTop)||0)+((e,t)=>{if(!e.getClientRects().length)return 0;let n=e.getBoundingClientRect();return n.width||n.height?t&&t!==window?n.top-t.getBoundingClientRect().top:(t=e.ownerDocument.documentElement,n.top-t.clientTop):n.top})(u,a)+n;(r.current=!0,(0,o.isWindow)(a))?a.scrollTo((void 0===(c=a)&&(c=window),c)&&(c===window?Math.ceil(window.pageXOffset||window.scrollX):c.scrollLeft)||0,l):a.scrollTop=l}function u({targetId:e,linkMap:t,wrapperRef:n,currentId:r,setCurrentId:s,onChange:o}){e&&n.current&&t.current.get(e)&&e!==r&&s(e).then(()=>{o?.(e,r)})}var a=e.i(98319);let l=(0,n.forwardRef)((e,l)=>{let{scrollContainer:d,offset:m=0,children:p,onChange:f,queryKey:x="anchor-id",isCloseInitAnchor:g,...h}=e,{currentId:v,onLinkClick:C,wrapperRef:j,linkMap:w}=function({propScrollContainer:e,onChange:t,offset:r,queryKey:a,isCloseInitAnchor:l}){var d;let m,p,f=(0,n.useRef)(null),x=(0,n.useRef)(null),g=(0,n.useRef)(new Map),h=(0,n.useRef)(!1),[v,C]=function(e){let[t,r]=(0,n.useState)({value:"",resolve:e=>{}});return(0,n.useEffect)(()=>{t.resolve(t.value)},[t]),[t.value,e=>new Promise(t=>{r(n=>{let r=e;return"function"==typeof e&&(r=e(n.value)),{value:r,resolve:t}})})]}(0),j=s(()=>{if(h.current)return;let e=function({linkMap:e,scrollContainer:t}){let n=t.current,r=((0,o.isWindow)(n)?document.documentElement||document.body:n).getBoundingClientRect(),s=Array.from(e.current.keys()),c=[];for(let e of s){let t=i(document,"#"+CSS.escape(e));if(t){let{top:e}=t.getBoundingClientRect(),s=(0,o.isWindow)(n)?e:e-r.top;s>=0&&c.push({element:t,top:s})}}return 0===c.length?null:c.reduce((e,t)=>e.top<=t.top?e:t).element}({linkMap:g,scrollContainer:x});e?.id&&u({targetId:e.id,linkMap:g,wrapperRef:f,currentId:v,setCurrentId:C,onChange:t})}),w=s((d=()=>{j(),h.current=!1},m=null,(p=(...e)=>{m||(m=setTimeout(()=>{m=null,d(...e)},30))}).cancel=()=>{m&&(clearTimeout(m),m=null)},p));return(0,n.useEffect)(()=>(x.current=(0,o.isString)(e)?i(document,e):e||window,x.current?.addEventListener("scroll",w),()=>{x.current?.removeEventListener("scroll",w)}),[w,e]),(0,n.useEffect)(()=>{if(!l)return void w();let e=new URLSearchParams(new URL(window.location.href).search).get(a);e&&(u({targetId:e,linkMap:g,wrapperRef:f,currentId:v,setCurrentId:C,onChange:t}),c({scrollContainer:x,targetId:e,offset:r,isScrolling:h}))},[]),{onScroll:w,currentId:v,onLinkClick:function(e,n){e.preventDefault(),u({targetId:n,linkMap:g,wrapperRef:f,currentId:v,setCurrentId:C,onChange:t}),c({scrollContainer:x,targetId:n,offset:r,isScrolling:h})},wrapperRef:f,scrollContainer:x,linkMap:g}}({propScrollContainer:d,onChange:f,offset:m,queryKey:x,isCloseInitAnchor:g});return(0,t.jsx)(r.AnchorContext.Provider,{value:{currentId:v,linkMap:w,onLinkClick:C},children:(0,t.jsx)("div",{...h,ref:(0,a.useComposedRefs)(j,l),children:p})})});e.s(["Anchor",0,l],88036)},69438,e=>{"use strict";var t=e.i(45100),n=e.i(64334),r=e.i(22480),s=e.i(98319);let o=(0,n.forwardRef)((e,o)=>{let{onLinkClick:i,linkMap:c,currentId:u}=(0,n.useContext)(r.AnchorContext),{onClick:a,targetId:l,children:d,className:m,activeClassName:p,...f}=e,x=(0,n.useRef)(null);return(0,n.useEffect)(()=>{var e;return e=x.current,l&&c.current.set(l,e),()=>{c.current.delete(l)}},[l,c]),(0,t.jsx)("div",{ref:(0,s.useComposedRefs)(o,x),...f,onClick:e=>{e.stopPropagation(),a?.(e),i?.(e,l)},"data-target-id":l,className:u===l?p:m,children:d})});e.s(["AnchorLink",0,o],69438)},93562,e=>{"use strict";var t=e.i(88036),n=e.i(69438),r=e.i(22480);let s={Root:t.Anchor,Link:n.AnchorLink,Context:r.AnchorContext};e.s(["Anchor",()=>s])},52894,e=>{"use strict";var t=e.i(45100),n=e.i(18694);e.i(82928);var r=e.i(47445),s=e.i(69389),o=e.i(93612);e.i(73869);var i=e.i(84435);let c=`
function App() {
  return (
    <TButton
        status="primary"
        onClick={() =>
          TMessage.info({
            message: "这是一条通知",
          })
        }
      >
        Open Info Message
    </TButton>
  );
}
`;function u(){return(0,t.jsx)(i.CodePreview,{code:c})}let a=`
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
}
`;function l(){return(0,t.jsx)(i.CodePreview,{code:a})}let d=`
const Card = () => {
  return (
    <div className="max-w-sm w-full rounded-2xl border border-purple-100 bg-white shadow-md p-5 space-y-4 pointer-events-auto mb-2">
      <div className="flex items-center space-x-2">
        <IconTLogo className="w-6 h-6" />
        <span className="font-medium text-gray-700">Card</span>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-900">UI Library</h2>
        <p className="text-sm text-gray-500">$3,500 – 5,500 net</p>
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 text-xs rounded-full bg-purple-50 text-purple-600 font-medium">Project Based</span>
        <span className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-600 font-medium">Remote</span>
        <span className="px-3 py-1 text-xs rounded-full bg-pink-50 text-pink-600 font-medium">Full Time</span>
      </div>

      <div className="text-xs text-gray-400">Posted 2 days ago</div>
    </div>
  );
};

function App() {
  return (
    <TButton
        status="primary"
        onClick={() =>
          toastStore.add({
            duration: 3,
            component: <Card />,
          })
        }
      >
        custom message
    </TButton>
  );
}
`;function m(){return(0,t.jsx)(i.CodePreview,{code:d})}let p=`
function App() {
  let index = 1;
  return (
    <TButton
        status="primary"
        onClick={() =>
          toastBottomStore.add({
            duration: 3,
            component: <TAlert message={\`这是第\${index++}条通知\`} title="Alter" containerClassName="pb-2" />,
          })
        }
      >
        custom position
    </TButton>
  );
}
`;function f(){return(0,t.jsx)(i.CodePreview,{code:p})}let x=`
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
}`;function g(){return(0,t.jsx)(i.CodePreview,{code:x})}let h=`
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
}`;function v(){return(0,t.jsx)(i.CodePreview,{code:h})}function C(e){let i={code:"code",li:"li",p:"p",ul:"ul",...(0,n.useMDXComponents)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:["\n",(0,t.jsx)(s.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["最简单的例子。",(0,t.jsx)(o.Code,{children:"切记"}),"一定要看 ",(0,t.jsx)(o.Code,{children:"必读指南"}),"中",(0,t.jsx)(o.Code,{children:"引入和使用 toast"}),"章节，了解如何引入",(0,t.jsx)(o.Code,{children:"ToastProvider"}),"。"]}),children:"基本用法"}),"\n",(0,t.jsx)(u,{}),"\n","\n",(0,t.jsx)(s.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["全局提示有 5 种不同的类型，分别为：",(0,t.jsx)(o.Code,{children:"info"}),"、",(0,t.jsx)(o.Code,{children:"success"}),"、",(0,t.jsx)(o.Code,{children:"warning"}),"、",(0,t.jsx)(o.Code,{children:"error"}),"、",(0,t.jsx)(o.Code,{children:"loading"})]}),children:"不同类型"}),"\n",(0,t.jsx)(l,{}),"\n","\n",(0,t.jsx)(s.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["可以使用基本的",(0,t.jsx)(o.Code,{children:"createToastStore"}),"方法来自定义 toast 组件, 这里我们定义另一种"]}),children:"自定义组件"}),"\n",(0,t.jsx)(m,{}),"\n","\n",(0,t.jsx)(s.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.Code,{children:"message"})," 组件的位置完全可以自己定义，请在",(0,t.jsx)(o.Code,{children:"必读指南"}),"里了解，配置位置的方式，以下的 ",(0,t.jsx)(o.Code,{children:"message"}),"我们定位在了右下角"]}),children:"位置"}),"\n",(0,t.jsxs)(i.p,{children:["以下就是配置 ",(0,t.jsx)(i.code,{children:"ToastProvider"})," 的代码，注意"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"bottom-28"}),"(定向到底部)，",(0,t.jsx)(i.code,{children:"items-end pr-12"}),"(定位到右边)，所以就是 ",(0,t.jsx)(i.code,{children:"右下方"})]}),"\n",(0,t.jsxs)(i.li,{children:["并且 ",(0,t.jsx)(i.code,{children:"direction"})," 设为 ",(0,t.jsx)(i.code,{children:"bottom-to-top"})," ，所以就是从下往上弹出"]}),"\n",(0,t.jsxs)(i.li,{children:["最后 ",(0,t.jsx)(i.code,{children:"stack"})," 设为 ",(0,t.jsx)(i.code,{children:"true"})," ，并且我们使用 ",(0,t.jsx)(i.code,{children:"stack"})," 模式"]}),"\n"]}),"\n",(0,t.jsx)(r.CodeBlock,{code:`export const toastBottomStore = createToastStore({ maxCount: 6 });

<ToastProvider
  store={toastBottomStore}
  containerProps={{
    className: cs('w-full fixed bottom-12 flex flex-col items-end pr-12 pointer-events-none', \`\${TOAST_Z_INDEX}\`),
  }}
  direction="bottom-to-top"
/>`,language:"tsx",className:"mb-12"}),"\n",(0,t.jsx)(f,{}),"\n","\n",(0,t.jsx)(s.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["传入",(0,t.jsx)(o.Code,{children:"showClose"}),"可以让 message 显示关闭按钮。点击关闭按钮可以手动关闭 message"]}),children:"手动控制关闭"}),"\n",(0,t.jsx)(g,{}),"\n","\n",(0,t.jsx)(s.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["通过指定 ",(0,t.jsx)(o.Code,{children:"id"}),"，可以更新已经存在的 ",(0,t.jsx)(o.Code,{children:"message"})," 内容。注意， ",(0,t.jsx)(o.Code,{children:"duration"})," 值为 ",(0,t.jsx)(o.Code,{children:"null"})," 会取消当前",(0,t.jsx)(o.Code,{children:"message"})," 消息自动关闭功能"]}),children:"更新内容"}),"\n",(0,t.jsx)(v,{})]})}function j(e={}){let{wrapper:r}={...(0,n.useMDXComponents)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(C,{...e})}):C(e)}function w(){return(0,t.jsx)(j,{})}e.s(["HowMakeCssButton",()=>w],52894)}]);