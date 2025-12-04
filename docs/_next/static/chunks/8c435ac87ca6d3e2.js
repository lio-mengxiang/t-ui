(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1521,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},79537,e=>{e.v({AElig:"Æ",AMP:"&",Aacute:"Á",Acirc:"Â",Agrave:"À",Aring:"Å",Atilde:"Ã",Auml:"Ä",COPY:"©",Ccedil:"Ç",ETH:"Ð",Eacute:"É",Ecirc:"Ê",Egrave:"È",Euml:"Ë",GT:">",Iacute:"Í",Icirc:"Î",Igrave:"Ì",Iuml:"Ï",LT:"<",Ntilde:"Ñ",Oacute:"Ó",Ocirc:"Ô",Ograve:"Ò",Oslash:"Ø",Otilde:"Õ",Ouml:"Ö",QUOT:'"',REG:"®",THORN:"Þ",Uacute:"Ú",Ucirc:"Û",Ugrave:"Ù",Uuml:"Ü",Yacute:"Ý",aacute:"á",acirc:"â",acute:"´",aelig:"æ",agrave:"à",amp:"&",aring:"å",atilde:"ã",auml:"ä",brvbar:"¦",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",ecirc:"ê",egrave:"è",eth:"ð",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",iacute:"í",icirc:"î",iexcl:"¡",igrave:"ì",iquest:"¿",iuml:"ï",laquo:"«",lt:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",oacute:"ó",ocirc:"ô",ograve:"ò",ordf:"ª",ordm:"º",oslash:"ø",otilde:"õ",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',raquo:"»",reg:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",times:"×",uacute:"ú",ucirc:"û",ugrave:"ù",uml:"¨",uuml:"ü",yacute:"ý",yen:"¥",yuml:"ÿ"})},27208,e=>{e.v({0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"})},73850,e=>{"use strict";var t=e.i(45100);let n=(0,e.i(51849).createIcon)({iconProps:{useFillCurrentColor:!0},viewBox:"0 0 156 94",paths:(0,t.jsx)("path",{d:"M0,31.18h31.18v62.56H0V31.18Zm155.46,5.67v56.89h-31.18V45.36c0-7.83-6.34-14.18-14.17-14.18h-17.01c.29,1.85,.44,3.74,.44,5.67v56.89h-31.18V45.36c0-7.83-6.35-14.18-14.17-14.18H31.18V0h25.51c13.15,0,24.69,6.89,31.21,17.25,2.62,4.15,4.43,8.86,5.2,13.92V0h25.51c20.35,0,36.85,16.5,36.85,36.85Z"})});e.s(["IconMLogo",0,n])},7823,e=>{"use strict";function t(e,t){if(null==e)return{};var n={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n}e.s(["default",()=>t])},37215,e=>{"use strict";function t(){return(t=Object.assign.bind()).apply(null,arguments)}e.s(["default",()=>t])},22480,e=>{"use strict";let t=(0,e.i(64334).createContext)({currentId:"",onLinkClick:()=>{},linkMap:{current:new Map}});e.s(["AnchorContext",0,t])},98319,e=>{"use strict";var t=e.i(64334);function n(...e){return(0,t.useCallback)(t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})},e)}e.s(["useComposedRefs",()=>n])},88036,e=>{"use strict";var t=e.i(45100),n=e.i(64334),r=e.i(22480);function o(e){let t=(0,n.useRef)(null);return t.current=e,(0,n.useCallback)((...e)=>t.current?.(...e),[])}var s=e.i(96224);function i(e,t){try{return e.querySelector(t)}catch(e){return null}}function a({scrollContainer:e,targetId:t,offset:n,isScrolling:r}){var o,a;if(!t)return;let u=i(document,`#${CSS.escape(t)}`);if(!u)return;let c=e.current,l=((void 0===(o=c)&&(o=window),o)&&(o===window?Math.ceil(window.pageYOffset):o.scrollTop)||0)+((e,t)=>{if(!e.getClientRects().length)return 0;let n=e.getBoundingClientRect();return n.width||n.height?t&&t!==window?n.top-t.getBoundingClientRect().top:(t=e.ownerDocument.documentElement,n.top-t.clientTop):n.top})(u,c)+n;(r.current=!0,(0,s.isWindow)(c))?c.scrollTo((void 0===(a=c)&&(a=window),a)&&(a===window?Math.ceil(window.pageXOffset||window.scrollX):a.scrollLeft)||0,l):c.scrollTop=l}function u({targetId:e,linkMap:t,wrapperRef:n,currentId:r,setCurrentId:o,onChange:s}){e&&n.current&&t.current.get(e)&&e!==r&&o(e).then(()=>{s?.(e,r)})}var c=e.i(98319);let l=(0,n.forwardRef)((e,l)=>{let{scrollContainer:d,offset:p=0,children:f,onChange:h,queryKey:x="anchor-id",isCloseInitAnchor:g,...m}=e,{currentId:v,onLinkClick:C,wrapperRef:j,linkMap:b}=function({propScrollContainer:e,onChange:t,offset:r,queryKey:c,isCloseInitAnchor:l}){var d;let p,f,h=(0,n.useRef)(null),x=(0,n.useRef)(null),g=(0,n.useRef)(new Map),m=(0,n.useRef)(!1),[v,C]=function(e){let[t,r]=(0,n.useState)({value:"",resolve:e=>{}});return(0,n.useEffect)(()=>{t.resolve(t.value)},[t]),[t.value,e=>new Promise(t=>{r(n=>{let r=e;return"function"==typeof e&&(r=e(n.value)),{value:r,resolve:t}})})]}(0),j=o(()=>{if(m.current)return;let e=function({linkMap:e,scrollContainer:t}){let n=t.current,r=((0,s.isWindow)(n)?document.documentElement||document.body:n).getBoundingClientRect(),o=Array.from(e.current.keys()),a=[];for(let e of o){let t=i(document,"#"+CSS.escape(e));if(t){let{top:e}=t.getBoundingClientRect(),o=(0,s.isWindow)(n)?e:e-r.top;o>=0&&a.push({element:t,top:o})}}return 0===a.length?null:a.reduce((e,t)=>e.top<=t.top?e:t).element}({linkMap:g,scrollContainer:x});e?.id&&u({targetId:e.id,linkMap:g,wrapperRef:h,currentId:v,setCurrentId:C,onChange:t})}),b=o((d=()=>{j(),m.current=!1},p=null,(f=(...e)=>{p||(p=setTimeout(()=>{p=null,d(...e)},30))}).cancel=()=>{p&&(clearTimeout(p),p=null)},f));return(0,n.useEffect)(()=>(x.current=(0,s.isString)(e)?i(document,e):e||window,x.current?.addEventListener("scroll",b),()=>{x.current?.removeEventListener("scroll",b)}),[b,e]),(0,n.useEffect)(()=>{if(!l)return void b();let e=new URLSearchParams(new URL(window.location.href).search).get(c);e&&(u({targetId:e,linkMap:g,wrapperRef:h,currentId:v,setCurrentId:C,onChange:t}),a({scrollContainer:x,targetId:e,offset:r,isScrolling:m}))},[]),{onScroll:b,currentId:v,onLinkClick:function(e,n){e.preventDefault(),u({targetId:n,linkMap:g,wrapperRef:h,currentId:v,setCurrentId:C,onChange:t}),a({scrollContainer:x,targetId:n,offset:r,isScrolling:m})},wrapperRef:h,scrollContainer:x,linkMap:g}}({propScrollContainer:d,onChange:h,offset:p,queryKey:x,isCloseInitAnchor:g});return(0,t.jsx)(r.AnchorContext.Provider,{value:{currentId:v,linkMap:b,onLinkClick:C},children:(0,t.jsx)("div",{...m,ref:(0,c.useComposedRefs)(j,l),children:f})})});e.s(["Anchor",0,l],88036)},69438,e=>{"use strict";var t=e.i(45100),n=e.i(64334),r=e.i(22480),o=e.i(98319);let s=(0,n.forwardRef)((e,s)=>{let{onLinkClick:i,linkMap:a,currentId:u}=(0,n.useContext)(r.AnchorContext),{onClick:c,targetId:l,children:d,className:p,activeClassName:f,...h}=e,x=(0,n.useRef)(null);return(0,n.useEffect)(()=>{var e;return e=x.current,l&&a.current.set(l,e),()=>{a.current.delete(l)}},[l,a]),(0,t.jsx)("div",{ref:(0,o.useComposedRefs)(s,x),...h,onClick:e=>{e.stopPropagation(),c?.(e),i?.(e,l)},"data-target-id":l,className:u===l?f:p,children:d})});e.s(["AnchorLink",0,s],69438)},93562,e=>{"use strict";var t=e.i(88036),n=e.i(69438),r=e.i(22480);let o={Root:t.Anchor,Link:n.AnchorLink,Context:r.AnchorContext};e.s(["Anchor",()=>o])},59772,e=>{"use strict";var t=e.i(64334);let n=(0,t.createContext)({checked:!1});var r=e.i(45100),o=e.i(2157);let s=(0,t.createContext)({type:"radio"}),i={RadioContext:n,Root:function(e){let i=(0,t.useContext)(s),a=function({props:e,context:t}){let n={...e};return t.group&&(n.checked=t.value===e.value,n.disabled=!!(t.disabled||e.disabled),n.readonly=!!(t.readonly||e.readonly)),n}({props:e,context:i}),{disabled:u,readonly:c,children:l,value:d,checked:p,onChange:f,...h}=a,x=(0,t.useRef)(null),[g,m]=(0,o.useMergeValue)(!1,{value:p,defaultValue:a.defaultChecked});return(0,r.jsx)(n.Provider,{value:{checked:g,disabled:u,readonly:c},children:(0,r.jsxs)("label",{...h,onClick:function(e){u||c?e.preventDefault():h?.onClick?.(e)},"aria-disabled":!!u,"aria-readonly":!!c,"aria-checked":!!g,children:[(0,r.jsx)("input",{ref:x,disabled:!!u,value:d,type:"radio",checked:!!g,onChange:t=>{t.persist(),t.stopPropagation(),u||c||(i.group?i?.onChangeValue?.(d,t):"checked"in e||g||m(!0),g||f?.(!0,t))},onClick:e=>{e.stopPropagation()},"aria-readonly":!!c}),l]})})},Group:function(e){let{name:t,children:n,type:i="radio",disabled:a,readonly:u,onChange:c,...l}=e,[d,p]=(0,o.useMergeValue)(void 0,{defaultValue:e.defaultValue,value:e.value});return(0,r.jsx)("div",{role:"radiogroup",...l,children:(0,r.jsx)(s.Provider,{value:{onChangeValue:(t,n)=>{t!==d&&("value"in e||p(t),c?.(t,n))},type:i,value:d,disabled:a,readonly:u,group:!0,name:t},children:n})})}};e.s(["Radio",()=>i],59772)},46030,e=>{"use strict";var t=e.i(64334);let n=(0,t.createContext)({checked:!1});var r=e.i(45100),o=e.i(2157);let s=(0,t.createContext)({isCheckboxGroup:!1,checkboxGroupValue:[],onGroupChange:()=>{},registerValue:()=>{},unRegisterValue:()=>{}}),i={CheckboxContext:n,Root:function(e){let i=(0,t.useContext)(s),{onGroupChange:a}=i,u=function({props:e,context:t}){let n={...e};return t.isCheckboxGroup&&(n.checked=-1!==t.checkboxGroupValue.indexOf(e.value),n.disabled=!!(t.disabled||e.disabled),n.readonly=!!(t.readonly||e.readonly)),n}({props:e,context:i}),{disabled:c,children:l,readonly:d,value:p,checked:f,onChange:h,indeterminate:x,...g}=u,m=(0,t.useRef)(null),[v,C]=(0,o.useMergeValue)(!1,{value:f,defaultValue:u.defaultChecked});return(0,t.useEffect)(()=>(i.registerValue(p),()=>{i.unRegisterValue(p)}),[p]),(0,r.jsx)(n.Provider,{value:{checked:v,disabled:c,indeterminate:x,readonly:d},children:(0,r.jsxs)("label",{...g,onClick:function(e){c||d?e.preventDefault():g?.onClick?.(e)},"aria-disabled":!!c,"aria-readonly":!!d,"aria-checked":!!v,children:[(0,r.jsx)("input",{value:p,disabled:!!c,ref:m,checked:!!v,onChange:function(e){e.persist(),e.stopPropagation(),c||d||(i.isCheckboxGroup?a?.(u.value,e.target.checked,e):C(e.target.checked),h?.(e.target.checked,e))},onClick:e=>e.stopPropagation(),type:"checkbox","aria-readonly":!!d}),l]})})},IconCheck:function({className:e}){return(0,r.jsx)("svg",{className:e,"aria-hidden":!0,focusable:!1,viewBox:"0 0 1024 1024",width:"200",height:"200",fill:"currentColor",children:(0,r.jsx)("path",{d:"M877.44815445 206.10060629a64.72691371 64.72691371 0 0 0-95.14856334 4.01306852L380.73381888 685.46812814 235.22771741 533.48933518a64.72691371 64.72691371 0 0 0-92.43003222-1.03563036l-45.82665557 45.82665443a64.72691371 64.72691371 0 0 0-0.90617629 90.61767965l239.61903446 250.10479331a64.72691371 64.72691371 0 0 0 71.19960405 15.14609778 64.33855261 64.33855261 0 0 0 35.08198741-21.23042702l36.24707186-42.71976334 40.5190474-40.77795556-3.36579926-3.49525333 411.40426297-486.74638962a64.72691371 64.72691371 0 0 0-3.88361443-87.64024149l-45.3088404-45.43829334z","p-id":"840"})})},Group:function(e){let{disabled:n,children:i,readonly:a,onChange:u,...c}=e,[l,d]=(0,o.useMergeValue)([],{defaultValue:e.defaultValue,value:e.value}),[p,f]=(0,t.useState)([]);return(0,r.jsx)("div",{role:"checkboxgroup",...c,children:(0,r.jsx)(s.Provider,{value:{isCheckboxGroup:!0,checkboxGroupValue:l,onGroupChange:function(e,t,n){if(!Array.isArray(l))return void console.error("Checkbox.Group value must be an array");let r=l?.slice()||[];t?r.push(e):r.splice(l.indexOf(e),1),d(r),u?.(r.filter(e=>p.indexOf(e)>-1),n)},disabled:n,readonly:a,registerValue:e=>{f(t=>Array.from(new Set([...t,e])))},unRegisterValue:e=>{f(t=>t.filter(t=>t!==e))}},children:i})})}};e.s(["Checkbox",()=>i],46030)},52894,e=>{"use strict";var t=e.i(45100),n=e.i(18694);e.i(82928);var r=e.i(47445),o=e.i(69389),s=e.i(93612);e.i(73869);var i=e.i(84435);let a=`
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
`;function u(){return(0,t.jsx)(i.CodePreview,{code:a})}let c=`
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
`;function l(){return(0,t.jsx)(i.CodePreview,{code:c})}let d=`
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
`;function p(){return(0,t.jsx)(i.CodePreview,{code:d})}let f=`
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
`;function h(){return(0,t.jsx)(i.CodePreview,{code:f})}let x=`
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
}`;function g(){return(0,t.jsx)(i.CodePreview,{code:x})}let m=`
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
}`;function v(){return(0,t.jsx)(i.CodePreview,{code:m})}function C(e){let i={code:"code",li:"li",p:"p",ul:"ul",...(0,n.useMDXComponents)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:["\n",(0,t.jsx)(o.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["最简单的例子。",(0,t.jsx)(s.Code,{children:"切记"}),"一定要看 ",(0,t.jsx)(s.Code,{children:"必读指南"}),"中",(0,t.jsx)(s.Code,{children:"引入和使用 toast"}),"章节，了解如何引入",(0,t.jsx)(s.Code,{children:"ToastProvider"}),"。"]}),children:"基本用法"}),"\n",(0,t.jsx)(u,{}),"\n","\n",(0,t.jsx)(o.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["全局提示有 5 种不同的类型，分别为：",(0,t.jsx)(s.Code,{children:"info"}),"、",(0,t.jsx)(s.Code,{children:"success"}),"、",(0,t.jsx)(s.Code,{children:"warning"}),"、",(0,t.jsx)(s.Code,{children:"error"}),"、",(0,t.jsx)(s.Code,{children:"loading"})]}),children:"不同类型"}),"\n",(0,t.jsx)(l,{}),"\n","\n",(0,t.jsx)(o.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["可以使用基本的",(0,t.jsx)(s.Code,{children:"createToastStore"}),"方法来自定义 toast 组件, 这里我们定义另一种"]}),children:"自定义组件"}),"\n",(0,t.jsx)(p,{}),"\n","\n",(0,t.jsx)(o.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.Code,{children:"message"})," 组件的位置完全可以自己定义，请在",(0,t.jsx)(s.Code,{children:"必读指南"}),"里了解，配置位置的方式，以下的 ",(0,t.jsx)(s.Code,{children:"message"}),"我们定位在了右下角"]}),children:"位置"}),"\n",(0,t.jsxs)(i.p,{children:["以下就是配置 ",(0,t.jsx)(i.code,{children:"ToastProvider"})," 的代码，注意"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"bottom-28"}),"(定向到底部)，",(0,t.jsx)(i.code,{children:"items-end pr-12"}),"(定位到右边)，所以就是 ",(0,t.jsx)(i.code,{children:"右下方"})]}),"\n",(0,t.jsxs)(i.li,{children:["并且 ",(0,t.jsx)(i.code,{children:"direction"})," 设为 ",(0,t.jsx)(i.code,{children:"bottom-to-top"})," ，所以就是从下往上弹出"]}),"\n",(0,t.jsxs)(i.li,{children:["最后 ",(0,t.jsx)(i.code,{children:"stack"})," 设为 ",(0,t.jsx)(i.code,{children:"true"})," ，并且我们使用 ",(0,t.jsx)(i.code,{children:"stack"})," 模式"]}),"\n"]}),"\n",(0,t.jsx)(r.CodeBlock,{code:`export const toastBottomStore = createToastStore({ maxCount: 6 });

<ToastProvider
  store={toastBottomStore}
  containerProps={{
    className: cs('w-full fixed bottom-12 flex flex-col items-end pr-12 pointer-events-none', \`\${TOAST_Z_INDEX}\`),
  }}
  direction="bottom-to-top"
/>`,language:"tsx",className:"mb-12"}),"\n",(0,t.jsx)(h,{}),"\n","\n",(0,t.jsx)(o.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["传入",(0,t.jsx)(s.Code,{children:"showClose"}),"可以让 message 显示关闭按钮。点击关闭按钮可以手动关闭 message"]}),children:"手动控制关闭"}),"\n",(0,t.jsx)(g,{}),"\n","\n",(0,t.jsx)(o.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["通过指定 ",(0,t.jsx)(s.Code,{children:"id"}),"，可以更新已经存在的 ",(0,t.jsx)(s.Code,{children:"message"})," 内容。注意， ",(0,t.jsx)(s.Code,{children:"duration"})," 值为 ",(0,t.jsx)(s.Code,{children:"null"})," 会取消当前",(0,t.jsx)(s.Code,{children:"message"})," 消息自动关闭功能"]}),children:"更新内容"}),"\n",(0,t.jsx)(v,{})]})}function j(e={}){let{wrapper:r}={...(0,n.useMDXComponents)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(C,{...e})}):C(e)}function b(){return(0,t.jsx)(j,{})}e.s(["HowMakeCssButton",()=>b],52894)}]);