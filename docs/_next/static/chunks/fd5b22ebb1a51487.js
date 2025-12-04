(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1521,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},79537,e=>{e.v({AElig:"Æ",AMP:"&",Aacute:"Á",Acirc:"Â",Agrave:"À",Aring:"Å",Atilde:"Ã",Auml:"Ä",COPY:"©",Ccedil:"Ç",ETH:"Ð",Eacute:"É",Ecirc:"Ê",Egrave:"È",Euml:"Ë",GT:">",Iacute:"Í",Icirc:"Î",Igrave:"Ì",Iuml:"Ï",LT:"<",Ntilde:"Ñ",Oacute:"Ó",Ocirc:"Ô",Ograve:"Ò",Oslash:"Ø",Otilde:"Õ",Ouml:"Ö",QUOT:'"',REG:"®",THORN:"Þ",Uacute:"Ú",Ucirc:"Û",Ugrave:"Ù",Uuml:"Ü",Yacute:"Ý",aacute:"á",acirc:"â",acute:"´",aelig:"æ",agrave:"à",amp:"&",aring:"å",atilde:"ã",auml:"ä",brvbar:"¦",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",ecirc:"ê",egrave:"è",eth:"ð",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",iacute:"í",icirc:"î",iexcl:"¡",igrave:"ì",iquest:"¿",iuml:"ï",laquo:"«",lt:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",oacute:"ó",ocirc:"ô",ograve:"ò",ordf:"ª",ordm:"º",oslash:"ø",otilde:"õ",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',raquo:"»",reg:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",times:"×",uacute:"ú",ucirc:"û",ugrave:"ù",uml:"¨",uuml:"ü",yacute:"ý",yen:"¥",yuml:"ÿ"})},27208,e=>{e.v({0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"})},73850,e=>{"use strict";var t=e.i(45100);let n=(0,e.i(51849).createIcon)({iconProps:{useFillCurrentColor:!0},viewBox:"0 0 156 94",paths:(0,t.jsx)("path",{d:"M0,31.18h31.18v62.56H0V31.18Zm155.46,5.67v56.89h-31.18V45.36c0-7.83-6.34-14.18-14.17-14.18h-17.01c.29,1.85,.44,3.74,.44,5.67v56.89h-31.18V45.36c0-7.83-6.35-14.18-14.17-14.18H31.18V0h25.51c13.15,0,24.69,6.89,31.21,17.25,2.62,4.15,4.43,8.86,5.2,13.92V0h25.51c20.35,0,36.85,16.5,36.85,36.85Z"})});e.s(["IconMLogo",0,n])},7823,e=>{"use strict";function t(e,t){if(null==e)return{};var n={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n}e.s(["default",()=>t])},37215,e=>{"use strict";function t(){return(t=Object.assign.bind()).apply(null,arguments)}e.s(["default",()=>t])},22480,e=>{"use strict";let t=(0,e.i(64334).createContext)({currentId:"",onLinkClick:()=>{},linkMap:{current:new Map}});e.s(["AnchorContext",0,t])},98319,e=>{"use strict";var t=e.i(64334);function n(...e){return(0,t.useCallback)(t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})},e)}e.s(["useComposedRefs",()=>n])},88036,e=>{"use strict";var t=e.i(45100),n=e.i(64334),r=e.i(22480);function o(e){let t=(0,n.useRef)(null);return t.current=e,(0,n.useCallback)((...e)=>t.current?.(...e),[])}var l=e.i(96224);function a(e,t){try{return e.querySelector(t)}catch(e){return null}}function i({scrollContainer:e,targetId:t,offset:n,isScrolling:r}){var o,i;if(!t)return;let c=a(document,`#${CSS.escape(t)}`);if(!c)return;let u=e.current,s=((void 0===(o=u)&&(o=window),o)&&(o===window?Math.ceil(window.pageYOffset):o.scrollTop)||0)+((e,t)=>{if(!e.getClientRects().length)return 0;let n=e.getBoundingClientRect();return n.width||n.height?t&&t!==window?n.top-t.getBoundingClientRect().top:(t=e.ownerDocument.documentElement,n.top-t.clientTop):n.top})(c,u)+n;(r.current=!0,(0,l.isWindow)(u))?u.scrollTo((void 0===(i=u)&&(i=window),i)&&(i===window?Math.ceil(window.pageXOffset||window.scrollX):i.scrollLeft)||0,s):u.scrollTop=s}function c({targetId:e,linkMap:t,wrapperRef:n,currentId:r,setCurrentId:o,onChange:l}){e&&n.current&&t.current.get(e)&&e!==r&&o(e).then(()=>{l?.(e,r)})}var u=e.i(98319);let s=(0,n.forwardRef)((e,s)=>{let{scrollContainer:d,offset:p=0,children:h,onChange:f,queryKey:m="anchor-id",isCloseInitAnchor:x,...v}=e,{currentId:C,onLinkClick:g,wrapperRef:j,linkMap:b}=function({propScrollContainer:e,onChange:t,offset:r,queryKey:u,isCloseInitAnchor:s}){var d;let p,h,f=(0,n.useRef)(null),m=(0,n.useRef)(null),x=(0,n.useRef)(new Map),v=(0,n.useRef)(!1),[C,g]=function(e){let[t,r]=(0,n.useState)({value:"",resolve:e=>{}});return(0,n.useEffect)(()=>{t.resolve(t.value)},[t]),[t.value,e=>new Promise(t=>{r(n=>{let r=e;return"function"==typeof e&&(r=e(n.value)),{value:r,resolve:t}})})]}(0),j=o(()=>{if(v.current)return;let e=function({linkMap:e,scrollContainer:t}){let n=t.current,r=((0,l.isWindow)(n)?document.documentElement||document.body:n).getBoundingClientRect(),o=Array.from(e.current.keys()),i=[];for(let e of o){let t=a(document,"#"+CSS.escape(e));if(t){let{top:e}=t.getBoundingClientRect(),o=(0,l.isWindow)(n)?e:e-r.top;o>=0&&i.push({element:t,top:o})}}return 0===i.length?null:i.reduce((e,t)=>e.top<=t.top?e:t).element}({linkMap:x,scrollContainer:m});e?.id&&c({targetId:e.id,linkMap:x,wrapperRef:f,currentId:C,setCurrentId:g,onChange:t})}),b=o((d=()=>{j(),v.current=!1},p=null,(h=(...e)=>{p||(p=setTimeout(()=>{p=null,d(...e)},30))}).cancel=()=>{p&&(clearTimeout(p),p=null)},h));return(0,n.useEffect)(()=>(m.current=(0,l.isString)(e)?a(document,e):e||window,m.current?.addEventListener("scroll",b),()=>{m.current?.removeEventListener("scroll",b)}),[b,e]),(0,n.useEffect)(()=>{if(!s)return void b();let e=new URLSearchParams(new URL(window.location.href).search).get(u);e&&(c({targetId:e,linkMap:x,wrapperRef:f,currentId:C,setCurrentId:g,onChange:t}),i({scrollContainer:m,targetId:e,offset:r,isScrolling:v}))},[]),{onScroll:b,currentId:C,onLinkClick:function(e,n){e.preventDefault(),c({targetId:n,linkMap:x,wrapperRef:f,currentId:C,setCurrentId:g,onChange:t}),i({scrollContainer:m,targetId:n,offset:r,isScrolling:v})},wrapperRef:f,scrollContainer:m,linkMap:x}}({propScrollContainer:d,onChange:f,offset:p,queryKey:m,isCloseInitAnchor:x});return(0,t.jsx)(r.AnchorContext.Provider,{value:{currentId:C,linkMap:b,onLinkClick:g},children:(0,t.jsx)("div",{...v,ref:(0,u.useComposedRefs)(j,s),children:h})})});e.s(["Anchor",0,s],88036)},69438,e=>{"use strict";var t=e.i(45100),n=e.i(64334),r=e.i(22480),o=e.i(98319);let l=(0,n.forwardRef)((e,l)=>{let{onLinkClick:a,linkMap:i,currentId:c}=(0,n.useContext)(r.AnchorContext),{onClick:u,targetId:s,children:d,className:p,activeClassName:h,...f}=e,m=(0,n.useRef)(null);return(0,n.useEffect)(()=>{var e;return e=m.current,s&&i.current.set(s,e),()=>{i.current.delete(s)}},[s,i]),(0,t.jsx)("div",{ref:(0,o.useComposedRefs)(l,m),...f,onClick:e=>{e.stopPropagation(),u?.(e),a?.(e,s)},"data-target-id":s,className:c===s?h:p,children:d})});e.s(["AnchorLink",0,l],69438)},93562,e=>{"use strict";var t=e.i(88036),n=e.i(69438),r=e.i(22480);let o={Root:t.Anchor,Link:n.AnchorLink,Context:r.AnchorContext};e.s(["Anchor",()=>o])},59772,e=>{"use strict";var t=e.i(64334);let n=(0,t.createContext)({checked:!1});var r=e.i(45100),o=e.i(2157);let l=(0,t.createContext)({type:"radio"}),a={RadioContext:n,Root:function(e){let a=(0,t.useContext)(l),i=function({props:e,context:t}){let n={...e};return t.group&&(n.checked=t.value===e.value,n.disabled=!!(t.disabled||e.disabled),n.readonly=!!(t.readonly||e.readonly)),n}({props:e,context:a}),{disabled:c,readonly:u,children:s,value:d,checked:p,onChange:h,...f}=i,m=(0,t.useRef)(null),[x,v]=(0,o.useMergeValue)(!1,{value:p,defaultValue:i.defaultChecked});return(0,r.jsx)(n.Provider,{value:{checked:x,disabled:c,readonly:u},children:(0,r.jsxs)("label",{...f,onClick:function(e){c||u?e.preventDefault():f?.onClick?.(e)},"aria-disabled":!!c,"aria-readonly":!!u,"aria-checked":!!x,children:[(0,r.jsx)("input",{ref:m,disabled:!!c,value:d,type:"radio",checked:!!x,onChange:t=>{t.persist(),t.stopPropagation(),c||u||(a.group?a?.onChangeValue?.(d,t):"checked"in e||x||v(!0),x||h?.(!0,t))},onClick:e=>{e.stopPropagation()},"aria-readonly":!!u}),s]})})},Group:function(e){let{name:t,children:n,type:a="radio",disabled:i,readonly:c,onChange:u,...s}=e,[d,p]=(0,o.useMergeValue)(void 0,{defaultValue:e.defaultValue,value:e.value});return(0,r.jsx)("div",{role:"radiogroup",...s,children:(0,r.jsx)(l.Provider,{value:{onChangeValue:(t,n)=>{t!==d&&("value"in e||p(t),u?.(t,n))},type:a,value:d,disabled:i,readonly:c,group:!0,name:t},children:n})})}};e.s(["Radio",()=>a],59772)},46030,e=>{"use strict";var t=e.i(64334);let n=(0,t.createContext)({checked:!1});var r=e.i(45100),o=e.i(2157);let l=(0,t.createContext)({isCheckboxGroup:!1,checkboxGroupValue:[],onGroupChange:()=>{},registerValue:()=>{},unRegisterValue:()=>{}}),a={CheckboxContext:n,Root:function(e){let a=(0,t.useContext)(l),{onGroupChange:i}=a,c=function({props:e,context:t}){let n={...e};return t.isCheckboxGroup&&(n.checked=-1!==t.checkboxGroupValue.indexOf(e.value),n.disabled=!!(t.disabled||e.disabled),n.readonly=!!(t.readonly||e.readonly)),n}({props:e,context:a}),{disabled:u,children:s,readonly:d,value:p,checked:h,onChange:f,indeterminate:m,...x}=c,v=(0,t.useRef)(null),[C,g]=(0,o.useMergeValue)(!1,{value:h,defaultValue:c.defaultChecked});return(0,t.useEffect)(()=>(a.registerValue(p),()=>{a.unRegisterValue(p)}),[p]),(0,r.jsx)(n.Provider,{value:{checked:C,disabled:u,indeterminate:m,readonly:d},children:(0,r.jsxs)("label",{...x,onClick:function(e){u||d?e.preventDefault():x?.onClick?.(e)},"aria-disabled":!!u,"aria-readonly":!!d,"aria-checked":!!C,children:[(0,r.jsx)("input",{value:p,disabled:!!u,ref:v,checked:!!C,onChange:function(e){e.persist(),e.stopPropagation(),u||d||(a.isCheckboxGroup?i?.(c.value,e.target.checked,e):g(e.target.checked),f?.(e.target.checked,e))},onClick:e=>e.stopPropagation(),type:"checkbox","aria-readonly":!!d}),s]})})},IconCheck:function({className:e}){return(0,r.jsx)("svg",{className:e,"aria-hidden":!0,focusable:!1,viewBox:"0 0 1024 1024",width:"200",height:"200",fill:"currentColor",children:(0,r.jsx)("path",{d:"M877.44815445 206.10060629a64.72691371 64.72691371 0 0 0-95.14856334 4.01306852L380.73381888 685.46812814 235.22771741 533.48933518a64.72691371 64.72691371 0 0 0-92.43003222-1.03563036l-45.82665557 45.82665443a64.72691371 64.72691371 0 0 0-0.90617629 90.61767965l239.61903446 250.10479331a64.72691371 64.72691371 0 0 0 71.19960405 15.14609778 64.33855261 64.33855261 0 0 0 35.08198741-21.23042702l36.24707186-42.71976334 40.5190474-40.77795556-3.36579926-3.49525333 411.40426297-486.74638962a64.72691371 64.72691371 0 0 0-3.88361443-87.64024149l-45.3088404-45.43829334z","p-id":"840"})})},Group:function(e){let{disabled:n,children:a,readonly:i,onChange:c,...u}=e,[s,d]=(0,o.useMergeValue)([],{defaultValue:e.defaultValue,value:e.value}),[p,h]=(0,t.useState)([]);return(0,r.jsx)("div",{role:"checkboxgroup",...u,children:(0,r.jsx)(l.Provider,{value:{isCheckboxGroup:!0,checkboxGroupValue:s,onGroupChange:function(e,t,n){if(!Array.isArray(s))return void console.error("Checkbox.Group value must be an array");let r=s?.slice()||[];t?r.push(e):r.splice(s.indexOf(e),1),d(r),c?.(r.filter(e=>p.indexOf(e)>-1),n)},disabled:n,readonly:i,registerValue:e=>{h(t=>Array.from(new Set([...t,e])))},unRegisterValue:e=>{h(t=>t.filter(t=>t!==e))}},children:a})})}};e.s(["Checkbox",()=>a],46030)},76741,e=>{"use strict";var t=e.i(45100),n=e.i(18694);e.i(82928);var r=e.i(69389),o=e.i(93612);e.i(73869);var l=e.i(84435);let a=`function App() {
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
}`;function i(){return(0,t.jsx)(l.CodePreview,{code:a})}let c=`function App() {
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
}`;function u(){return(0,t.jsx)(l.CodePreview,{code:c})}let s=`function App() {
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
`;function d(){return(0,t.jsx)(l.CodePreview,{code:s})}let p=`function App() {
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
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';`;function h(){return(0,t.jsx)(l.CodePreview,{code:p})}let f=`function App() {
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
`;function m(){return(0,t.jsx)(l.CodePreview,{code:f})}let x=`function App() {
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
}`;function v(){return(0,t.jsx)(l.CodePreview,{code:x})}let C=`function App() {
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
}`;function g(){return(0,t.jsx)(l.CodePreview,{code:C,id:"attach-example",demoContainerStyle:{height:400}})}function j(e){let l={code:"code",p:"p",...(0,n.useMDXComponents)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(l.p,{children:["这里必须强调一下，我们的 ",(0,t.jsx)(l.code,{children:"modal"})," 框是完全自定义的，所以很多别的组件库的类似自定义页脚，自定义标题的功能，就没有举例了。\n香料如何自定义 ",(0,t.jsx)(l.code,{children:"modal"})," 框，请本系列第一章节《必读指南》。"]}),"\n",(0,t.jsxs)(l.p,{children:["以下 ",(0,t.jsx)(l.code,{children:"demo"})," 中自定义样式是基于 ",(0,t.jsx)(l.code,{children:"Alter"})," 组件实现章节中的 ",(0,t.jsx)(l.code,{children:"TModalBox"})," 组件，可以在 ",(0,t.jsx)(l.code,{children:"Alter"})," 章节中查看详细代码。"]}),"\n","\n",(0,t.jsx)(r.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["最简单的例子。",(0,t.jsx)(o.Code,{children:"切记"}),"一定要看 ",(0,t.jsx)(o.Code,{children:"必读指南"}),"中",(0,t.jsx)(o.Code,{children:"如何封装 modal"}),"，已经如何引入",(0,t.jsx)(o.Code,{children:"ModalProvider"}),"。这样你可以自定义自己喜欢的 ",(0,t.jsx)(o.Code,{children:"modal"})," 样式。这里的案例仅仅是一系列例子而已。"]}),children:"基本用法"}),"\n",(0,t.jsx)(i,{}),"\n","\n",(0,t.jsx)(r.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["你可以通过自定义 ",(0,t.jsx)(o.Code,{children:"modal"})," 的尺寸。当然你也可以自定义一个 ",(0,t.jsx)(o.Code,{children:"modal"})," 框，然后定义传参内容）"]}),children:"自定义尺寸"}),"\n",(0,t.jsx)(u,{}),"\n","\n",(0,t.jsx)(r.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["你可以通过自定义 ",(0,t.jsx)(o.Code,{children:"initialFocusEl"})," 函数来初始化需要聚焦的元素。"]}),children:"聚焦元素"}),"\n",(0,t.jsx)(d,{}),"\n","\n",(0,t.jsx)(r.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["你可以通过自定义 ",(0,t.jsx)(o.Code,{children:"modal"})," 样式来设置内部滚动。"]}),children:"滚动方式"}),"\n",(0,t.jsx)(h,{}),"\n","\n",(0,t.jsx)(r.H3Sub,{sub:(0,t.jsx)(t.Fragment,{children:"如何嵌套弹窗。"}),children:"嵌套弹窗"}),"\n",(0,t.jsx)(m,{}),"\n","\n",(0,t.jsx)(r.H3Sub,{sub:(0,t.jsx)(t.Fragment,{children:"在对话框中使用表单时，如提交表单，点击确定后异步关闭对话框。"}),children:"异步关闭"}),"\n",(0,t.jsx)(v,{}),"\n","\n",(0,t.jsx)(r.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["默认情况下，弹窗会挂载到 ",(0,t.jsx)(o.Code,{children:"body"})," 上。你可以通过自定义 ",(0,t.jsx)(o.Code,{children:"attach"})," 来改变挂载位置。",(0,t.jsx)(o.Code,{children:"attach"})," ","是一个字符串，组件内部使用 ",(0,t.jsx)(o.Code,{children:"document.querySelector(attach)"})," 来获取挂载位置。"]}),children:"挂载位置"}),"\n",(0,t.jsx)(g,{})]})}function b(e={}){let{wrapper:r}={...(0,n.useMDXComponents)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}function k(){return(0,t.jsx)(b,{})}e.s(["HowMakeCssButton",()=>k],76741)}]);