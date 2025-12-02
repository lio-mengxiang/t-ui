(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1521,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},79537,e=>{e.v({AElig:"Æ",AMP:"&",Aacute:"Á",Acirc:"Â",Agrave:"À",Aring:"Å",Atilde:"Ã",Auml:"Ä",COPY:"©",Ccedil:"Ç",ETH:"Ð",Eacute:"É",Ecirc:"Ê",Egrave:"È",Euml:"Ë",GT:">",Iacute:"Í",Icirc:"Î",Igrave:"Ì",Iuml:"Ï",LT:"<",Ntilde:"Ñ",Oacute:"Ó",Ocirc:"Ô",Ograve:"Ò",Oslash:"Ø",Otilde:"Õ",Ouml:"Ö",QUOT:'"',REG:"®",THORN:"Þ",Uacute:"Ú",Ucirc:"Û",Ugrave:"Ù",Uuml:"Ü",Yacute:"Ý",aacute:"á",acirc:"â",acute:"´",aelig:"æ",agrave:"à",amp:"&",aring:"å",atilde:"ã",auml:"ä",brvbar:"¦",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",ecirc:"ê",egrave:"è",eth:"ð",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",iacute:"í",icirc:"î",iexcl:"¡",igrave:"ì",iquest:"¿",iuml:"ï",laquo:"«",lt:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",oacute:"ó",ocirc:"ô",ograve:"ò",ordf:"ª",ordm:"º",oslash:"ø",otilde:"õ",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',raquo:"»",reg:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",times:"×",uacute:"ú",ucirc:"û",ugrave:"ù",uml:"¨",uuml:"ü",yacute:"ý",yen:"¥",yuml:"ÿ"})},27208,e=>{e.v({0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"})},73850,e=>{"use strict";var t=e.i(45100);let n=(0,e.i(51849).createIcon)({iconProps:{useFillCurrentColor:!0},viewBox:"0 0 156 94",paths:(0,t.jsx)("path",{d:"M0,31.18h31.18v62.56H0V31.18Zm155.46,5.67v56.89h-31.18V45.36c0-7.83-6.34-14.18-14.17-14.18h-17.01c.29,1.85,.44,3.74,.44,5.67v56.89h-31.18V45.36c0-7.83-6.35-14.18-14.17-14.18H31.18V0h25.51c13.15,0,24.69,6.89,31.21,17.25,2.62,4.15,4.43,8.86,5.2,13.92V0h25.51c20.35,0,36.85,16.5,36.85,36.85Z"})});e.s(["IconMLogo",0,n])},7823,e=>{"use strict";function t(e,t){if(null==e)return{};var n={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n}e.s(["default",()=>t])},37215,e=>{"use strict";function t(){return(t=Object.assign.bind()).apply(null,arguments)}e.s(["default",()=>t])},22480,e=>{"use strict";let t=(0,e.i(64334).createContext)({currentId:"",onLinkClick:()=>{},linkMap:{current:new Map}});e.s(["AnchorContext",0,t])},98319,e=>{"use strict";var t=e.i(64334);function n(...e){return(0,t.useCallback)(t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})},e)}e.s(["useComposedRefs",()=>n])},88036,e=>{"use strict";var t=e.i(45100),n=e.i(64334),r=e.i(22480);function o(e){let t=(0,n.useRef)(null);return t.current=e,(0,n.useCallback)((...e)=>t.current?.(...e),[])}var l=e.i(96224);function i(e,t){try{return e.querySelector(t)}catch(e){return null}}function a({scrollContainer:e,targetId:t,offset:n,isScrolling:r}){var o,a;if(!t)return;let c=i(document,`#${CSS.escape(t)}`);if(!c)return;let u=e.current,d=((void 0===(o=u)&&(o=window),o)&&(o===window?Math.ceil(window.pageYOffset):o.scrollTop)||0)+((e,t)=>{if(!e.getClientRects().length)return 0;let n=e.getBoundingClientRect();return n.width||n.height?t&&t!==window?n.top-t.getBoundingClientRect().top:(t=e.ownerDocument.documentElement,n.top-t.clientTop):n.top})(c,u)+n;(r.current=!0,(0,l.isWindow)(u))?u.scrollTo((void 0===(a=u)&&(a=window),a)&&(a===window?Math.ceil(window.pageXOffset||window.scrollX):a.scrollLeft)||0,d):u.scrollTop=d}function c({targetId:e,linkMap:t,wrapperRef:n,currentId:r,setCurrentId:o,onChange:l}){e&&n.current&&t.current.get(e)&&e!==r&&o(e).then(()=>{l?.(e,r)})}var u=e.i(98319);let d=(0,n.forwardRef)((e,d)=>{let{scrollContainer:s,offset:p=0,children:m,onChange:f,queryKey:h="anchor-id",isCloseInitAnchor:v,...x}=e,{currentId:g,onLinkClick:C,wrapperRef:j,linkMap:w}=function({propScrollContainer:e,onChange:t,offset:r,queryKey:u,isCloseInitAnchor:d}){var s;let p,m,f=(0,n.useRef)(null),h=(0,n.useRef)(null),v=(0,n.useRef)(new Map),x=(0,n.useRef)(!1),[g,C]=function(e){let[t,r]=(0,n.useState)({value:"",resolve:e=>{}});return(0,n.useEffect)(()=>{t.resolve(t.value)},[t]),[t.value,e=>new Promise(t=>{r(n=>{let r=e;return"function"==typeof e&&(r=e(n.value)),{value:r,resolve:t}})})]}(0),j=o(()=>{if(x.current)return;let e=function({linkMap:e,scrollContainer:t}){let n=t.current,r=((0,l.isWindow)(n)?document.documentElement||document.body:n).getBoundingClientRect(),o=Array.from(e.current.keys()),a=[];for(let e of o){let t=i(document,"#"+CSS.escape(e));if(t){let{top:e}=t.getBoundingClientRect(),o=(0,l.isWindow)(n)?e:e-r.top;o>=0&&a.push({element:t,top:o})}}return 0===a.length?null:a.reduce((e,t)=>e.top<=t.top?e:t).element}({linkMap:v,scrollContainer:h});e?.id&&c({targetId:e.id,linkMap:v,wrapperRef:f,currentId:g,setCurrentId:C,onChange:t})}),w=o((s=()=>{j(),x.current=!1},p=null,(m=(...e)=>{p||(p=setTimeout(()=>{p=null,s(...e)},30))}).cancel=()=>{p&&(clearTimeout(p),p=null)},m));return(0,n.useEffect)(()=>(h.current=(0,l.isString)(e)?i(document,e):e||window,h.current?.addEventListener("scroll",w),()=>{h.current?.removeEventListener("scroll",w)}),[w,e]),(0,n.useEffect)(()=>{if(!d)return void w();let e=new URLSearchParams(new URL(window.location.href).search).get(u);e&&(c({targetId:e,linkMap:v,wrapperRef:f,currentId:g,setCurrentId:C,onChange:t}),a({scrollContainer:h,targetId:e,offset:r,isScrolling:x}))},[]),{onScroll:w,currentId:g,onLinkClick:function(e,n){e.preventDefault(),c({targetId:n,linkMap:v,wrapperRef:f,currentId:g,setCurrentId:C,onChange:t}),a({scrollContainer:h,targetId:n,offset:r,isScrolling:x})},wrapperRef:f,scrollContainer:h,linkMap:v}}({propScrollContainer:s,onChange:f,offset:p,queryKey:h,isCloseInitAnchor:v});return(0,t.jsx)(r.AnchorContext.Provider,{value:{currentId:g,linkMap:w,onLinkClick:C},children:(0,t.jsx)("div",{...x,ref:(0,u.useComposedRefs)(j,d),children:m})})});e.s(["Anchor",0,d],88036)},69438,e=>{"use strict";var t=e.i(45100),n=e.i(64334),r=e.i(22480),o=e.i(98319);let l=(0,n.forwardRef)((e,l)=>{let{onLinkClick:i,linkMap:a,currentId:c}=(0,n.useContext)(r.AnchorContext),{onClick:u,targetId:d,children:s,className:p,activeClassName:m,...f}=e,h=(0,n.useRef)(null);return(0,n.useEffect)(()=>{var e;return e=h.current,d&&a.current.set(d,e),()=>{a.current.delete(d)}},[d,a]),(0,t.jsx)("div",{ref:(0,o.useComposedRefs)(l,h),...f,onClick:e=>{e.stopPropagation(),u?.(e),i?.(e,d)},"data-target-id":d,className:c===d?m:p,children:s})});e.s(["AnchorLink",0,l],69438)},93562,e=>{"use strict";var t=e.i(88036),n=e.i(69438),r=e.i(22480);let o={Root:t.Anchor,Link:n.AnchorLink,Context:r.AnchorContext};e.s(["Anchor",()=>o])},59772,e=>{"use strict";var t=e.i(64334);let n=(0,t.createContext)({checked:!1});var r=e.i(45100),o=e.i(2157);let l=(0,t.createContext)({type:"radio"}),i={RadioContext:n,Root:function(e){let i=(0,t.useContext)(l),a=function({props:e,context:t}){let n={...e};return t.group&&(n.checked=t.value===e.value,n.disabled=!!(t.disabled||e.disabled),n.readonly=!!(t.readonly||e.readonly)),n}({props:e,context:i}),{disabled:c,readonly:u,children:d,value:s,checked:p,onChange:m,...f}=a,h=(0,t.useRef)(null),[v,x]=(0,o.useMergeValue)(!1,{value:p,defaultValue:a.defaultChecked});return(0,r.jsx)(n.Provider,{value:{checked:v,disabled:c,readonly:u},children:(0,r.jsxs)("label",{...f,onClick:function(e){c||u?e.preventDefault():f?.onClick?.(e)},"aria-disabled":!!c,"aria-readonly":!!u,"aria-checked":!!v,children:[(0,r.jsx)("input",{ref:h,disabled:!!c,value:s,type:"radio",checked:!!v,onChange:t=>{t.persist(),t.stopPropagation(),c||u||(i.group?i?.onChangeValue?.(s,t):"checked"in e||v||x(!0),v||m?.(!0,t))},onClick:e=>{e.stopPropagation()},"aria-readonly":!!u}),d]})})},Group:function(e){let{name:t,children:n,type:i="radio",disabled:a,readonly:c,onChange:u,...d}=e,[s,p]=(0,o.useMergeValue)(void 0,{defaultValue:e.defaultValue,value:e.value});return(0,r.jsx)("div",{role:"radiogroup",...d,children:(0,r.jsx)(l.Provider,{value:{onChangeValue:(t,n)=>{t!==s&&("value"in e||p(t),u?.(t,n))},type:i,value:s,disabled:a,readonly:c,group:!0,name:t},children:n})})}};e.s(["Radio",()=>i],59772)},76741,e=>{"use strict";var t=e.i(45100),n=e.i(18694);e.i(82928);var r=e.i(69389),o=e.i(93612);e.i(73869);var l=e.i(84435);let i=`function App() {
  return (
    <TButton
      status="primary"
      onClick={() => {
        TModal.add({
          title: 'Modal Alert',
          content: 'This is a message!',
        });
      }}
    >
      Open Modal
    </TButton>
  );
}`;function a(){return(0,t.jsx)(l.CodePreview,{code:i})}let c=`function App() {
  return (
    <TButton
      status="primary"
      onClick={() => {
        TModal.add({
          title: 'Modal Alert',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          // className 定义 modal 最外层 div 的样式
          className: 'h-[80vh] w-[90vw]',
        });
      }}
    >
      Open Modal
    </TButton>
  );
}`;function u(){return(0,t.jsx)(l.CodePreview,{code:c})}let d=`function App() {
  const focusRef = useRef({});
  return (
    <TButton
      status="primary"
      onClick={() => {
        TModal.add({
          title: 'Modal Alert',
          initialFocusEl: () => focusRef.current?.focus(),
          content: <InputGroup focusRef={focusRef} />,
          // className 定义 modal 最外层 div 的样式
          className: 'w-[40vw]',
        });
      }}
    >
      Open Modal
    </TButton>
  );
}

function InputGroup({ focusRef }) {

  return (
    <div className="flex flex-col gap-y-4 mt-2">
      <div className="flex flex-col gap-y-1">
        <span>姓名</span>
        <TInput placeholder="Enter" allowClear className="w-full" />
      </div>
      <div className="flex flex-col gap-y-2">
        <span>手机号</span>
        <TInput ref={focusRef} placeholder="Enter" allowClear className="w-full" />
      </div>
    </div>
  );
}
`;function s(){return(0,t.jsx)(l.CodePreview,{code:d})}let p=`function App() {
  return (
    <TButton
        status="primary"
        onClick={() => {
          TModal.add({
            title: 'Modal Alert',
            content: Array.from({ length: 10 }).map((_, index) => logContent),
            // className 定义 modal 最外层 div 的样式
            contentClassName: 'max-h-[300px] overflow-auto',
          });
        }}
      >
        Open Modal
    </TButton>
  );
}
const logContent =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';`;function m(){return(0,t.jsx)(l.CodePreview,{code:p})}let f=`function App() {
  return (
    <TButton
        status="primary"
        onClick={() => {
          TModal.add({
            title: 'Modal Alert',
            content: <NestedModal />,
            // className 定义 modal 最外层 div 的样式
            className: 'h-[300px]',
          });
        }}
      >
        Open Modal
    </TButton>
  );
}

function NestedModal() {
  return (
    <div>
     <div className="mb-6">
      Lorem ipsum dolor sit amet consectetur adipiscing elit.
     </div>
      <TButton
        status="primary"
        onClick={() => {
          TModal.add({
            title: 'Nested Modal',
            content: 'Nested Modal Content',
          });
        }}
      >
        Open Nested Modal
      </TButton>
    </div>
  );
}
`;function h(){return(0,t.jsx)(l.CodePreview,{code:f})}let v=`function App() {
  return (
    <TButton
      status="primary"
      onClick={() => {
        const id = TModal.add({
          title: 'Modal Alert',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          // className 定义 modal 最外层 div 的样式
          className: 'h-[300px]',
          onOk: (update) => {
            TModal.update(id,  { loading: true, disabled: true });
            setTimeout(() => {
              TModal.remove(id);
              // TModal.update(id,  { loading: false, disabled: false });
            }, 2000);
          },
        });
      }}
    >
      Open Async Modal
    </TButton>
  );
}`;function x(){return(0,t.jsx)(l.CodePreview,{code:v})}let g=`function App() {
  return (
    <TButton
      status="primary"
      onClick={() => {
        TModal.add({
          attach: 'attach-example',
          title: 'Modal Alert',
          content: 'This is a message!',
          containerClassName: 'absolute',
          maskClassName: 'absolute',
          attach: '#attach-example',
        });
      }}
    >
      Open Modal
    </TButton>
  );
}`;function C(){return(0,t.jsx)(l.CodePreview,{code:g,id:"attach-example",demoContainerStyle:{height:400}})}function j(e){let l={code:"code",p:"p",...(0,n.useMDXComponents)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(l.p,{children:["这里必须强调一下，我们的 ",(0,t.jsx)(l.code,{children:"modal"})," 框是完全自定义的，所以很多别的组件库的类似自定义页脚，自定义标题的功能，就没有举例了。\n香料如何自定义 ",(0,t.jsx)(l.code,{children:"modal"})," 框，请本系列第一章节《必读指南》。"]}),"\n",(0,t.jsxs)(l.p,{children:["以下 ",(0,t.jsx)(l.code,{children:"demo"})," 中自定义样式是基于 ",(0,t.jsx)(l.code,{children:"Alter"})," 组件实现章节中的 ",(0,t.jsx)(l.code,{children:"TModalBox"})," 组件，可以在 ",(0,t.jsx)(l.code,{children:"Alter"})," 章节中查看详细代码。"]}),"\n","\n",(0,t.jsx)(r.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["最简单的例子。",(0,t.jsx)(o.Code,{children:"切记"}),"一定要看 ",(0,t.jsx)(o.Code,{children:"必读指南"}),"中",(0,t.jsx)(o.Code,{children:"如何封装 modal"}),"，已经如何引入",(0,t.jsx)(o.Code,{children:"ModalProvider"}),"。这样你可以自定义自己喜欢的 ",(0,t.jsx)(o.Code,{children:"modal"})," 样式。这里的案例仅仅是一系列例子而已。"]}),children:"基本用法"}),"\n",(0,t.jsx)(a,{}),"\n","\n",(0,t.jsx)(r.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["你可以通过自定义 ",(0,t.jsx)(o.Code,{children:"modal"})," 的尺寸。当然你也可以自定义一个 ",(0,t.jsx)(o.Code,{children:"modal"})," 框，然后定义传参内容）"]}),children:"自定义尺寸"}),"\n",(0,t.jsx)(u,{}),"\n","\n",(0,t.jsx)(r.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["你可以通过自定义 ",(0,t.jsx)(o.Code,{children:"initialFocusEl"})," 函数来初始化需要聚焦的元素。"]}),children:"聚焦元素"}),"\n",(0,t.jsx)(s,{}),"\n","\n",(0,t.jsx)(r.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["你可以通过自定义 ",(0,t.jsx)(o.Code,{children:"modal"})," 样式来设置内部滚动。"]}),children:"滚动方式"}),"\n",(0,t.jsx)(m,{}),"\n","\n",(0,t.jsx)(r.H3Sub,{sub:(0,t.jsx)(t.Fragment,{children:"如何嵌套弹窗。"}),children:"嵌套弹窗"}),"\n",(0,t.jsx)(h,{}),"\n","\n",(0,t.jsx)(r.H3Sub,{sub:(0,t.jsx)(t.Fragment,{children:"在对话框中使用表单时，如提交表单，点击确定后异步关闭对话框。"}),children:"异步关闭"}),"\n",(0,t.jsx)(x,{}),"\n","\n",(0,t.jsx)(r.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["默认情况下，弹窗会挂载到 ",(0,t.jsx)(o.Code,{children:"body"})," 上。你可以通过自定义 ",(0,t.jsx)(o.Code,{children:"attach"})," 来改变挂载位置。",(0,t.jsx)(o.Code,{children:"attach"})," ","是一个字符串，组件内部使用 ",(0,t.jsx)(o.Code,{children:"document.querySelector(attach)"})," 来获取挂载位置。"]}),children:"挂载位置"}),"\n",(0,t.jsx)(C,{})]})}function w(e={}){let{wrapper:r}={...(0,n.useMDXComponents)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}function T(){return(0,t.jsx)(w,{})}e.s(["HowMakeCssButton",()=>T],76741)}]);